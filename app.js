// This file connects the page to the server and keeps temporary chat and form state in memory.
const taxForm = document.querySelector("#tax-form");
const preview = document.querySelector("#json-preview code");
const downloadButton = document.querySelector("#download-button");
const formError = document.querySelector("#form-error");
const loginPanel = document.querySelector("#login-panel");
const loginForm = document.querySelector("#login-form");
const loginUsername = document.querySelector("#login-username");
const loginPassword = document.querySelector("#login-password");
const loginSubmit = document.querySelector("#login-submit");
const loginError = document.querySelector("#login-error");
const loginDescription = document.querySelector("#login-description");
const accountModeButton = document.querySelector("#account-mode-button");
const appShell = document.querySelector("#app-shell");
const logoutButton = document.querySelector("#logout-button");
const accountStatus = document.querySelector("#account-status");
const locationForm = document.querySelector("#location-form");
const locationSelect = document.querySelector("#location-select");
const locationSave = document.querySelector("#location-save");
const regionInput = document.querySelector("#region-input");
const locationLabel = document.querySelector("#location-label");
const locationStatus = document.querySelector("#location-status");
const currencyInput = document.querySelector("#currency-code");
const currencyOptions = document.querySelector("#currency-options");
const regionOptions = document.querySelector("#region-options");
const employmentCurrencyLabel = document.querySelector("#employment-currency-label");
const withheldCurrencyLabel = document.querySelector("#withheld-currency-label");
const retirementCurrencyLabel = document.querySelector("#retirement-currency-label");
const exportAllButton = document.querySelector("#export-all-button");
const workspace = document.querySelector("#workspace");
const savedRecords = document.querySelector("#saved-records");
const recordList = document.querySelector("#record-list");
const recordCount = document.querySelector("#record-count");
const emptyRecords = document.querySelector("#empty-records");
const aiIntakeCard = document.querySelector("#ai-intake-card");
const aiIntakeForm = document.querySelector("#ai-intake-form");
const aiDocument = document.querySelector("#ai-document");
const aiConsent = document.querySelector("#ai-consent");
const aiSubmit = document.querySelector("#ai-submit");
const aiError = document.querySelector("#ai-error");
const aiStatus = document.querySelector("#ai-status");
const chatCard = document.querySelector("#chat-card");
const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-input");
const chatConsent = document.querySelector("#chat-consent");
const chatSubmit = document.querySelector("#chat-submit");
const chatClear = document.querySelector("#chat-clear");
const chatError = document.querySelector("#chat-error");
const chatStatus = document.querySelector("#chat-status");
const chatTranscript = document.querySelector("#chat-transcript");
const chatCitations = document.querySelector("#chat-citations");

const LEGACY_VAULT_STORAGE_KEY = "taxez.encryptedVault.v1";
const LEGACY_PBKDF2_ITERATIONS = 600000;
const MAX_RECORDS = 500;
const MAX_DOCUMENT_BYTES = 8 * 1024 * 1024;
const MAX_CHAT_HISTORY_MESSAGES = 12;
const DEFAULT_SESSION_LIFETIME_MS = 15 * 60 * 1000;
const EXTRACTABLE_DOCUMENT_TYPES = [
  "Employment income statements or slips",
  "Other income statements",
  "Retirement or pension contribution records",
  "Childcare, medical, charitable, or education receipts",
  "Investment income statements",
  "Unknown / other"
];
const LEGACY_DOCUMENT_TYPES = [
  "T4 employment slips",
  "T4A or other income slips",
  "RRSP contribution receipts"
];
const VALID_RECORD_DOCUMENT_TYPES = new Set([
  ...EXTRACTABLE_DOCUMENT_TYPES,
  ...LEGACY_DOCUMENT_TYPES
]);
const COUNTRIES = window.TAXEZ_COUNTRIES;
const REGIONS = window.TAXEZ_REGIONS;
const COUNTRY_BY_CODE = Object.fromEntries(
  COUNTRIES.map((country) => [country.code, country])
);
const CURRENCY_CODES = new Set(window.TAXEZ_CURRENCIES);
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const legacyAssociatedData = encoder.encode("TaxEZ encrypted vault v1");

let records = [];
let currentRecord = null;
let isAuthenticated = false;
let isRegistering = false;
let selectedLocation = { countryCode: "CA", region: "British Columbia" };
let chatMessages = [];
let authGeneration = 0;
let sessionTimeoutId = null;

function showError(element, message) {
  element.textContent = message;
  element.hidden = false;
}

function clearError(element) {
  element.textContent = "";
  element.hidden = true;
}

function showFormError(message) {
  showError(formError, message);
}

function clearFormError() {
  clearError(formError);
}

function clearAIError() {
  clearError(aiError);
}

function clearChatError() {
  clearError(chatError);
}

async function requestApi(route, { method = "GET", body } = {}) {
  let response;
  try {
    response = await window.fetch(route, {
      method,
      credentials: "same-origin",
      cache: "no-store",
      headers: body === undefined ? {} : { "Content-Type": "application/json" },
      body: body === undefined ? undefined : JSON.stringify(body)
    });
  } catch {
    throw new Error("Cannot reach the private TaxEZ server. Start it locally and refresh this page.");
  }

  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error("The TaxEZ server returned an unreadable response.");
  }
  if (
    response.status === 401 &&
    !["/api/login", "/api/register", "/api/session"].includes(route)
  ) {
    hideAuthenticatedApp();
    throw new Error(result.error || "Your login expired. Sign in again.");
  }
  if (!response.ok) {
    throw new Error(result.error || `The request failed (HTTP ${response.status}).`);
  }
  return result;
}

function updateAppUI() {
  loginPanel.hidden = isAuthenticated;
  appShell.hidden = !isAuthenticated;
  logoutButton.hidden = !isAuthenticated;
  workspace.hidden = !isAuthenticated;
  savedRecords.hidden = !isAuthenticated;
  aiIntakeCard.hidden = !isAuthenticated;
  chatCard.hidden = !isAuthenticated;
  exportAllButton.disabled = records.length === 0;
  renderRecords();
  renderChatMessages();
}

function populateLocationOptions() {
  for (const country of COUNTRIES) {
    const option = document.createElement("option");
    option.value = country.code;
    option.textContent = country.name;
    locationSelect.append(option);
  }
  for (const currency of CURRENCY_CODES) {
    const option = document.createElement("option");
    option.value = currency;
    currencyOptions.append(option);
  }
  updateRegionOptions("CA");
}

function updateRegionOptions(countryCode) {
  regionOptions.replaceChildren();
  for (const region of REGIONS) {
    if (region.countryCode !== countryCode) continue;
    const option = document.createElement("option");
    option.value = region.name;
    option.label = region.type ? `${region.type} · ${region.code}` : region.code;
    regionOptions.append(option);
  }
}

function showAuthenticatedApp(expiresAt, username) {
  isAuthenticated = true;
  authGeneration += 1;
  if (sessionTimeoutId !== null) {
    window.clearTimeout(sessionTimeoutId);
  }
  const fallbackExpiry = Date.now() + DEFAULT_SESSION_LIFETIME_MS;
  const sessionExpiresAt = Number.isFinite(expiresAt) ? expiresAt : fallbackExpiry;
  sessionTimeoutId = window.setTimeout(
    () => hideAuthenticatedApp("Your login expired. Sign in again."),
    Math.max(0, sessionExpiresAt - Date.now())
  );
  accountStatus.textContent = username ? `Signed in as ${username}.` : "";
  updateAppUI();
}

function hideAuthenticatedApp(message = "") {
  isAuthenticated = false;
  authGeneration += 1;
  if (sessionTimeoutId !== null) {
    window.clearTimeout(sessionTimeoutId);
    sessionTimeoutId = null;
  }
  records = [];
  currentRecord = null;
  taxForm.reset();
  aiIntakeForm.reset();
  resetChat(true);
  clearAIError();
  aiStatus.textContent = "";
  accountStatus.textContent = "";
  loginPanel.hidden = false;
  appShell.hidden = true;
  logoutButton.hidden = true;
  loginPassword.value = "";
  selectedLocation = { countryCode: "CA", region: "British Columbia" };
  locationSelect.value = selectedLocation.countryCode;
  regionInput.value = selectedLocation.region;
  updateRegionOptions(selectedLocation.countryCode);
  currencyInput.value = COUNTRY_BY_CODE.CA.currency;
  updateCurrencyLabels();
  locationStatus.textContent = "";
  locationStatus.className = "location-status";
  updateLocationLabel();
  updateAppUI();
  if (message) showError(loginError, message);
  else clearError(loginError);
}

async function initializeAuth() {
  try {
    const session = await requestApi("/api/session");
    if (!session.authenticated) {
      loginPanel.hidden = false;
      return;
    }
    showAuthenticatedApp(session.expiresAt, session.username);
    await loadRecordsAndMigrate();
  } catch (error) {
    hideAuthenticatedApp(error.message);
  }
}

async function loadRecordsAndMigrate() {
  // The server returns only the signed-in user's records; legacy data is never uploaded over existing records.
  const profile = await requestApi("/api/profile");
  if (
    !Object.hasOwn(COUNTRY_BY_CODE, profile.countryCode) ||
    typeof profile.region !== "string" ||
    profile.region.length > 80 ||
    /[\u0000-\u001f\u007f]/u.test(profile.region)
  ) {
    throw new Error("The server returned an unsupported location.");
  }
  selectedLocation = { countryCode: profile.countryCode, region: profile.region };
  locationSelect.value = selectedLocation.countryCode;
  regionInput.value = selectedLocation.region;
  updateRegionOptions(selectedLocation.countryCode);
  currencyInput.value = COUNTRY_BY_CODE[selectedLocation.countryCode].currency;
  updateLocationLabel();
  updateCurrencyLabels();
  const result = await requestApi("/api/records");
  if (
    !Array.isArray(result.records) ||
    !result.records.every((entry) =>
      entry &&
      typeof entry.id === "string" &&
      /^[a-zA-Z0-9._-]{1,64}$/.test(entry.id) &&
      validateRecord(entry.record)
    )
  ) {
    throw new Error("The server returned records in an unsupported format.");
  }
  records = result.records;
  updateAppUI();

  if (records.length === 0) {
    await migrateLegacyVault();
  }
}

function updateLocationLabel() {
  const country = COUNTRY_BY_CODE[selectedLocation.countryCode];
  const location = [selectedLocation.region, country?.name].filter(Boolean).join(", ");
  locationLabel.textContent = location;
}

function updateCurrencyLabels() {
  const label = `(${currencyInput.value.trim().toUpperCase() || "currency"})`;
  employmentCurrencyLabel.textContent = label;
  withheldCurrencyLabel.textContent = label;
  retirementCurrencyLabel.textContent = label;
}

function resetPreview() {
  currentRecord = null;
  preview.textContent = JSON.stringify(
    { status: "Ready for AI extraction or manual entry" },
    null,
    2
  );
  downloadButton.disabled = true;
}

function renderChatMessages() {
  chatTranscript.replaceChildren();
  chatCitations.replaceChildren();
  if (chatMessages.length === 0) {
    const welcome = document.createElement("p");
    welcome.className = "chat-message assistant";
    welcome.textContent = "I'm TaxEZ. Ask a general tax-prep question, or tell me made-up values you'd like to add to your form.";
    chatTranscript.append(welcome);
    return;
  }

  for (const message of chatMessages) {
    const item = document.createElement("p");
    item.className = `chat-message ${message.role === "user" ? "user" : "assistant"}`;
    item.textContent = message.text;
    chatTranscript.append(item);

    if (message.role === "model" && Array.isArray(message.citations) && message.citations.length) {
      const sourceHeading = document.createElement("strong");
      sourceHeading.className = "citation-heading";
      sourceHeading.textContent = "Official tax sources";
      const list = document.createElement("ul");
      list.className = "citation-list";
      for (const citation of message.citations) {
        let url;
        try {
          url = new URL(citation.url);
        } catch {
          continue;
        }
        if (
          url.protocol !== "https:" ||
          url.username ||
          url.password ||
          url.port
        ) {
          continue;
        }
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = url.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = citation.title;
        listItem.append(link);
        list.append(listItem);
      }
      if (list.children.length) {
        chatCitations.append(sourceHeading, list);
      }
    } else if (message.role === "model" && message.citations?.length === 0) {
      const noSources = document.createElement("p");
      noSources.className = "citation-note";
      noSources.textContent = "No official source was verified for this response.";
      chatCitations.append(noSources);
    }
  }
  chatTranscript.scrollTop = chatTranscript.scrollHeight;
}

function resetChat(resetConsent = false) {
  chatMessages = [];
  chatInput.value = "";
  chatStatus.textContent = "";
  if (resetConsent) chatConsent.checked = false;
  clearChatError();
  renderChatMessages();
}

function trimChatHistory() {
  while (chatMessages.length > MAX_CHAT_HISTORY_MESSAGES) {
    chatMessages.shift();
    if (chatMessages[0]?.role === "model") chatMessages.shift();
  }
}

function applyChatFields(fields) {
  if (!fields || typeof fields !== "object" || Array.isArray(fields)) {
    throw new Error("The AI returned invalid form suggestions. Review the values manually.");
  }
  const fieldNames = ["taxYear", "employmentIncome", "incomeTaxWithheld", "retirementContributions"];
  for (const field of fieldNames) {
    const value = fields[field];
    if (value === null) continue;
    if (
      typeof value !== "number" ||
      !Number.isFinite(value) ||
      (field === "taxYear"
        ? !Number.isInteger(value) || value < 2000 || value > 2099
        : value < 0 || value > 99999999.99)
    ) {
      throw new Error("The AI returned an invalid form value. Review the values manually.");
    }
  }
  const suggestedFields = fieldNames.filter((field) => fields[field] !== null);
  for (const field of suggestedFields) taxForm.elements[field].value = String(fields[field]);
  return suggestedFields.length > 0;
}

function bytesToBase64(bytes) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
  }
  return window.btoa(binary);
}

function applyExtraction(extraction) {
  if (
    !extraction ||
    !EXTRACTABLE_DOCUMENT_TYPES.includes(extraction.documentType) ||
    !["taxYear", "employmentIncome", "incomeTaxWithheld", "retirementContributions"].every(
      (field) =>
        extraction[field] === null ||
        (typeof extraction[field] === "number" && Number.isFinite(extraction[field]))
    )
  ) {
    throw new Error("Gemini returned values TaxEZ cannot review. Enter the details manually.");
  }
  for (const field of ["taxYear", "employmentIncome", "incomeTaxWithheld", "retirementContributions"]) {
    taxForm.elements[field].value = extraction[field] === null ? "" : String(extraction[field]);
  }
  for (const checkbox of taxForm.querySelectorAll('input[name="documentsCollected"]')) {
    checkbox.checked = extraction.documentType !== "Unknown / other" &&
      checkbox.value === extraction.documentType;
  }
  clearFormError();
  resetPreview();
  aiStatus.textContent = "Fields were suggested, not saved. Review or correct every value before saving.";
}

function renderRecord(record) {
  currentRecord = record;
  preview.textContent = JSON.stringify(record, null, 2);
  downloadButton.disabled = false;
}

function validateRecord(record) {
  const validCommonFields = Boolean(
    record &&
    Number.isInteger(record.taxYear) &&
    record.taxYear >= 2000 &&
    record.taxYear <= 2099 &&
    ["employmentIncome", "incomeTaxWithheld"].every(
      (field) => Number.isFinite(record[field]) && record[field] >= 0 &&
        record[field] <= 99999999.99
    ) &&
    Array.isArray(record.documentsCollected) &&
    record.documentsCollected.length <= EXTRACTABLE_DOCUMENT_TYPES.length &&
    record.documentsCollected.every((value) => VALID_RECORD_DOCUMENT_TYPES.has(value))
  );
  if (!validCommonFields) return false;
  if (record.schemaVersion === 1) {
    return record.country === "Canada" &&
      record.currency === "CAD" &&
      Number.isFinite(record.rrspContributions) &&
      record.rrspContributions >= 0 &&
      record.rrspContributions <= 99999999.99 &&
      [
        "British Columbia", "Alberta", "Saskatchewan", "Manitoba", "Ontario", "Quebec",
        "New Brunswick", "Nova Scotia", "Prince Edward Island", "Newfoundland and Labrador",
        "Yukon", "Northwest Territories", "Nunavut"
      ].includes(record.province);
  }
  return record.schemaVersion === 2 &&
    COUNTRY_BY_CODE[record.countryCode]?.name === record.country &&
    typeof record.region === "string" &&
    record.region.length <= 80 &&
    CURRENCY_CODES.has(record.currency) &&
    Number.isFinite(record.retirementContributions) &&
    record.retirementContributions >= 0 &&
    record.retirementContributions <= 99999999.99;
}

async function persistRecords(nextRecords) {
  if (!isAuthenticated) throw new Error("Sign in before saving records.");
  const result = await requestApi("/api/records", {
    method: "PUT",
    body: { records: nextRecords }
  });
  if (result.saved !== true) throw new Error("The server did not confirm that records were saved.");
  records = nextRecords;
  updateAppUI();
}

function renderRecords() {
  recordList.replaceChildren();
  recordCount.textContent = `${records.length} ${records.length === 1 ? "record" : "records"}`;
  emptyRecords.hidden = records.length > 0;
  exportAllButton.disabled = records.length === 0;
  for (const entry of [...records].reverse()) {
    const item = document.createElement("li");
    item.className = "record-item";
    const summary = document.createElement("div");
    summary.className = "record-summary";
    const title = document.createElement("strong");
    title.textContent = `Tax year ${entry.record.taxYear}`;
    const details = document.createElement("span");
    const jurisdiction = entry.record.schemaVersion === 1
      ? `${entry.record.province}, Canada`
      : [entry.record.region, entry.record.country].filter(Boolean).join(", ");
    const amount = new Intl.NumberFormat("en", {
      style: "currency",
      currency: entry.record.currency
    }).format(entry.record.employmentIncome);
    details.textContent = `${jurisdiction} · ${amount} employment income · ${entry.record.documentsCollected.length} document types`;
    summary.append(title, details);

    const actions = document.createElement("div");
    actions.className = "record-actions";
    const reviewButton = document.createElement("button");
    reviewButton.className = "button button-small button-download";
    reviewButton.type = "button";
    reviewButton.textContent = "Review";
    reviewButton.addEventListener("click", () => renderRecord(entry.record));
    const deleteButton = document.createElement("button");
    deleteButton.className = "button button-small button-quiet";
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", async () => {
      if (!window.confirm(`Delete the tax year ${entry.record.taxYear} record?`)) return;
      try {
        await persistRecords(records.filter((record) => record.id !== entry.id));
        resetPreview();
      } catch (error) {
        showFormError(`The record was not deleted: ${error.message}`);
      }
    });
    actions.append(reviewButton, deleteButton);
    item.append(summary, actions);
    recordList.append(item);
  }
}

function downloadJSON(value, filename) {
  const file = new Blob([`${JSON.stringify(value, null, 2)}\n`], {
    type: "application/json"
  });
  const downloadUrl = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
}

function readAmount(fieldName) {
  const amount = Number(taxForm.elements[fieldName].value);
  if (!Number.isFinite(amount) || amount < 0 || amount > 99999999.99) {
    throw new Error("Enter an amount between $0 and $99,999,999.99.");
  }
  return Math.round(amount * 100) / 100;
}

function decodeBase64(value) {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error("The old browser vault is incomplete or damaged.");
  }
  let binary;
  try {
    binary = window.atob(value);
  } catch {
    throw new Error("The old browser vault is incomplete or damaged.");
  }
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function decryptLegacyVault(passphrase, serialized) {
  // This old browser-only format is read only so users can move it into their new account once.
  let envelope;
  try {
    envelope = JSON.parse(serialized);
  } catch {
    throw new Error("The old browser vault is damaged or has an unsupported format.");
  }
  if (
    envelope?.version !== 1 ||
    envelope.kdf !== "PBKDF2-SHA-256" ||
    envelope.iterations !== LEGACY_PBKDF2_ITERATIONS ||
    envelope.cipher !== "AES-GCM-256"
  ) {
    throw new Error("The old browser vault is damaged or has an unsupported format.");
  }
  const salt = decodeBase64(envelope.salt);
  const iv = decodeBase64(envelope.iv);
  const ciphertext = decodeBase64(envelope.ciphertext);
  if (salt.length !== 16 || iv.length !== 12 || ciphertext.length < 16) {
    throw new Error("The old browser vault is damaged or has an unsupported format.");
  }

  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    encoder.encode(passphrase),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  const key = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: LEGACY_PBKDF2_ITERATIONS,
      hash: "SHA-256"
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"]
  );
  let plaintext;
  try {
    plaintext = await window.crypto.subtle.decrypt(
      { name: "AES-GCM", iv, additionalData: legacyAssociatedData, tagLength: 128 },
      key,
      ciphertext
    );
  } catch {
    throw new Error("The old vault passphrase is incorrect, or its data is damaged.");
  }
  let value;
  try {
    value = JSON.parse(decoder.decode(plaintext));
  } catch {
    throw new Error("The old browser vault is damaged or has an unsupported format.");
  }
  if (
    !Array.isArray(value) ||
    value.length > MAX_RECORDS ||
    !value.every((entry) =>
      entry &&
      typeof entry.id === "string" &&
      entry.id.length > 0 &&
      entry.id.length <= 64 &&
      validateRecord(entry.record)
    )
  ) {
    throw new Error("The old browser vault contains records that cannot be migrated.");
  }
  return value;
}

async function migrateLegacyVault() {
  let serialized;
  try {
    serialized = window.localStorage.getItem(LEGACY_VAULT_STORAGE_KEY);
  } catch {
    accountStatus.textContent = "The old browser vault could not be checked. Its data has not been changed.";
    return;
  }
  if (serialized === null) return;

  const passphrase = window.prompt(
    "An old encrypted TaxEZ vault was found in this browser. Enter its old passphrase once to migrate the records to your account. Cancel to leave it untouched."
  );
  if (passphrase === null) {
    accountStatus.textContent = "Old browser records remain untouched and have not been migrated.";
    return;
  }

  try {
    const oldEntries = await decryptLegacyVault(passphrase, serialized);
    await persistRecords(oldEntries);
    const verification = await requestApi("/api/records");
    if (JSON.stringify(verification.records) !== JSON.stringify(oldEntries)) {
      throw new Error("The server copy did not match the old records. The browser backup was kept.");
    }
    // Keep the old copy unless a second read confirms the account now has the same records.
    window.localStorage.removeItem(LEGACY_VAULT_STORAGE_KEY);
    accountStatus.textContent = `${oldEntries.length} old ${oldEntries.length === 1 ? "record was" : "records were"} migrated to your account.`;
  } catch (error) {
    accountStatus.textContent = `Migration did not complete; the old browser vault is still untouched. ${error.message}`;
  }
}

function setAccountMode(registering) {
  isRegistering = registering;
  loginSubmit.textContent = registering ? "Create account" : "Sign in";
  accountModeButton.textContent = registering
    ? "I already have an account"
    : "Create an account instead";
  loginDescription.textContent = registering
    ? "Create an account to chat about tax topics worldwide and save synthetic demo records. Use a unique password of at least 12 characters."
    : "Sign in or create an account to chat about tax topics worldwide and save synthetic demo records.";
  loginPassword.autocomplete = registering ? "new-password" : "current-password";
  clearError(loginError);
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  clearError(loginError);
  if (!loginForm.reportValidity()) return;
  loginSubmit.disabled = true;
  try {
    const result = await requestApi(isRegistering ? "/api/register" : "/api/login", {
      method: "POST",
      body: {
        username: loginUsername.value.trim(),
        password: loginPassword.value
      }
    });
    if (!result.authenticated) throw new Error("The server did not create an authenticated session.");
    loginPassword.value = "";
    showAuthenticatedApp(result.expiresAt, result.username);
    await loadRecordsAndMigrate();
  } catch (error) {
    loginPassword.value = "";
    hideAuthenticatedApp(error.message);
  } finally {
    loginSubmit.disabled = false;
  }
});

accountModeButton.addEventListener("click", () => setAccountMode(!isRegistering));

locationSelect.addEventListener("change", () => {
  regionInput.value = "";
  updateRegionOptions(locationSelect.value);
  currencyInput.value = COUNTRY_BY_CODE[locationSelect.value]?.currency || "";
  updateCurrencyLabels();
});
currencyInput.addEventListener("input", updateCurrencyLabels);

locationForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  locationStatus.textContent = "";
  locationStatus.className = "location-status";
  const previousLocation = selectedLocation;
  const countryCode = locationSelect.value;
  const region = regionInput.value.trim();
  if (
    !Object.hasOwn(COUNTRY_BY_CODE, countryCode) ||
    region.length > 80 ||
    /[\u0000-\u001f\u007f]/u.test(region)
  ) {
    locationSelect.value = previousLocation.countryCode;
    regionInput.value = previousLocation.region;
    showError(locationStatus, "Choose a supported country and enter a region up to 80 characters.");
    locationStatus.className = "location-status error";
    return;
  }
  locationSelect.disabled = true;
  regionInput.disabled = true;
  locationSave.disabled = true;
  try {
    const result = await requestApi("/api/profile", {
      method: "PUT",
      body: { countryCode, region }
    });
    if (result.countryCode !== countryCode || result.region !== region) {
      throw new Error("The server did not confirm the new location.");
    }
    selectedLocation = { countryCode, region };
    updateLocationLabel();
    locationStatus.textContent = `Tax chat and new records now use ${locationLabel.textContent}.`;
  } catch (error) {
    locationSelect.value = previousLocation.countryCode;
    regionInput.value = previousLocation.region;
    currencyInput.value = COUNTRY_BY_CODE[previousLocation.countryCode].currency;
    showError(locationStatus, error.message);
    locationStatus.className = "location-status error";
  } finally {
    locationSelect.disabled = false;
    regionInput.disabled = false;
    locationSave.disabled = false;
  }
});

logoutButton.addEventListener("click", async () => {
  let logoutMessage = "";
  try {
    await requestApi("/api/logout", { method: "POST" });
  } catch (error) {
    logoutMessage = `You were signed out locally, but server logout could not be confirmed: ${error.message}`;
  }
  hideAuthenticatedApp(logoutMessage);
});

chatClear.addEventListener("click", () => resetChat());
chatForm.addEventListener("change", clearChatError);
chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  clearChatError();
  chatStatus.textContent = "";
  const text = chatInput.value.trim();
  if (!text) {
    showError(chatError, "Type a message first.");
    return;
  }
  if (!chatConsent.checked) {
    showError(chatError, "Confirm the Gemini chat notice before sending a message.");
    return;
  }
  if (!isAuthenticated) {
    showError(chatError, "Sign in before chatting.");
    return;
  }

  const previousMessages = chatMessages;
  chatMessages = [...previousMessages, { role: "user", text }];
  trimChatHistory();
  const messages = chatMessages.map(({ role, text: messageText }) => ({
    role,
    text: messageText
  }));
  const generationAtStart = authGeneration;
  chatInput.value = "";
  chatSubmit.disabled = true;
  renderChatMessages();
  chatStatus.textContent = "Getting a reply from Gemini…";
  try {
    const result = await requestApi("/api/chat", {
      method: "POST",
      body: { consent: chatConsent.checked, messages }
    });
    if (!isAuthenticated || authGeneration !== generationAtStart) return;
    if (typeof result.reply !== "string" || result.reply.trim().length === 0) {
      throw new Error("The AI returned an empty reply. Try again.");
    }
    const addedFields = applyChatFields(result.fields);
    chatMessages.push({
      role: "model",
      text: result.reply.trim(),
      citations: Array.isArray(result.citations) ? result.citations : []
    });
    trimChatHistory();
    renderChatMessages();
    chatStatus.textContent = addedFields
      ? "Suggested values were added to the form below. Review them before saving."
      : "Reply ready. Tell me any made-up values you'd like to add to your form.";
  } catch (error) {
    if (!isAuthenticated || authGeneration !== generationAtStart) return;
    chatMessages = previousMessages;
    chatInput.value = text;
    renderChatMessages();
    showError(chatError, error.message);
    chatStatus.textContent = "";
  } finally {
    chatSubmit.disabled = false;
  }
});

aiIntakeForm.addEventListener("change", clearAIError);
aiIntakeForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  clearAIError();
  aiStatus.textContent = "";
  if (!aiIntakeForm.reportValidity()) return;
  if (!isAuthenticated) {
    showError(aiError, "Sign in before extracting a sample.");
    return;
  }
  const file = aiDocument.files[0];
  if (!file || file.size > MAX_DOCUMENT_BYTES) {
    showError(aiError, "Choose a PDF or image no larger than 8 MB.");
    return;
  }
  const generationAtStart = authGeneration;
  let bytes = null;
  aiSubmit.disabled = true;
  aiStatus.textContent = "Sending the consented sample to Gemini for extraction…";
  try {
    bytes = new Uint8Array(await file.arrayBuffer());
    const result = await requestApi("/api/intake", {
      method: "POST",
      body: { consent: aiConsent.checked, mimeType: file.type, data: bytesToBase64(bytes) }
    });
    if (!isAuthenticated || authGeneration !== generationAtStart) return;
    applyExtraction(result.extraction);
  } catch (error) {
    showError(aiError, error.message);
  } finally {
    bytes?.fill(0);
    aiDocument.value = "";
    aiConsent.checked = false;
    aiSubmit.disabled = false;
  }
});

taxForm.addEventListener("input", () => {
  clearFormError();
  resetPreview();
});

taxForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  clearFormError();
  if (!taxForm.reportValidity()) return;

  const taxYear = Number(taxForm.elements.taxYear.value);
  if (!Number.isInteger(taxYear) || taxYear < 2000 || taxYear > 2099) {
    showFormError("Enter a whole-number tax year between 2000 and 2099.");
    taxForm.elements.taxYear.focus();
    return;
  }

  const currency = currencyInput.value.trim().toUpperCase();
  if (!CURRENCY_CODES.has(currency)) {
    showFormError("Choose a valid three-letter currency code for these amounts.");
    currencyInput.focus();
    return;
  }
  currencyInput.value = currency;

  let record;
  try {
    record = {
      schemaVersion: 2,
      countryCode: selectedLocation.countryCode,
      country: COUNTRY_BY_CODE[selectedLocation.countryCode].name,
      region: selectedLocation.region,
      taxYear,
      currency,
      employmentIncome: readAmount("employmentIncome"),
      incomeTaxWithheld: readAmount("incomeTaxWithheld"),
      retirementContributions: readAmount("retirementContributions"),
      documentsCollected: Array.from(
        taxForm.querySelectorAll('input[name="documentsCollected"]:checked'),
        (field) => field.value
      )
    };
  } catch (error) {
    showFormError(error.message);
    return;
  }
  renderRecord(record);

  try {
    if (records.length >= MAX_RECORDS) throw new Error(`The account supports up to ${MAX_RECORDS} records.`);
    await persistRecords([
      ...records,
      { id: window.crypto.randomUUID(), record }
    ]);
  } catch (error) {
    showFormError(`The record is available to review, but was not saved: ${error.message}`);
  }
});

taxForm.addEventListener("reset", () => {
  clearFormError();
  resetPreview();
});

downloadButton.addEventListener("click", () => {
  if (currentRecord) downloadJSON(currentRecord, `tax-record-${currentRecord.taxYear}.json`);
});

exportAllButton.addEventListener("click", () => {
  if (records.length === 0) return;
  downloadJSON(
    {
      schemaVersion: 1,
      exportedAt: new Date().toISOString(),
      records: records.map((entry) => entry.record)
    },
    "taxez-records-unencrypted.json"
  );
});

window.addEventListener("pagehide", () => {
  records = [];
  chatMessages = [];
});

populateLocationOptions();
initializeAuth();

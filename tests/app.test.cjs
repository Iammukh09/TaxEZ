// These browser and API fakes keep the tests offline and prevent real tax data from leaving the test process.
const assert = require("node:assert/strict");
const { readFile } = require("node:fs/promises");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");
const { webcrypto } = require("node:crypto");
const { TextDecoder, TextEncoder } = require("node:util");
const { TAXEZ_COUNTRIES, TAXEZ_CURRENCIES, TAXEZ_REGIONS } = require("../countries.js");

class FakeElement {
  constructor() {
    this.listeners = new Map();
    this.children = [];
    this.hidden = false;
    this.disabled = false;
    this.required = false;
    this.value = "";
    this.textContent = "";
    this.files = [];
  }

  addEventListener(type, callback) {
    const callbacks = this.listeners.get(type) ?? [];
    callbacks.push(callback);
    this.listeners.set(type, callbacks);
  }

  async dispatch(type, event = {}) {
    for (const callback of this.listeners.get(type) ?? []) await callback(event);
  }

  append(...children) {
    this.children.push(...children);
  }

  replaceChildren(...children) {
    this.children = children;
  }

  reportValidity() {
    return true;
  }

  focus() {}

  click() {}
}

class FakeForm extends FakeElement {
  constructor() {
    super();
    this.elements = {};
  }

  reset() {
    if (this === taxForm) {
      this.elements.taxYear.value = "2025";
      this.elements.employmentIncome.value = "";
      this.elements.incomeTaxWithheld.value = "";
      this.elements.retirementContributions.value = "0";
      this.checkboxes.forEach((checkbox) => { checkbox.checked = false; });
    } else if (this === aiIntakeForm) {
      this.elements.document.value = "";
      this.elements.consent.checked = false;
    }
    this.dispatch("reset");
  }

  querySelectorAll(selector) {
    if (selector.endsWith(":checked")) return this.checkboxes.filter((field) => field.checked);
    return this.checkboxes;
  }
}

const selectors = [
  "#tax-form",
  "#json-preview code",
  "#download-button",
  "#form-error",
  "#login-panel",
  "#login-form",
  "#login-username",
  "#login-password",
  "#login-submit",
  "#login-error",
  "#login-description",
  "#account-mode-button",
  "#app-shell",
  "#logout-button",
  "#account-status",
  "#location-form",
  "#location-select",
  "#location-save",
  "#region-input",
  "#location-label",
  "#location-status",
  "#currency-code",
  "#currency-options",
  "#region-options",
  "#employment-currency-label",
  "#withheld-currency-label",
  "#retirement-currency-label",
  "#export-all-button",
  "#workspace",
  "#saved-records",
  "#record-list",
  "#record-count",
  "#empty-records",
  "#ai-intake-card",
  "#ai-intake-form",
  "#ai-document",
  "#ai-consent",
  "#ai-submit",
  "#ai-error",
  "#ai-status",
  "#chat-card",
  "#chat-form",
  "#chat-input",
  "#chat-consent",
  "#chat-submit",
  "#chat-clear",
  "#chat-error",
  "#chat-status",
  "#chat-transcript",
  "#chat-citations"
];
const elements = Object.fromEntries(
  selectors.map((selector) => [selector, new FakeElement()])
);
elements["#app-shell"].hidden = true;
elements["#ai-intake-card"].hidden = true;
elements["#login-panel"].hidden = false;

const taxForm = new FakeForm();
taxForm.elements = {
  taxYear: { value: "2025", focus() {} },
  employmentIncome: { value: "62000.25" },
  incomeTaxWithheld: { value: "9500.5" },
  retirementContributions: { value: "2000" }
};
taxForm.checkboxes = [
  { value: "Employment income statements or slips", checked: true },
  { value: "Retirement or pension contribution records", checked: false }
];
elements["#tax-form"] = taxForm;

const locationForm = new FakeForm();
elements["#location-form"] = locationForm;

const loginForm = new FakeForm();
loginForm.elements = {
  username: elements["#login-username"],
  password: elements["#login-password"]
};
elements["#login-form"] = loginForm;

const aiIntakeForm = new FakeForm();
aiIntakeForm.elements = {
  document: elements["#ai-document"],
  consent: elements["#ai-consent"]
};
elements["#ai-intake-form"] = aiIntakeForm;

const chatForm = new FakeForm();
chatForm.elements = {
  message: elements["#chat-input"],
  consent: elements["#chat-consent"]
};
elements["#chat-form"] = chatForm;

const storage = new Map();
const localStorage = {
  getItem(key) {
    return storage.get(key) ?? null;
  },
  setItem(key, value) {
    storage.set(key, String(value));
  },
  removeItem(key) {
    storage.delete(key);
  }
};
const windowListeners = new Map();
const requests = [];
let savedRecords = [];
let profileLocation = { countryCode: "CA", region: "British Columbia" };
let promptedForLegacyPassphrase = false;
const window = {
  crypto: webcrypto,
  TAXEZ_COUNTRIES,
  TAXEZ_REGIONS,
  TAXEZ_CURRENCIES,
  localStorage,
  isSecureContext: true,
  location: { protocol: "http:", hostname: "localhost" },
  atob,
  btoa,
  confirm: () => true,
  prompt: () => {
    promptedForLegacyPassphrase = true;
    return "old vault passphrase";
  },
  setTimeout: (callback, delay) => ({ callback, delay }),
  clearTimeout() {},
  fetch: async (route, options = {}) => {
    const body = options.body ? JSON.parse(options.body) : undefined;
    requests.push({ route, method: options.method || "GET", body });
    if (route === "/api/session") {
      return { ok: true, status: 200, json: async () => ({ authenticated: false }) };
    }
    if (route === "/api/profile" && options.method === "PUT") {
      profileLocation = { countryCode: body.countryCode, region: body.region };
      const country = TAXEZ_COUNTRIES.find((item) => item.code === profileLocation.countryCode);
      return {
        ok: true,
        status: 200,
        json: async () => ({
          countryCode: profileLocation.countryCode,
          countryName: country.name,
          region: profileLocation.region
        })
      };
    }
    if (route === "/api/profile") {
      return {
        ok: true,
        status: 200,
        json: async () => ({
          ...profileLocation,
          countryName: TAXEZ_COUNTRIES.find((item) => item.code === profileLocation.countryCode).name
        })
      };
    }
    if (route === "/api/register" || route === "/api/login") {
      return {
        ok: true,
        status: route === "/api/register" ? 201 : 200,
        json: async () => ({
          authenticated: true,
          username: body.username,
          expiresAt: Date.now() + 900000
        })
      };
    }
    if (route === "/api/records" && options.method === "GET") {
      return { ok: true, status: 200, json: async () => ({ records: savedRecords }) };
    }
    if (route === "/api/records" && options.method === "PUT") {
      savedRecords = body.records;
      return { ok: true, status: 200, json: async () => ({ saved: true }) };
    }
    if (route === "/api/intake") {
      assert.equal(body.consent, true);
      assert.equal(body.mimeType, "application/pdf");
      return {
        ok: true,
        status: 200,
        json: async () => ({
          extraction: {
            taxYear: 2025,
            employmentIncome: 62000.25,
            incomeTaxWithheld: 9500.5,
            retirementContributions: null,
            documentType: "Employment income statements or slips"
          }
        })
      };
    }
    if (route === "/api/chat") {
      assert.equal(body.consent, true);
      return {
        ok: true,
        status: 200,
        json: async () => ({
          reply: "Tax rules depend on the selected country.",
          fields: {
            taxYear: 2025,
            employmentIncome: 62000.25,
            incomeTaxWithheld: 9500.5,
            retirementContributions: null
          },
          citations: [{
            title: "IRS retirement plans",
            url: "https://www.irs.gov/retirement-plans"
          }]
        })
      };
    }
    if (route === "/api/logout") {
      return { ok: true, status: 200, json: async () => ({ authenticated: false }) };
    }
    throw new Error(`Unexpected API request: ${route}`);
  },
  addEventListener(type, callback) {
    windowListeners.set(type, callback);
  }
};
const document = {
  querySelector(selector) {
    return elements[selector];
  },
  createElement() {
    return new FakeElement();
  }
};

async function createLegacyVault(entries) {
  const salt = webcrypto.getRandomValues(new Uint8Array(16));
  const iv = webcrypto.getRandomValues(new Uint8Array(12));
  const material = await webcrypto.subtle.importKey(
    "raw",
    new TextEncoder().encode("old vault passphrase"),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  const key = await webcrypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: 600000, hash: "SHA-256" },
    material,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt"]
  );
  const ciphertext = await webcrypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv,
      additionalData: new TextEncoder().encode("TaxEZ encrypted vault v1"),
      tagLength: 128
    },
    key,
    new TextEncoder().encode(JSON.stringify(entries))
  );
  return JSON.stringify({
    version: 1,
    kdf: "PBKDF2-SHA-256",
    iterations: 600000,
    cipher: "AES-GCM-256",
    salt: Buffer.from(salt).toString("base64"),
    iv: Buffer.from(iv).toString("base64"),
    ciphertext: Buffer.from(ciphertext).toString("base64")
  });
}

test("app markup contains every element queried during initialization", async () => {
  const [html, source] = await Promise.all([
    readFile(path.join(__dirname, "..", "index.html"), "utf8"),
    readFile(path.join(__dirname, "..", "app.js"), "utf8")
  ]);
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id));
  const selectors = [...source.matchAll(/document\.querySelector\("([^"]+)"\)/g)]
    .map(([, selector]) => selector.match(/#([\w-]+)/)?.[1]);
  for (const id of selectors) {
    assert.ok(ids.has(id), `index.html must contain the element queried by #${id}`);
  }
});

test("account signup migrates old records and keeps AI review and saving explicit", async () => {
  const oldEntry = {
    id: "legacy-1",
    record: {
      schemaVersion: 1,
      country: "Canada",
      province: "British Columbia",
      taxYear: 2024,
      currency: "CAD",
      employmentIncome: 50000,
      incomeTaxWithheld: 7000,
      rrspContributions: 1000,
      documentsCollected: ["T4 employment slips"]
    }
  };
  storage.set(
    "taxez.encryptedVault.v1",
    await createLegacyVault([oldEntry])
  );

  const source = await readFile(path.join(__dirname, "..", "app.js"), "utf8");
  vm.runInNewContext(source, {
    document,
    window,
    TextEncoder,
    TextDecoder,
    Blob,
    URL,
    Number,
    JSON,
    Array,
    String,
    Error,
    SyntaxError,
    Uint8Array,
    Math,
    Date,
    setTimeout
  });
  await new Promise(setImmediate);
  assert.equal(elements["#app-shell"].hidden, true);
  assert.equal(elements["#login-submit"].disabled, false);

  await elements["#account-mode-button"].dispatch("click");
  elements["#login-username"].value = "alice";
  elements["#login-password"].value = "a strong account password";
  await loginForm.dispatch("submit", { preventDefault() {} });
  await new Promise(setImmediate);
  assert.equal(elements["#app-shell"].hidden, false);
  assert.equal(promptedForLegacyPassphrase, true);
  assert.equal(storage.has("taxez.encryptedVault.v1"), false);
  assert.deepEqual(savedRecords, [oldEntry]);
  assert.equal(elements["#record-count"].textContent, "1 record");
  assert.ok(requests.some((request) => request.route === "/api/register"));
  assert.equal(elements["#location-label"].textContent, "British Columbia, Canada");

  elements["#location-select"].value = "US";
  await elements["#location-select"].dispatch("change");
  assert.ok(elements["#region-options"].children.some((option) => option.value === "California"));
  elements["#region-input"].value = "California";
  await locationForm.dispatch("submit", { preventDefault() {} });
  assert.deepEqual(profileLocation, { countryCode: "US", region: "California" });
  assert.equal(elements["#location-label"].textContent, "California, United States");
  assert.match(elements["#location-status"].textContent, /new records now use California, United States/i);
  assert.equal(elements["#currency-code"].value, "USD");

  elements["#chat-input"].value = "How are 401(k) contributions treated for income tax?";
  await chatForm.dispatch("submit", { preventDefault() {} });
  assert.equal(requests.filter((request) => request.route === "/api/chat").length, 0);
  assert.match(elements["#chat-error"].textContent, /confirm the Gemini chat notice/i);
  elements["#chat-consent"].checked = true;
  await chatForm.dispatch("submit", { preventDefault() {} });
  assert.equal(requests.filter((request) => request.route === "/api/chat").length, 1);
  assert.equal(elements["#chat-transcript"].children.length, 2);
  assert.equal(elements["#chat-citations"].children.length, 2);
  assert.equal(elements["#chat-citations"].children[1].children[0].children[0].href,
    "https://www.irs.gov/retirement-plans");
  assert.equal(taxForm.elements.taxYear.value, "2025");
  assert.match(elements["#chat-status"].textContent, /review them before saving/i);

  await taxForm.dispatch("submit", { preventDefault() {} });
  assert.equal(savedRecords.length, 2, JSON.stringify({
    error: elements["#form-error"].textContent,
    location: elements["#location-label"].textContent,
    currency: elements["#currency-code"].value,
    recordWrites: requests.filter((request) =>
      request.route === "/api/records" && request.method === "PUT"
    )
  }));
  assert.equal(savedRecords[0].record.province, "British Columbia");
  assert.deepEqual(savedRecords[1].record, {
    schemaVersion: 2,
    countryCode: "US",
    country: "United States",
    region: "California",
    taxYear: 2025,
    currency: "USD",
    employmentIncome: 62000.25,
    incomeTaxWithheld: 9500.5,
    retirementContributions: 2000,
    documentsCollected: ["Employment income statements or slips"]
  });
  assert.equal(elements["#record-count"].textContent, "2 records");
  assert.equal(requests.filter((request) =>
    request.route === "/api/records" && request.method === "PUT"
  ).length, 2);

  const samplePdf = new TextEncoder().encode("%PDF-1.4 synthetic test only");
  elements["#ai-document"].files = [{
    size: samplePdf.length,
    type: "application/pdf",
    arrayBuffer: async () => samplePdf.slice().buffer
  }];
  elements["#ai-consent"].checked = true;
  await aiIntakeForm.dispatch("submit", { preventDefault() {} });
  assert.equal(elements["#record-count"].textContent, "2 records");
  assert.equal(taxForm.elements.employmentIncome.value, "62000.25");
  assert.equal(taxForm.elements.retirementContributions.value, "");
  assert.equal(elements["#ai-consent"].checked, false);
  assert.match(elements["#ai-status"].textContent, /not saved/i);

  await elements["#logout-button"].dispatch("click");
  assert.equal(elements["#app-shell"].hidden, true);
  assert.equal(elements["#chat-card"].hidden, true);
  assert.equal(elements["#chat-consent"].checked, false);
  assert.equal(elements["#record-list"].children.length, 0);

  await elements["#account-mode-button"].dispatch("click");
  window.fetch = async (route) => route === "/api/login"
    ? {
        ok: false,
        status: 401,
        json: async () => ({ error: "The username or password is incorrect." })
      }
    : { ok: true, status: 200, json: async () => ({ authenticated: false }) };
  elements["#login-username"].value = "alice";
  elements["#login-password"].value = "incorrect password";
  await loginForm.dispatch("submit", { preventDefault() {} });
  assert.equal(elements["#login-password"].value, "incorrect password");
  assert.equal(elements["#login-error"].textContent, "The username or password is incorrect.");

  window.fetch = async (route) => route === "/api/login"
    ? {
        ok: true,
        status: 200,
        json: async () => ({ authenticated: true, username: "alice", expiresAt: Date.now() + 900000 })
      }
    : {
        ok: false,
        status: 401,
        json: async () => ({ error: "Log in to use TaxEZ." })
      };
  elements["#login-password"].value = "correct password";
  await loginForm.dispatch("submit", { preventDefault() {} });
  assert.equal(elements["#login-password"].value, "correct password");
  assert.equal(elements["#login-error"].textContent, "Log in to use TaxEZ.");
});

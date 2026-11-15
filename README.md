# TaxEZ

TaxEZ is an AI-first worldwide tax-information organizer demo. Choose from 249 ISO-listed countries and territories and optionally enter a state, province, territory, or region for tax chat and new records. It offers tax-focused chat with Google Search grounding and official-source citations when available, optional synthetic-document extraction, and simple manual record entry.

Use synthetic data only. This prototype does not calculate tax or file returns, and its responses are not tax advice.

The bundled location list uses ISO country and subdivision codes; region suggestions are available where listed, with free-text entry as a fallback. Currency defaults are regional hints only and can be changed before saving a record.

## What it does

- Chat about general tax-preparation questions for your selected country and region; verified official-source links appear when a supported government domain is found in Gemini search grounding.
- Change your country and optional region; the choice is saved to your account and used as context for tax chat, document extraction, and new records.
- Enter records in a selected ISO currency; the currency default is based on the country and can be changed when needed.
- Ask for form help using made-up values; review every AI suggestion before saving.
- Optionally extract from synthetic sample documents after explicit consent.
- Create an account with a username and password, then save up to 500 records.
- Export and download JSON records; exports are unencrypted.
- Migrate an old browser vault once by entering its old passphrase. The old vault is removed only after the account copy is verified.

The chat scope is checked in the server and reinforced with model instructions. This is a risk-reduction measure, not a guarantee against prompt injection or incorrect answers. Only HTTPS links matching the selected country's configured tax-authority domains or government domain namespaces are displayed as citations; Canadian provincial domains are also filtered by the selected region. Coverage varies by country and region, so some responses may have no verified source link. Existing records keep the location and currency they were saved with when the account location changes. Old Canadian records remain readable.

## Privacy and security limits

- User records are encrypted with AES-256-GCM before storage in SQLite. The encryption key is derived from the account password with scrypt; only a password verifier and encrypted records are stored in the database.
- Passwords are never stored. Losing a password means the encrypted records cannot be recovered; there is no password reset.
- The running server holds account data keys in memory and can access records while a session is active. Encryption at rest does not protect against a compromised Codespace, server, or browser.
- Login sessions expire after 15 minutes or a server restart. Authentication and AI requests have per-IP rate limits.
- A tax chat turn may use two Gemini calls: one for a grounded answer and one for extracting explicitly stated form values. Gemini quotas still apply.
- Chat and optional documents are sent to Gemini only after consent. Gemini free-tier data-use terms may allow submitted prompts and responses to be used to improve Google products. Do not send real tax slips, personal identifiers, or real financial information.
- This demo is not production-ready. Public access permits anyone with the link to create an account. Do not use real tax or identity information, and do not treat the prototype as secure for production.

## Run locally

Use Node.js 22.13 or newer. Copy `.env.example` to `.env`, add a Gemini API key if you want AI features, and keep `.env` private:

```text
GEMINI_API_KEY=your-private-Gemini-key
GEMINI_MODEL=gemini-3.5-flash-lite
PORT=8000
TAXEZ_DATABASE_PATH=./data/taxez.sqlite
```

Start the app:

```sh
node --env-file=.env server.js
```

Open `http://127.0.0.1:8000`. The SQLite database is created under `data/` and excluded from Git. Keep a private backup if needed; database backups contain encrypted record blobs but still include account usernames and password verifiers.

## Share the demo from Codespaces

The server listens on loopback. In the VS Code **Ports** tab, forward port `8000`. For friends to open the link, change that forwarded port's visibility to **Public** and share its HTTPS URL. Keep the port private when you are not actively demoing. Anyone with a public link can create an account and use the shared Gemini quota; per-IP rate limits are not a substitute for production abuse protection.

## Tests

Run the mock-backed test suite:

```sh
node --test tests/*.test.cjs
```

Tests do not send content to Google or require an API key.

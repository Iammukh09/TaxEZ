# TaxEZ

This is a project for a hackathon and isn't meant to be used for other purposes.

TaxEZ is a tax help app built to make tax questions and form work feel a little less overwhelming. You can choose your country, add a region when needed, ask tax questions in a chat, and keep a simple record of your tax info.

It’s designed for quick, rough guidance rather than official filing help. The app gives estimates, explains assumptions, and points users toward official sources when available, but it’s not a replacement for real tax advice or a professional review.

## What it does

- Lets users pick a country and optional region to tailor the tax context.
- Answers general tax questions with AI help and links to official sources when they’re available.
- Gives rough tax estimates based on the numbers entered, and explains how the estimate was calculated.
- Lets users browse a directory of public tax forms and official government links.
- Saves tax records tied to the user’s account and keeps the selected country context with them.
- Helps users work with made-up values when reviewing a form or exploring a tax scenario.
- Can extract values from sample documents and suggest them for review.
- Supports reviewing and editing PDF overlay suggestions before creating a downloaded copy.
- Lets users create an account, save records, and export them as JSON.

## How it works

The app combines a few different pieces together:

- tax-focused chat using AI and search grounding
- rough estimate generation based on user inputs
- official-source form browsing
- document extraction for synthetic or sample files
- PDF review workflows where users can confirm or edit suggested values

It’s meant to help users understand tax information and work through forms in a guided way, while still keeping the user in control of the final result.

## Important notes

- This is a prototype and not official tax advice.
- Estimated values are rough and should be checked against current rules.
- Users should review AI-generated suggestions before saving or using them.
- The app is built for demo use and is not meant for real sensitive tax or personal data.

## Credits and sources

This project uses a mix of built-in tools, public standards, and external services:

- Node.js for the app runtime
- Plain HTML, CSS, and JavaScript for the front end
- SQLite built into Node.js for local storage
- pdf-lib for PDF generation and editing
- Google Gemini for AI chat, extraction, and document review features
- ISO 3166 and ISO 4217 standards for country, region, and currency data
- Public government sources for the form directory, including Canada Revenue Agency and the Government of British Columbia
- Synthetic/demo documents and made-up values for examples and testing only

Everything in the project is intended for demo and learning use, and real tax or personal data should not be entered.

## Run locally

Use Node.js 22.13 or later. Copy `.env.example` to `.env` and add a Gemini API key if you want the AI features enabled.

```text
GEMINI_API_KEY=your-private-Gemini-key
GEMINI_MODEL=gemini-3.1-flash-lite
PORT=8000
TAXEZ_DATABASE_PATH=./data/taxez.sqlite
```

Then run:

```sh
npm install
npm start
```

Open `http://127.0.0.1:8000` in the browser.

## Share the demo

If you want to share it from Codespaces, forward port `8000` in the VS Code Ports tab and make it public. Keep it private unless you’re actively demoing it.

## Tests

Run the test suite with:

```sh
npm test
```

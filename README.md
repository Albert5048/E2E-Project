# SauceDemo E2E & API Automation Project

This project is a Playwright-based automation suite for the SauceDemo application. It covers the main end-to-end shopping flow as well as a few validation scenarios to show real-world QA thinking.

The goal was to build a practical test project that exercises a user journey from login to checkout, verifies key business rules, and checks a public API response.

## What is covered

### End-to-end flow
- Login with valid credentials
- Add a product to the cart
- Navigate to checkout
- Fill shipping details
- Validate subtotal, tax, and total values
- Complete the purchase
- Confirm the order success page

### Negative and validation scenarios
- Locked-out user gets blocked
- Invalid login credentials show an error
- Remove an item from the cart
- Cancel checkout flow

### API checks
- GET request to a public API endpoint
- Validate successful response structure
- Validate 404 handling for a missing resource

## Tech stack
- JavaScript
- Playwright
- Allure reporting
- HTML report generation

## Project structure

```text
E2E/
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   └── CheckoutPage.js
├── tests/
│   ├── api/
│   │   └── users-api.spec.js
│   └── e2e/
│       └── Checkout.spec.js
├── package.json
├── playwright.config.js
├── README.md
└── playwright-report/
```

## Setup

Install dependencies:

```bash
npm install
```

If Playwright browsers are not installed yet:

```bash
npx playwright install
```

## Run tests

Run the full suite:

```bash
npx playwright test
```

Run only the E2E tests:

```bash
npx playwright test tests/e2e/Checkout.spec.js
```

Run only the API tests:

```bash
npx playwright test tests/api/users-api.spec.js
```

Run with browser UI visible:

```bash
npx playwright test --headed
```

## Reports

After running the tests, the HTML report can be opened with:

```bash
npx playwright show-report
```

Allure reports are also generated through the Playwright config.

## Why this project is useful

This project demonstrates a few important QA automation habits:
- using the Page Object Model for cleaner test code
- testing both positive and negative scenarios
- verifying business logic, not just clicking through UI
- covering multiple browsers in one suite
- mixing UI and API validation in one project

## CI/CD with GitHub Actions

I also set up a GitHub Actions workflow that runs the automatic test suite on push and pull request events. The workflow is defined in [.github/workflows/playwright.yml](.github/workflows/playwright.yml).

It performs the following steps:
- checks out the repository
- installs Node.js
- installs project dependencies
- installs Playwright browsers
- runs the Playwright tests
- generates an Allure HTML report
- uploads the report as a workflow artifact

This gives the project a cleaner CI setup and makes it easier to demonstrate automation in a real development workflow.

## Important note

A few scenarios were intentionally added to strengthen the project from a portfolio perspective. The suite is meant to reflect how a real QA automation project is usually structured: covering the core journey, the edge cases, and the validation points that matter most.

## Future improvements

Possible next steps for this project include:
- adding more checkout validation cases
- expanding product filtering and sorting checks
- adding logout flow coverage
- creating a clearer test naming strategy as the suite grows
- adding CI execution with GitHub Actions


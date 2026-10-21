# SauceDemo

This project uses Playwright to automate key shopping journeys on the SauceDemo website, from signing in through checkout. It is a practical example of how I structure and validate browser-based tests.

## What the tests cover

- Complete a purchase with valid customer details
- Sign in with an incorrect password
- Sign in with a locked-out account
- Add and remove a product from the cart
- Cancel checkout

The suite covers successful and unsuccessful user flows, including checkout price calculations and cart behavior. Page Objects keep page interactions separate from test scenarios, and the tests run across Chromium, Firefox, and WebKit. GitHub Actions runs the suite on pushes and pull requests and uploads an Allure report artifact, demonstrating how the tests fit into a CI workflow.

## Getting started

You'll need Node.js. Clone the repository and install the project dependencies and Playwright browsers:

```bash
git clone https://github.com/Albert5048/SauceDemo.git
cd SauceDemo
npm install
npx playwright install
```

Run the complete suite:

```bash
npx playwright test
```

To see the browser while tests are running:

```bash
npx playwright test --headed
```

To run the checkout tests directly:

```bash
npx playwright test tests/Checkout.spec.js
```

## Reports

To view Playwright's report after a local test run, use:

```bash
npx playwright show-report
```

The GitHub Actions workflow generates an Allure report from the test results and uploads it as the `allure-report-html` artifact. Download the artifact from the completed workflow run to view the report.

## GitHub Actions

The workflow at [.github/workflows/playwright.yml](.github/workflows/playwright.yml) runs on pushes and pull requests targeting `main`, `master`, or `E2E`. It installs dependencies and browsers, runs the tests, and uploads the Allure report.

## Project layout

```text
SauceDemo/
├── pages/
│   ├── CheckoutPage.js
│   ├── InventoryPage.js
│   └── LoginPage.js
├── tests/
│   └── Checkout.spec.js
├── .github/workflows/
│   └── playwright.yml
├── package.json
├── playwright.config.js
└── README.md
```


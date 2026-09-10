# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\Checkout.spec.js >> E2E Order Funnel & Business Logic Validation >> Negative Validation: Locked-out user gets blocked
- Location: tests\e2e\Checkout.spec.js:40:7

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1  | export class LoginPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.usernameInput = page.locator('#user-name');
  5  |     this.passwordInput = page.locator('#password');
  6  |     this.loginButton = page.locator('#login-button');
  7  |     this.errorMessage = page.locator('[data-test="error"]');
  8  |   }
  9  | 
  10 |   async goto() {
> 11 |     await this.page.goto('/');
     |                     ^ Error: page.goto: Target page, context or browser has been closed
  12 |   }
  13 | 
  14 |   async login(username, password) {
  15 |     await this.usernameInput.fill(username);
  16 |     await this.passwordInput.fill(password);
  17 |     await this.loginButton.click();
  18 |   }
  19 | }
```
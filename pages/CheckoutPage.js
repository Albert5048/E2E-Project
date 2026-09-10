export class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.checkoutBtn = page.locator('[data-test="checkout"]');
      this.firstNameInput = page.locator('[data-test="firstName"]');
      this.lastNameInput = page.locator('[data-test="lastName"]');
      this.postalCodeInput = page.locator('[data-test="postalCode"]');
      this.continueBtn = page.locator('[data-test="continue"]');
      this.finishBtn = page.locator('[data-test="finish"]');
      this.completeHeader = page.locator('.complete-header');
      this.itemSubtotal = page.locator('.summary_subtotal_label');
      this.taxLabel = page.locator('.summary_tax_label');
      this.totalLabel = page.locator('.summary_total_label');
    }
  
    async startCheckout() {
      await this.checkoutBtn.click();
    }
  
    async fillShippingInformation(firstName, lastName, postalCode) {
      await this.firstNameInput.fill(firstName);
      await this.lastNameInput.fill(lastName);
      await this.postalCodeInput.fill(postalCode);
      await this.continueBtn.click();
    }
  
    async completeOrder() {
      await this.finishBtn.click();
    }
  }
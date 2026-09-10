import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { InventoryPage } from '../../pages/InventoryPage.js';
import { CheckoutPage } from '../../pages/CheckoutPage.js';

test.describe('E2E Order Funnel & Business Logic Validation', () => {

  test('User can authenticate, add product, complete checkout, and verify price math', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    // 1. Authentication
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/.*inventory.html/);

    // 2. Catalog Selection
    await inventoryPage.addItemToCart('sauce-labs-backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');

    // 3. Navigation to Checkout
    await inventoryPage.goToCart();
    await checkoutPage.startCheckout();

    // 4. Input Customer Details
    await checkoutPage.fillShippingInformation('Alex', 'Developer', '10115');

    // 5. Verify Calculated Price Totals ($29.99 Subtotal + $2.40 Tax = $32.39 Total)
    await expect(checkoutPage.itemSubtotal).toContainText('29.99');
    await expect(checkoutPage.taxLabel).toContainText('2.40');
    await expect(checkoutPage.totalLabel).toContainText('32.39');

    // 6. Complete Order
    await checkoutPage.completeOrder();
    await expect(page).toHaveURL(/.*checkout-complete.html/);
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });

  test('Negative Validation: Locked-out user gets blocked', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');
  });

});
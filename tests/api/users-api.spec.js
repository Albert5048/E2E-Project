import { test, expect } from '@playwright/test';

test.describe('Backend REST API Test Suite', () => {

  test('GET /api/users/2 - Assert Status Code and Response Body', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.data.id).toBe(2);
    expect(body.data.email).toBe('janet.weaver@reqres.in');
  });

});
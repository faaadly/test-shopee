# Shopee E2E Test Assessment
How to run:
1. create `cypress.env.json` with the following values:
```
{
    "username": "<YOUR_GITHUB_USER_NAME>",
    "password": "<YOUR_GITHUB_PASSWORD>"
}
```

2. Run the following command in your terminal to open Cypress GUI:
```
npm install
npm run open
```

3. On CI environments like Jenkins/CircleCI we'll need to trigger cypress in headless mode:
```
npm run start
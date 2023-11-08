// @ts-check
const { test, expect } = require("@playwright/test");

test.skip("login", async ({ page, context }) => {
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.locator("//button[normalize-space()='Login']").click();

  //   await page.getByRole("listitem").filter({hasText:"Leave"}).click()

  // by using Child

  await page
    .getByRole("listitem")
    .filter({ has: page.getByRole("link", { name: "Leave" }) })
    .click();

  let mydate = new Date();

  let formattedDate = mydate.toISOString().replace(/[:.Z-]/g, "_") + ".zip";

  await context.tracing.stop({ path: formattedDate });
  await page.waitForTimeout(10000);
});

test.skip("radioANDCheckbox", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");

  await page.locator("//label[normalize-space()='Male']").click();

  await page.locator("//label[normalize-space()='Reading']").click();
  await page.locator("//label[normalize-space()='Sports']").check();

  await page.waitForTimeout(3000);
});

test.skip("dropdown", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.locator("//input[@id='user-name']").fill("standard_user");
  await page.locator("//input[@id='password']").fill("secret_sauce");
  await page.locator("//input[@id='login-button']").click();

  await page.waitForTimeout(3000);

  // change the dropdown menu option by using the value
  page.locator("//select[@class='product_sort_container']").selectOption("za");
  await page.waitForTimeout(3000);

  // change the dropdown menu option by using the index
  page
    .locator("//select[@class='product_sort_container']")
    .selectOption({ index: 2 });
  await page.waitForTimeout(3000);

  //  // change the dropdown menu option by using the label
  page
    .locator("//select[@class='product_sort_container']")
    .selectOption({ label: "Price (high to low)" });

  await page.waitForTimeout(3000);
});

test.skip("testing multipledropdown", async ({ page }) => {
  await page.goto(
    "https://chercher.tech/practice/practice-dropdowns-selenium-webdriver"
  );
  // select by label
  /*
  await page
    .locator("//select[@id='second']")
    .selectOption([{ label: "Pizza" }, { label: "Burger" }]);

  
  await page.waitForTimeout(3000) */
  await page
    .locator("//select[@id='second']")
    .selectOption([{ index: 0 }, { index: 2 }, { index: 1 }]);
  await page.waitForTimeout(3000);
});

test.skip("delaingwithKeyboard", async ({ page }) => {
  await page.goto("https://demoqa.com/auto-complete");

  await page.locator("//input[@id='autoCompleteMultipleInput']").fill("g");
  await page.waitForTimeout(3000);
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");

  await page.waitForTimeout(3000);
  await page.keyboard.press("Enter");

  await page.locator("//input[@id='autoCompleteMultipleInput']").fill("r");
  await page.waitForTimeout(3000);
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");

  await page.waitForTimeout(3000);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(3000);
});

test.skip("alert", async ({ page }) => {
  await page.goto("https://demoqa.com/alerts");

  await page.once("dialog", (dialog) => {
    console.log("this is the msg " + dialog.message);
    dialog.dismiss().catch((err) => {
      console.log("sorry there is an erro " + err);
    });
  });
  await page.waitForTimeout(2000);
  await page.locator("//button[@id='alertButton']").click();
  await page.waitForTimeout(2000);
});

test.skip("increaseWindowScreen", async ({ page }) => {
  await page.goto("https://www.google.com");

  await page.setViewportSize({ width: 1500, height: 1000 });

  await page.waitForTimeout(3000);
});

test("uploadFile", async ({ page }) => {
  await page.goto("https://www.foundit.in/seeker/registration");

  const fileInput = await page.locator("//input[@type='file']");

  await fileInput.setInputFiles(
    "C:/Users/User/OneDrive/Desktop/PROJECT ADVANCE/testFile.pdf"
  );

  await page.waitForTimeout(4000)
});

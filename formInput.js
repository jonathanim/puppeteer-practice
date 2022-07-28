const puppeteer = require('puppeteer');
const testURL = "https://jkorpela.fi/forms/testing.html";


(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto(testURL);
  const input = await page.waitForSelector('textarea[name="Comments"]')
  await input.click();

  for (let i = 0; i < 40; i++){
    await page.keyboard.press('Backspace');
  }
  await input.type("Testing the input box");

  await page.click("form input[name='box']",{delay: 500});

  await page.click("input[value='Send']");

  await page.screenshot({ path: 'test/finished.png', fullPage: 'true' });
  await page.goBack();
  await page.screenshot({ path: 'test/main.png', fullPage: 'true' });

  await browser.close();
})();
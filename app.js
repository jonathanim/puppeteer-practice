const puppeteer = require("puppeteer");

const url = "https://www.amazon.com/";

const searchItems = async (item) => {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage();
    await page.setViewport({height:0, width:0});
    await page.goto(`${url}`, {waitUntil:'networkidle2'});
    await page.type("#twotabsearchtextbox", item, {delay: 200});
    await page.keyboard.press('Enter');
    await page.waitForSelector("")
    const fetchItemList = await page.evaluate(() => {
        const list = [];
        const listArr = document.querySelectorAll("")

    });


    // await browser.close()
}


searchItems("water bottle")

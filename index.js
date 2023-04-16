const { default: puppeteer } = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch(headless = false);
    const page = await browser.newPage();
    await page.goto('https://www.freecodecamp.org/news/how-to-use-puppeteer-with-nodejs/');
    // await page.screenshot({ path: 'screenshot.png' });
    const para = await page.evaluate(() => {
         const Text1 = document.querySelector('.post-full-title');
        return Text1.innerText;
    })
    console.log(Text1);
    await browser.close();

})();
const puppeteer = require('puppeteer')

async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.simplilearn.com/', { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({path: 'page.pdf', format: 'A4' });

  await browser.close();
  return pdf
}
printPDF().then((response) => {
  console.log("pdf genrated succesfully.......!");
})
  .catch((e) => {
    console.log("error...!", e);
  })

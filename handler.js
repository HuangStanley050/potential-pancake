export const checkBlog = async (event, context) => {};

/*
const browser = await puppeteer.launch({headless:true});

const page = await browser.newPage();
await page.goto('https://sudocuong.com');

//console.log(await page.content());
const result = await page.evaluate(()=>document.lastModified);
console.log(result)


var date = new Date();
var dateStr =
  ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
  ("00" + date.getDate()).slice(-2) + "/" +
  date.getFullYear() + " " +
  ("00" + date.getHours()).slice(-2) + ":" +
  ("00" + date.getMinutes()).slice(-2) + ":" +
  ("00" + date.getSeconds()).slice(-2);
if(result >= dateStr){
  console.log('blog has been updated');
  //send email
} else {
  console.log("blog hasn't been updated")
}
//await page.screenshot({path: 'screenshot.png'});

await browser.close();
 */

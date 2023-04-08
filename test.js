const create_rss = require("./create-rss");

const rss = new create_rss;
rss.setChannel("MY", "https://www.google.com", "This is a test", "en");
console.log(rss.generate());

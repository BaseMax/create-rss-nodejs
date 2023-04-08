const create_rss = require("./create-rss");

const rss = new create_rss;
console.log(rss);
console.log(rss.name);
console.log(rss.generate());

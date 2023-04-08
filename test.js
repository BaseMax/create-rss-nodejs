const create_rss = require("./create-rss");

// Create a new RSS feed
const rss = new create_rss();

// Set the channel options
rss.setChannel("MY", "https://www.google.com", "This is a test", "en");

// Add a few test items
rss.addItem("Hello, World", "https://www.google.com/hello-world", "This is a hello-world test!");
rss.addItem("Hello, World 2", "https://www.google.com/hello-world2", "This is a hello-world test!");
rss.addItem("Hello, World 3", "https://www.google.com/hello-world3", "This is a hello-world test!");

// Generate the RSS feed
console.log(rss.generate());

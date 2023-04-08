# create-rss-nodejs

Create RSS feed XML file in JavaScript without any library and stress.

## Using

```bash
npm i create-rss (TODO)
```

### Example

```javascript
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
```

The output will be as follows:

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
        <channel>
                <title>MY</title>
                <link>https://www.google.com</link>
                <description>This is a test</description>
                <language>en</language>
                <item>
                        <title>Hello, World</title>
                        <link>https://www.google.com/hello-world</link>
                        <description>This is a hello-world test!</description>
                </item>
                <item>
                        <title>Hello, World 2</title>
                        <link>https://www.google.com/hello-world2</link>
                        <description>This is a hello-world test!</description>
                </item>
                <item>
                        <title>Hello, World 3</title>
                        <link>https://www.google.com/hello-world3</link>
                        <description>This is a hello-world test!</description>
                </item>
        </channel>
</rss>
```

Copyright 2023, Max Base

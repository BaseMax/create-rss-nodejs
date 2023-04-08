// RSS stands for Really Simple Syndication
module.exports = class CreateRSS {
    constructor() {
        this.channel = {
            title: "RSS Feed",
            link: "https://example.com",
            description: "RSS Feed",
            language: "en-us"
        };
        this.items = [];
    }

    addItem(title, link, description) {
        if (!title) throw new Error("Title is required");
        if (!link) link = "";

        this.items.push({
            title: title,
            link: link ?? "",
            description: description ?? ""
        });
    }

    addItems(items) {
        if (!items) throw new Error("Items are required");

        for (let i = 0; i < items.length; i++) {
            this.addItem(items[i].title, items[i].link, items[i].description);
        }
        return this;
    }


    generateItems() {
        let temp = "";
        for (let i = 0; i < this.items.length; i++) {
            temp += "\t\t<item>\n\t\t\t<title>" + this.items[i].title + "</title>\n\t\t\t<link>" + this.items[i].link + "</link>\n\t\t\t<description>" + this.items[i].description + "</description>\n\t\t</item>\n";
        }
        return temp;
    }

    generate(options) {
        // Create the RSS header
        let temp = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<rss version=\"2.0\">";

        // Open the channel tag
        temp += "\n\t<channel>\n\t\t<title>" + this.channel.title + "</title>\n\t\t<link>" + this.channel.link + "</link>\n\t\t<description>" + this.channel.description + "</description>\n\t\t<language>" + this.channel.language + "</language>\n";

        // Loop through the items and add them to the RSS feed
        this.generateItems();

        // Close the channel and rss tags
        temp += "\t</channel>\n</rss>";
        return temp;
    }
};

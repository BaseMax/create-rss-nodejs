// RSS stands for Really Simple Syndication
module.exports = class CreateRSS {
    constructor() {
        // Create local variables
        this.channel = {};
        this.items = [];

        // Fill the options with default values
        this.setOptions({});
    }

    setOptions(options) {
        if (!options) throw new Error("Options are required");

        this.channel.title = options.title ?? "RSS Feed";
        this.channel.link = options.link ?? "https://example.com";
        this.channel.description = options.description ?? "RSS Feed";
        this.channel.language = options.language ?? "en-us";

        return this;
    }

    setTitle(title) {
        if (!title) throw new Error("Title is required");

        this.channel.title = title;
        return this;
    }

    setLink(link) {
        if (!link) throw new Error("Link is required");

        this.channel.link = link;

        return this;
    }

    setDescription(description) {
        if (!description) throw new Error("Description is required");

        this.channel.description = description;

        return this;
    }

    addItem(title, link, description) {
        if (!title) throw new Error("Title is required");
        if (!link) link = "";

        this.items.push({
            title: title,
            link: link ?? "",
            description: description ?? ""
        });

        return this;
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

    generate() {
        // Create the RSS header
        let temp = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<rss version=\"2.0\">";

        // Open the channel tag
        temp += "\n\t<channel>\n\t\t<title>" + this.channel.title + "</title>\n\t\t<link>" + this.channel.link + "</link>\n\t\t<description>" + this.channel.description + "</description>\n\t\t<language>" + this.channel.language + "</language>\n";

        // Loop through the items and add them to the RSS feed
        temp += this.generateItems();

        // Close the channel and rss tags
        temp += "\t</channel>\n</rss>";
        return temp;
    }
};

const rp = require("request-promise");
const fs = require("fs");
const path = require("path");

const options = {
    json: true,
}

rp('https://www.reddit.com/r/popular.json', options)
    .then(function (payload) {
        payload.data.children.forEach(function (item) {
            if (path.extname(item.data.url) == ".jpg" || path.extname(item.data.url) == ".png" || path.extname(item.data.url) == ".gif") {
                const imageRequestOptions = {
                    url: item.data.url,
                    encoding: "base64"
                };

                rp(imageRequestOptions)
                    .then(function (image) {
                        fs.writeFile(`./downloads/${item.data.id}${path.extname(item.data.url)}`, image, "base64", function (err) {
                            if (err) throw err;
                            console.log("Saved");
                        });
                    });
            }
        });
    })
    .catch(function (err) {
        console.log(err);
    });
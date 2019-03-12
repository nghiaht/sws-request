var swsRequest = require("./index");

if (require.main === module) {
    swsRequest.get("https://api.github.com/").then(function (r) {
        return r.json();
    }).then(function (json) {
        console.log(json);
    })
}
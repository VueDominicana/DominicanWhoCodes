const fs = require("fs");
const path = require("path");
const axios = require("axios");

const sourceURL = "https://raw.githubusercontent.com/AngelGarcia13/DominicanWhoCodes/master/DWC.Blazor/wwwroot/data/developers.json";
axios({
    method: "GET",
    url: sourceURL
}).then(({ data: developers }) => {
    let developersFileContent = `{ "developers": ${JSON.stringify(developers)} }`;
    // We're calling JSON.stringify again just to format with 2 space the whole content of the file.
    developersFileContent = JSON.stringify(JSON.parse(developersFileContent), null, 2);

    fs.writeFile(path.resolve(__dirname, "../developers.json"), developersFileContent, (err => {
        if (err) throw err;
        console.log("Developers data updated correctly.");
    }))
}).catch(error => {
    console.error(error);
})

const request = require("request");
const cheerio = require("cheerio");
const lineReader = require("line-reader");

lineReader.eachLine("./url.csv", function(line, last) {
  const url = line;

  request(url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const td = $(
        "table tr td table tr td table tr:nth-child(4) td:nth-child(1)"
      );
      const address = td.text();
      console.log(address);
    }
  });
});

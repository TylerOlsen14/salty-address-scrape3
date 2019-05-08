const request = require("request");
const cheerio = require("cheerio");
const lineReader = require("line-reader");
const fs = require("fs")

lineReader.eachLine("./data.csv", function(line, last) {
  const url = line.slice(0, 69);
  request(url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const td = $(
        "table tr td table tr td table tr:nth-child(4) td:nth-child(1)"
      );
      const address = td.text();
      const csv = address + ('\n')
  const name = line.slice(70)
  const set = 'name: ' + name + ('\n') + 'url: ' + url + ('\n') + 'address: ' + address + ('\n')
  fs.appendFile('./address.json', set, (err) => {
    if (err) throw err;
    console.log(set)
    console.log('saved')
  })
    }
    });
});

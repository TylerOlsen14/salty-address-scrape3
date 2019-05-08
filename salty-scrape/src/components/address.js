const fs = require('fs')

fs.readFile('../../../address.json', 'utf8', (err, jsonString) => {
// fs.readFile('./tester.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err)
    return
  }
  try {
    const address = JSON.parse(jsonString)
    console.log('URL:', address)
  } catch(err) {
    console.log('Error parsing JSON String:', err)
  }
})
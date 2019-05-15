const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose')
const url = 'mongodb+srv://Tucker:Tucker@cluster0-tihhu.mongodb.net/test?retryWrites=true';
mongoose.connect(url)
// const assert = require('assert');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
  console.log("Connection suceeded.");
});

var Schema = mongoose.Schema;

var addressSchema = new Schema({
  url: String,
  name: String,
  address: String
})

var address = mongoose.model("Address", addressSchema);


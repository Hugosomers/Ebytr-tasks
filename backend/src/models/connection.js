const { MongoClient } = require('mongodb');
require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { URL } = process.env;
let db = null;

const connection = () => (
  db
    ? Promise.resolve(db)
    : MongoClient.connect(URL, OPTIONS)
      .then((conn) => {
        db = conn.db('ebytr');
        return db;
      })
);

module.exports = connection;

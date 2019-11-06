var mysql  = require('mysql');

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : 'root',
  database : 'sample'
})

conn.connect(() => {
  console.log(`connected`)
})

module.exports = conn;
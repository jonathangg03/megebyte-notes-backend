require('dotenv').config()
module.exports = {
  port: process.env.PORT || 3001,
  dbUri: process.env.DB_URI
}

const mongoose = require('mongoose')

module.exports = (dbUri) => {
  mongoose.connect(dbUri).then(() => console.log('DB connected'))
}

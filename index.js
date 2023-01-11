const express = require('express')
const app = express()
const port = 3000

// Apps
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// listen on port 3000
app.listen(port, function() {
  console.log(`Server is running on ${port}`);
})
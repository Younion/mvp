const express = require('express')
const path = require('path');
const app = express()
const port = 3000

// Apps
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));


// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));})

// listen on port 3000
app.listen(port, function() {
  console.log(`Server is running on ${port}`);
})
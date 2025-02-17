const express = require('express');
const path = require('path');
const posts = require('./routes/posts')
const port = process.env.PORT || 8000

const app = express();
app.use(express.urlencoded({ extended: true })); // Handles URL-encoded form data


//setup static folder
// app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/posts', posts)


// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// app.get('/about', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'))
// })

app.listen(port, ()=> {
    console.log('server is running on port', port)
})
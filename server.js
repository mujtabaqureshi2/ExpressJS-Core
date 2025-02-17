import express  from 'express';
// const logger = require('./middleware/logger')
import posts from './routes/posts.js'
import logger from './middleware/logger.js'
const port = process.env.PORT || 8000

const app = express();
app.use(express.urlencoded({ extended: true })); // Handles URL-encoded form data

//Logger middleware
app.use(logger) 



//setup static folder
// app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/po sts', posts)


// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// app.get('/about', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'))
// })

app.listen(port, ()=> {
    console.log('server is running on port', port)
})
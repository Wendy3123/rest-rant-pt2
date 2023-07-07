require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())

app.use('/places',require('./controllers/places'))

app.get('/', (req, res) => {
    // res.send('Hello from Wendys world!')
    res.render('home')
})

app.get('*',(req,res)=>{      //'*' is a wild card symbol.Make another route below your homepage route with the path set to the wildcard operator. It is important that this route is at the bottom, otherwise it will override your other pages.
    //Let's have our 404 page route legitimately return a status code 404 by calling .status(404) on the response. You can chain this call together with .send()
    // add .status(404) b/t the res.send
    // res.status(404).send('<h1>404 Page</h1>')
    res.render('error404')
    


})

app.listen(process.env.PORT)



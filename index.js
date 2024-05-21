const express = require('express')
const app = express()
const path = require('path')
const PORT = 8080
// app.get('', (req, res) => {
//     res.send("<h1>hi this is akash ghosh</h1>")
// })
const publicPath = path.join(__dirname,'public')
// app.use(express.static(publicPath))

app.set('view engine','ejs')



app.get('',(req,res) =>{
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/about',(req,res) =>{
    res.sendFile(`${publicPath}/about.html`)
})


app.get('/login',(_,res) =>{
 
    res.render('login');
})


app.get('/profile',(_,res) =>{
    const user = {
        name:'kishan rana ghosh',
        age:19,
        skills:['php','sql','django','node js','css','javascript']
    }
    res.render('profile',{user});
})
app.get('*',(req,res) =>{
    res.sendFile(`${publicPath}/4o4.html`)
})
app.listen(PORT,() =>{
    console.log(`server is listening port ${PORT}`)
})
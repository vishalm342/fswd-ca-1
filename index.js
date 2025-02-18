const express = require('express')
const app = express()
const port = 3000

app.use( express.json() )

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.post('/signUp',(req,res)=>{
    const {Username,email,password,DateofBirth} = req.body

    if (!Username || !email || !password || !DateofBirth){
        return res.status(400).json({ message: "Please fill in all fields" })
        }
    if (password.length < 8 && password.length > 16){
        return res.status(400).json({ message: "Password should be between 8 and 16 characters" })
    }

    const newUser = new User({
        Username: Username,
        email: email,
        password: password,
        DateofBirth: DateofBirth
        })
        newUser.save()
        
                
})

app.listen(port ,(req,res)=>{
    console.log(`Example app listening at http://localhost:${port}`);
})


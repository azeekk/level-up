const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const Staff = require('./models/staffs.models')

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello from node api')
})

app.post('/signup',async(req,res) => {
    try {
        const staffs = await Staff.create(req.body)
        res.status(200).json(staffs)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

mongoose.connect("mongodb+srv://azeekkalathil99:KeobGcGwojlEZ4pK@pagar-book.rkalu.mongodb.net/?retryWrites=true&w=majority&appName=pagar-book")
.then(() => {
    console.log("connected")
    app.listen(3001, () => {
        console.log("Server is running on port 3001 ");
        
    });
}).catch(() => {
    console.log("not connected")
});


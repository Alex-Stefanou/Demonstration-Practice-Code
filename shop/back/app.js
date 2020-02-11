const express = require('express')
const app = express()
const port = 4000

const liquid_model = require('./models/liquid_model')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', (req, res) => {
    res.send("Alex's Elixiers Emporium Inventory API.\n Access data using './list_stock'")
})

app.get('/list_stock', (req, res) => {
    res.send(liquid_model.list() )
})

app.get('/liquids/:id', (req, res) => {
    const id = req.params.id;
    const liquid = liquid_model.get(id)
    if (!liquid) {
        res.status(404).send("liquid not found");
    }
    res.send(liquid);
})

///*
app.post('/', (req, res) => {
    console.log(req.body);
    res.status(204).send(); //send nothing
    //res.send("Post recieved")
})
//*/
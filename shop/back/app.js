const express = require('express')
const app = express()
const port = 4000

//Whitelist vue dev url
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const liquid_model = require('./models/liquid_model')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
origin: false;

app.get('/', (req, res) => {
    res.send("Description: Alex's Elixiers Emporium Inventory API.")
})

app.get('/list_stock', (req, res) => {
    res.send(liquid_model.listStock() )
})

app.get('/liquids/:id', (req, res) => {
    const id = req.params.id;
    const liquid = liquid_model.get(id)
    if (!liquid) {
        res.status(404).send("liquid not found");
    }
    res.send(liquid);
})

/*
app.post('/', (req, res) => {
    console.log(req.body);
    res.status(204).send(); //send nothing
    //res.send("Post recieved")
})
*/
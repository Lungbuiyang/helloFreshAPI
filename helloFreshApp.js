let express = require('express');
let app = express();
let port = process.env.PORT||9122;
let mongo = require('mongodb');
const bodyParser = require('body-parser')
const cors = require('cors')
let { dbConnect, getData, postData, updateOrder, deleteOrder } = require('./controller/dbController')

///middleWare - a supporting library
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
////to overcome the port threading problem
app.use(cors());

/////////////////////////////////////////////////
//how to start defining a route
app.get('/', (req, res) => {
    res.send('Hii from express')
})


//page 1 - Plan Categories
//how to defined different route
app.get('/planCategories', async (req, res) => {
    let query = {};
    let collection = "planCategories"
    let output = await getData(collection, query)

    res.send(output)
})
//how to defined different route 28 june 23
app.get('/WhyHelloFresh', async (req, res) => {
    let query = {};
    let collection = "WhyHelloFresh"
    let output = await getData(collection, query)

    res.send(output)
})

//Number Of People
app.get('/numberOfPeople', async (req, res) => {
    let query = {};
    let collection = "numberOfPeople"
    let output = await getData(collection, query)

    res.send(output)
})

//Customizing Plan wrt Number Of People
app.get('/customizePlan', async (req, res) => {
    let query = {};
    if(req.query.peoplesId){
        query = {peoples_id:Number(req.query.peoplesId)}
    }
    else{
        query = {}
    }
    let collection = "customizePlan";
    let output = await getData(collection, query);
    
    res.send(output)
})

//page 2 
//address
app.get('/address', async (req, res) => {
    let query = {};
    if (req.query.email) {
        query = { email: req.query.email }
    }
    else {
        query = {}
    }

    let collection = "address";
    let output = await getData(collection, query);

    res.send(output)
})


app.post('/enterAddress', async (req, res) => {
    let data = req.body;
    let collection = "address";
    let response = await postData(collection, data);

    res.send(response)
})

//Page 3
//payment
app.get('/payment', async (req, res) => {
    let query = {};
    if (req.query.email) {
        query = { email: req.query.email }
    }
    else {
        query = {}
    }

    let collection = "payment";
    let output = await getData(collection, query);

    res.send(output)
})

app.post('/payment', async (req, res) => {
    let data = req.body;
    let collection = "payment";
    let response = await postData(collection, data);

    res.send(response)
})

//orders
app.get('/orderSummary', async (req, res) => {
    let query = {};
    if (req.query.email) {
        query = { email: req.query.email }
    }
    else {
        query = {}
    }

    let collection = "orderSummary";
    let output = await getData(collection, query);

    res.send(output)
})

//place Order
app.post('/orderSummary', async (req, res) => {
    let data = req.body;
    let collection = "orderSummary";
    let response = await postData(collection, data);

    res.send(response)
})


///page 4

//getting menu
app.get('/menu', async (req, res) => {
    let query = {};
    let collection = "menu";
    let output = await getData(collection, query)

    res.send(output)
})

//to target a menu with specific plan_id param
app.get('/menu/:id', async (req, res) => {
    let id = Number(req.params.id);
    let query = { plan_id: id };
    let collection = "menu";
    let output = await getData(collection, query);
    res.send(output)
})


//recipes wrt to menu
app.get('/recipes', async (req, res) => {
    let query = {};
    if (req.query.mealsId) {
        query = { menu_id: Number(req.query.mealsId) }
    }
    else {
        query = {};
    }

    let collection = "recipes"
    let output = await getData(collection, query)

    res.send(output)
})

//page 5
//menu based on customer selected
app.post('/menuDetails', async (req, res) => {
    if (Array.isArray(req.body.id)) {
        let query = { menu_id: { $in: req.body.id } };
        let collection = "menu";
        let output = await getData(collection, query);
        res.send(output)
    }
    else {
        res.send('please Pass data in form of array')
    }
})

//update 
app.put('/update', async (req, res) => {
    let collection = "orderSummary";
    let condition = { "_id": new mongo.ObjectId(req.body._id) }
    let data = {
        $set: {
            "status": req.body.status
        }
    }
    let output = await updateOrder(collection, condition, data)
})

//delete
app.delete('/deleteOrder', async (req, res) => {
    let collection = 'orderSummary';
    let condition = { "_id": new mongo.ObjectId(req.body._id) };
    let output = await deleteOrder(collection, condition)

    res.send(output)
})

//server to listen
app.listen(port, (err) => {
    dbConnect();
    if (err) throw err;
    console.log(`server is running on port ${port}`)
})





let mongo = require('mongodb');
let { MongoClient } = require('mongodb');
let mongoUrl = "mongodb+srv://lungbui:wLGZ3nLw6E4KDdQW@cluster0.hylmeoy.mongodb.net/?retryWrites=true&w=majority";
// localhostServer - mongodb://127.0.0.1:27017
// CloudServer - mongodb+srv://lungbui:wLGZ3nLw6E4KDdQW@cluster0.hylmeoy.mongodb.net/?retryWrites=true&w=majority
let client = new MongoClient(mongoUrl)

/////////////////////////////////////////////////////////
//to connect with the client
async function dbConnect() {
    await client.connect()
}

let db = client.db('helloFresh')

////getData
async function getData(colName, query) {
    let output = [];
    try {
        const cursor = db.collection(colName).find(query);
        for await (const data of cursor) {
            output.push(data)
        }
        cursor.closed

    } catch (err) {
        output.push({ 'error': 'error in getData' })
    }
    return output
}

///postData
async function postData(colName,data){
    let output;
    try{
        // await db.collection(colName).insertMany(data)
        output = db.collection(colName).insertOne(data)
    }
    catch(err){
        output = {"response":"Error in postData"}
    }

    return output
}


//update data
async function updateOrder(colName,condition,data){
    let output;
    try{
        output = await db.collection(colName).updateOne(condition,data)
    }
    catch(err){
        output = {"response":"error in update data"}
    }
    return output
}

//delete order
async function deleteOrder(colName,condition){
    let output;
    try{
        output = await db.collection(colName).deleteOne(condition)
    }
    catch(err){
        output = {"response":"Error in delete data"}
    }
    return output
}


module.exports = {
    dbConnect,
    getData,
    postData,
    updateOrder,
    deleteOrder
}
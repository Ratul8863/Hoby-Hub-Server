const express = require("express");
const cors = require('cors') 

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config() 



const app = express(); 
const port = process.env.PORT || 4500; 

app.use(cors())
app.use(express.json()) 
console.log(process.env) 



//Hoby-Hub
//


const uri = `mongodb+srv://${process.env.NAME_USER}:${process.env.PROJECT_PASS}@cluster0.vdu9uqq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");




const newhoby = client.db('hobyhubDB').collection('groups');
const newusers = client.db('hobyDB').collection('users');


// app.get('/groups', async (req, res) => { 

// //  const cursor = newcoffee.find();
// //  const result =await cursor.toArray();
// //OR
//  const result = await newhoby.find().toArray();
//  res.send(result);

// }); 


app.post('/groups', async(req,res)=>{ 
    console.log('data' , req.body ) 
    const newuser = req.body; 
     const result = await newhoby.insertOne(newuser)
    // newuser.id=user.length + 1; 
    res.send(result) 

}) 


//user

// app.post('/users', async(req,res)=>{ 
//     console.log('data' , req.body ) 
//     const newuser = req.body; 
//      const result = await newusers.insertOne(newuser)
//     // newuser.id=user.length + 1; 
//     res.send(result) 

// }) 
app.get('/users', async (req, res) => { 

//  const cursor = newcoffee.find();
//  const result =await cursor.toArray();
//OR
 const result = await newusers.find().toArray();
 res.send(result);

}); 

// app.get('/groups/:id', async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: new ObjectId(id) };
//       const user = await newhoby.findOne(query);
//       res.send(user);
//     });

app.put('/groups/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedgroup =req.body;
      const updatedDoc = {
        $set: updatedgroup
      };
      const options = { upsert: true };
      const result = await newhoby.updateOne(filter, updatedDoc, options);
      res.send(result);
    });
    

app.delete('/groups/:id', async(req, res)=>{
    const id = req.params.id;
    console.log("to be deleted",id);
    const query = {_id : new ObjectId(id)} ;
    const result = await newhoby.deleteOne(query);
    res.send(result);
})

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/',(req,res) => {
    res.send('Hoby server is generating')
});

app.listen(port, () => { 

  console.log(`Hoby server is running on port ${port}`); 

}); 
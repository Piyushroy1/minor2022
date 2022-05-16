const mongoose=require('mongoose');
const express=require('express');
const app=express();
const cors=require('cors');

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log(`server is running at port no 5000`);
})


mongoose.connect('mongodb+srv://PiyushRoy:piyush@cluster0.prsc4.mongodb.net/DetailsData?retryWrites=true&w=majority');

app.use("/",require("./routes/detailsRoute"));



// mongoose.connect(DB,{
//     useNewUrlParser: true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false

// }).then(() => {
//     console.log(`connection successfull`);
// }).catch((err) => console.log(`no connection`));

// app.get('/',(req,res) => {
//     res.send(`hello from the server`);
// });


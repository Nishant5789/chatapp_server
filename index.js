const express = require('express')
const cors = require('cors')
const monopoose = require('mongoose');
const { default: mongoose } = require('mongoose');

const app = express();
const authRoutes = require("./routes/auth");
// const messageRoutes = require("./routes/messages");
require('dotenv').config();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);


mongoose.connect(`mongodb://127.0.0.1:27017/chatapp` , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });


const server = app.listen(process.env.PORT, ()=>{
    console.log(`server listening on port ${process.env.PORT}`);
})
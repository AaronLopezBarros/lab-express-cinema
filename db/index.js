// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
const chalk = require('chalk')

const projectName = 'lab-express-cinema';
// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || `mongodb+srv://Aaron-Lopez:${process.env.PASSWORD}@cluster0.7ywow.mongodb.net/${projectName}?retryWrites=true&w=majority`;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then((x) => {
    console.log(chalk.bgBlue(`Connected to Mongo! Database name: "${x.connections[0].name}"`));
  })
  .catch((err) => {
    console.error(chalk.bgRed("Error connecting to mongo: ", err));
  });

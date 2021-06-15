//==================================BASIC-STRUCTURE===========================================

// import .env
require("dotenv").config();
//express modules
const express = require("express");

// import morgan modules
const logger = require("morgan");
//import cors modules
const cors = require("cors");
//import sequelize module
const { sequelize } = require("./models");

//this actions for client
// var cors_options = {
//   origin: `http://localhost:${process.env.SERVER_PORT}`,
// };

const PORT = process.env.SERVER_PORT || 4040;
const app = express();

app.use(cors);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

//================================ROUTE===========================================

//IMPORT MAIN ROUTES {userRoutes}
const userRoutes = require("./routes/userRoutes");
const roleRoutes = require("./routes/roleRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const movieRoutes = require("./routes/movieRoutes");

app.use("/api/rMovie", userRoutes, roleRoutes, reviewRoutes, movieRoutes);

//default routes for test connection
app.get("/", (req, res) => {
  res.send({
    status_code: 200,
    status_message: "Success",
    message: "Welcome to {App Name} API",
  });
});

//================================SERVER===========================================
//if user fill routes doesn't exist will be return it.
app.all("*", (req, res) => res.send("Sorry, this route does not exist!"));

// try {
//   app.listen(PORT, () => {
//     console.log(`App is running on port ${ PORT }`);
// });
// } catch (error) {
//   console.log(error);
// };


//connection
app.listen(PORT, async (err) => {
  //if connection error will be send respon error and console will be return it
  if (err) {
    console.log("Connection Failed!", err);
  }
  await sequelize.authenticate();
  //if connection success
  // console.log(`DEFAULT route Server Running on | http://localhost:${PORT}`);
  console.log("Server Connected...");
});

//Step 1: add routes and define the route for the default which is the home page 

const express = require("express");
const router = express.Router();

//this default route is rendering the index view 
router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

//Step 2: add the app 

module.exports = router;

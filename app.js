//step 2: set up the app

const express = require("express");
const routes = require("./routes");

const app = express();

app.set('view engine', 'pug');

app.use(routes);

//Step 3: define a port and start listening for it 
const port = 8080;
app.listen(port, () => console.log(`listening on port ${port}...`));


//Step 4: create the initial views (with pug templates)

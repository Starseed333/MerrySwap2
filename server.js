console.log('inside server.js');

// pull in required dependenies
var express = require('express');  
var methodOverride = require('method-override'); 
var bodyParser = require('body-parser');
var app = express(); 
var PORT = process.env.PORT || 3000;
var db = require("./models");

var exphbs = require('express-handlebars');


//serve static content for the app from the public directory
app.use(express.static(process.cwd() + '/public'));


app.use(bodyParser.urlencoded({
	extended: false
})); 


//override with POST command
app.use(methodOverride('_method')); 
//handlebars
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
})); 

app.set('view engine', 'handlebars'); 

//import routes from the controllers
var routes = require('./controllers/swap_controller.js'); 
app.use('/', routes); 


// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

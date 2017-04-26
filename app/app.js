const express = require('express');
const reload = require('reload');
const app = express();
let dataFile = require('./data/data.json');

//Set and find an available port.The default port is 3000.
app.set('port',process.env.PORT || 3000);

//Var to get the port available port
const portAvailable = app.get('port');

//Set the AppData a global var
app.set('appData',dataFile);

//Set the view engine to EJS
app.set('view engine', 'ejs');

//Set the views path
app.set('views', 'app/views');

//Set local global variable
app.locals.siteTitle = 'Art Org Meetups';
app.locals.allSpeakers = dataFile.speakers;

// Set the path or route for the public Folder
app.use(express.static('app/public'));

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));

//function to start the server
const server = app.listen(portAvailable, function() {
    console.log("Server is now running... Please visit localhost:" + portAvailable);
});


reload(server, app);





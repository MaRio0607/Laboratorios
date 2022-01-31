// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
      routeName: "juan",
      name: "Juan",
      phoneNum: 777777,
      email: "juancho",
      uniID: 5438567
    },

    {
      routeName: 'mario',
      name: 'mario',
      phoneNum: 888888,
      email: 'mariano',
      uniID: 902380
    }
    
  ];

  var tablesWait = [
    {
      routeName: "misa",
      name: "wait",
      phone_number: 1234567,
      email: "misa@gmai.com",
      id: 1
    },
    {
      routeName: "misa2",
      name: "wait2",
      phone_number: 1234567,
      email: "misa@gmai.com",
      id: 2
    }
  ];
  

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

app.get("/api/tables", function(req, res) {
    return res.json(reservations);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(tablesWait);
  });
  
// Displays a single character, or returns false
app.get("/api/tables/:table", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  app.get("/api/waitlist/:table", function(req, res) {
    var chosen = req.params.table;
  
    console.log(chosen);
  
    for (var i = 0; i < tablesWait.length; i++) {
      if (chosen === tablesWait[i].routeName) {
        return res.json(tablesWait[i]);
      }
    }
  
    return res.json(false);
  });

  return res.json(false);
});

// Create New reservations - takes in JSON input
app.post("/api/tables", function(req, res) {
    
    var newReservation = req.body;
  

    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    reservations.push(newReservation);
  
    res.json(newReservation);
  });
  

  app.post("/api/tablesWait", function(req, res) {

    var newtable = req.body;
  
    newtable.routeName = newtable.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newtable);
  
    tablesWait.push(newtable);
  
    res.json(newtable);
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
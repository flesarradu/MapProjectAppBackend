var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Users'); // Create a table for 'User' with default settings
mobileApp.tables.add('Places');
mobileApp.tables.add('Cases');
mobileApp.tables.add('Reviews');
app.use(mobileApp);
app.listen(process.env.PORT || 3000);

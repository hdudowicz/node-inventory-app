const monk = require('monk');
const connectionString = "localhost:27017/inventory-db";
const db = monk(connectionString);
 
module.exports = db;
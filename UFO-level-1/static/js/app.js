// from data.js
var tableData = data;
console.log(tableData);

// Add column names
var columns = ["date/time", "city", "state", "country", "shape", "comment"]

// Get a reference to the table body 
var tbody = d3.select("tbody");

// Values for each column

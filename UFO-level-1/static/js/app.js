// from data.js
var tableData = data;
//console.log(tableData);

// Add column names
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Get a reference to the table body 
var tbody = d3.select("tbody");

// Values for each column
var loadData = (startData) => {
    startData.forEach(function (ufoSighting) {
        // console.log(ufoSighting);
        var row = tbody.append("tr");
        columns.forEach(function(column) {
            row.append("td").text(ufoSighting[column])
        });
    });
}

// Show table pre-filter
loadData(tableData);

// Create the button
var button = d3.select("#filter-btn");
// Tell event listener what to do
button.on("click", function () {
    // Prevent page refresh
    d3.event.preventDefault();
    // Clear table 
    tbody.html("");
    // Select input date to get the raw HTMl nodes
    var inputElement = d3.select("#datetime");
    // Get the value property of the input date
    var inputValue = inputElement.property("value");
    // console.log(inputValue);
    // Filter the data 
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // Show in console ufo sightings
    console.log(`The total number of UFO sightings on ${inputValue} is: ${filteredData.length}`);

    // If function
    if (filteredData.length != 0) {
        loadData(filteredData);
    } else {
        tbody.append("tr").append("td").text("No data found for this date.");
    }
});

var buttonReset = d3.select("#reset-btn");
// Tell even listener what to do 
buttonReset.on("click", function () {
    // Prevent page refresh
    d3.event.preventDefault();
    //Clear table
    tbody.html("");
    // Reload the table
    loadData(tableData);
    //Show in console ufo sightings
    console.log(`The total number of sightings currently in the database: ${data.length}`);
})
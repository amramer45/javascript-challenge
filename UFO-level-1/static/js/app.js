// from data.js
var tableData = data;

// Add column names
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Get a reference to the table body 
var tbody = d3.select("tbody");

// Values for each column
var loadData = (startData) => {
    startData.forEach(function (ufoSighting) {
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
button.on("click", function () {
    tbody.html("");

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(`The total number of UFO sightings on ${inputValue} is: ${filteredData.length}`);

    if (filteredData.length != 0) {
        loadData(filteredData);
    } else {
        tbody.append("tr").append("td").text("No data found for this date.");
    }
});
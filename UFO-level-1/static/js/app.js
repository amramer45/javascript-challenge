// from data.js
var tableData = data;
console.log(tableData);

// Add column names
var columns = ["date/time", "city", "state", "country", "shape", "duration", "comments"]

// Get a reference to the table body 
var tbody = d3.select("tbody");

// Values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Create the button
var button = d3.select("#filter-btn");
button.on("click", function () {
    tbody.html("");

    var inputElement = d3.select("#date/time");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(`The total number of UFO sightings on ${inputValue} is: ${filteredData.length}`);

    filteredData.forEach(function(selections) {
        console.log(selections);
        var row = tbody.append("tr");
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
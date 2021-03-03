// import data from data.js
var tableData = data;
//console.log(tableData);

// Add column names
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Get a reference to the table body
var tbody = d3.select("tbody");

// Values for each column
var loadData = (startData) => {
    startData.forEach(function (ufoSighting) {
        //console.log(ufoSighting);
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

    // Select inputs and get raw HTML nodes
    var inputDateElement = d3.select("#datetime");
    var inputDateValue = inputDateElement.property("value").toLowerCase();

    var inputCityElement = d3.select("#cityName");
    var inputCityValue = inputCityElement.property("value").toLowerCase();

    var inputStateElement = d3.select("#stateName");
    var inputStateValue = inputStateElement.property("value").toLowerCase();

    var inputCountryElement = d3.select("#countryName");
    var inputCountryValue = inputCountryElement.property("value").toLowerCase();

    var inputShapeElement = d3.select("#shapeType");
    var inputShapeValue = inputShapeElement.property("value").toLowerCase();

    
    // Filter data
    var filteredData = tableData.filter(sighting => sighting.datetime === inputDateValue ||
                                                    sighting.city === inputCityValue ||
                                                    sighting.state === inputStateValue ||
                                                    sighting.country === inputCountryValue ||
                                                    sighting.shape === inputShapeValue);
    
    console.log(filteredData);
                                                    
    // Apply filter, collect data to keep rows that return criteria
    // if (inputDateValue !== "" ) {
    //     filteredData = filteredData.filter((ufoSightings) => ufoSightings.datetime === inputDateValue);
    // }

    // if (inputCityValue !== "" ) {
    //     filteredData = filteredData.filter((ufoSightings) => ufoSightings.cityName === inputCityValue);
    // }

    // if (inputStateValue !== "" ) {
    //     filteredData = filteredData.filter((ufoSightings) => ufoSightings.stateName === inputStateValue);
    // }

    // if (inputCountryValue !== "" ) {
    //     filteredData = filteredData.filter((ufoSightings) => ufoSightings.countryName === inputStateValue);
    // }

    // if (inputShapeValue !== "" ) {
    //     filteredData = filteredData.filter((ufoSightings) => ufoSightings.shapeType === inputShapeValue);
    // }

    // console.log(filteredData);

    //Show in console date tried and number of sightings
    console.log(`The total number of UFO sightings is: ${filteredData.length}`);
    // If functuon to help error processsing and give info to user
    if (filteredData.length != 0) {
        loadData(filteredData);
    } else {
        tbody.append("tr").append("td").text("No data found for this date.");
    }
});

// Reset button
var buttonReset = d3.select("#reset-btn");
// Tell event listener what to do
buttonReset.on("click", function () {
    // Clear table
    tbody.html("");
    // Reload table
    loadData(tableData);
    // Show in console number of ufo sightings
    console.log(`The total number of sightings currently in the database: ${data.length}`);
});
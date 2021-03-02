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

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);

    // console.log filter values  
    console.log(filteredData);

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
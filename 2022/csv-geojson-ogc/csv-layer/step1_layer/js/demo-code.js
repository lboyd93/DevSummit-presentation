// initialize a CSVLayer
const windCSVLayer = new CSVLayer({
  title: "Wind Station Data",
  url: "https://banuelosj.github.io/DevSummit-presentation/2022/csv-geojson-ogc/data/wind_data_2_18_full.csv",
  copyright: "NOAA"
});

// date variables for the fire data definition expression
const startTime = "2022-02-18";
const endTime = "2022-02-19";
const dateField = "FireDiscoveryDateTime";

// initialize a CSVLayer with a definition expression set to only
// display data from 2/18/2022 which is the date interval for the wind data layer
const fireCSVLayer = new CSVLayer({
  title: "Wildland Fire Locations",
  url: "https://banuelosj.github.io/DevSummit-presentation/2022/csv-geojson-ogc/data/WFIGS_2022_Wildland_Fire_Locations.csv",
  copyright: "WFIGS",
  definitionExpression: `${dateField} > DATE '${startTime}' AND ${dateField} < DATE '${endTime}'`
});

// add the Legend widget
const legend = new Legend({
  view: view
});

// add the Legend to the view
view.ui.add(legend, "top-right");
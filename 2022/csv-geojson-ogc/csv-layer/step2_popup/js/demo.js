require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/CSVLayer",
  "esri/widgets/Legend"
], (Map, MapView, CSVLayer, Legend) => {
  // *** create a PopupTemplate for the wind data layer using fieldInfos.

  // *** create a PopupTemplate for the fire data layer with a custom arcade expression.

  // initialize a CSVLayer
  const windCSVLayer = new CSVLayer({
    title: "Wind Station Data",
    url: "https://jbanuelos1.esri.com/data/csv/wind_data_2_18_full.csv",
    copyright: "NOAA",
    // *** add popupTemplate
  });

  // date variables for the fire data definition expression
  const startTime = "2022-02-18";
  const endTime = "2022-02-19";
  const dateField = "FireDiscoveryDateTime";

  // initialize a CSVLayer with a definition expression set to only
  // display data from 2/18/2022 which is the date interval for the wind data layer
  const fireCSVLayer = new CSVLayer({
    title: "Wildland Fire Locations",
    url: "https://jbanuelos1.esri.com/data/csv/WFIGS_2022_Wildland_Fire_Locations.csv",
    copyright: "WFIGS",
    definitionExpression: `${dateField} > DATE '${startTime}' AND ${dateField} < DATE '${endTime}'`,
    // *** add popupTemplate
  });

  // add the two CSVLayers to the map
  const map = new Map({
    basemap: "gray-vector",
    layers: [fireCSVLayer, windCSVLayer]
  });

  // initialize the view with an extent
  const view = new MapView({
    container: "viewDiv",
    map: map,
    extent: {
      type: "extent",
      xmin: -13961980.792761113,
      ymin: 3774234.6804606593,
      xmax: -12639192.111282196,
      ymax: 5214430.898644948,
      spatialReference: { wkid: 102100 }
    }
  });

  // add the Legend widget
  const legend = new Legend({
    view: view
  });

  // add the Legend to the view
  view.ui.add(legend, "top-right");
    
});

var map = L.map('map').setView([22.572645,88.363892],10); //Center co-ordinate with zoom in equal to 10
L.tileLayer('https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=5mfpNADjxhzhXQntRZVM',{
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);




// JSON data
var locations = {
"type": "FeatureCollection",
"features": [
{
"type": "Feature",
"properties": {"name": "This is a check popup feature prototype for Smart Bengal Hackathon"},
"geometry": {
"coordinates": [
  88.44560102519625,
  22.4794475212245
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {"name": "This is a check popup feature prototype for Smart Bengal Hackathon"},
"geometry": {
"coordinates": [
  88.44776594741222,
  22.478207988914235
],
"type": "Point"
}
}
]
}
var markers = L.markerClusterGroup();
var marker = L.geoJSON(locations,{
onEachFeature: function(feature,layer){
layer.bindPopup(feature.properties.name);
}
});

markers.addLayer(marker);
map.addLayer(markers);




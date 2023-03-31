
var map = L.map('map').setView([22.572645,88.363892],10); //Center co-ordinate with zoom in equal to 10
L.tileLayer('https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=5mfpNADjxhzhXQntRZVM',{
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

const geojsonMarkerOptions = {      // marker styling
    radius : 5,
    fillColor : "#0000FF",
    color : "#0000",
    weight: 5,
    opacity : 1,
    fillOpacity : 0.8
}


// Scale at bottom-left corner

L.control.scale({
    metric : true,
    imperial : true,
    maxWidth : 100,
    position : 'bottomleft',
}).addTo(map);


// Watermark logo at the bottom-left corner
L.Control.Watermark=L.Control.extend({
    onAdd:function(map){
        var img = L.DomUtil.create('img');
        img.src = 'logo.png';
        img.style.width = '80px';
        img.style.opacity = "0.7";
        return img;
        },
        onRemove:function(map){},
        });
        L.control.watermark = function(opts){
            return new L.Control.Watermark(opts);
            }
        L.control.watermark({position:'bottomleft'}).addTo(map);

var markers = L.markerClusterGroup();


var marker;

fetch('http://localhost:3000/locations')
  .then(response => response.json())
  .then(data => {
    var marker = L.geoJSON(data, {
      onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.district);
      }
    });
    markers.addLayer(marker);
    map.addLayer(markers);
  })
  .catch(error => console.error(error));

markers.addLayer(marker);
map.addLayer(markers);




// CREATE MAP
const map = L.map('map').setView([19.2952, 72.8544], 13);

// LOAD FREE MAP TILES
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

// BUS ICON
const busIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/61/61231.png',
    iconSize: [40,40]
});

// MARKER
let busMarker = L.marker([19.2952,72.8544], {icon: busIcon})
.addTo(map)
.bindPopup("🚌 School Bus");

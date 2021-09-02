/// accessToken
mapboxgl.accessToken = 'pk.eyJ1IjoibWhlcnJlcmFwMTgiLCJhIjoiY2txdm5zMmFqMDg5ZzJ1bnJtNXh3Y3gydCJ9.401fanfWTfdwR_qcXvLh-A';
// Coordenadas
const p060100109 = [-75.44522, 10.595222]; // Predio con folio 060-100109
const p060100110 = [-75.449168, 10.594895]; // Predio con folio 060-100110
const p060179656 = [-75.453613, 10.591283]; // Predio con folio 060-179656

// Se crea el mapa
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mherrerap18/cksz5cpbd9nd918nvmtwg30p5', // style URL
    center: [-75.44522, 10.595222],
    zoom: 13
});
//mapbox://styles/mherrerap18/cksz5cpbd9nd918nvmtwg30p5
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');

map.on('load', () => {
    map.addSource('Cartagena de Indias', {
        'type': 'raster',
        'url': 'mapbox://mherrerap18.2tt3d32i' // aquí va tu raster con las coordenadas p060100109
    });
    map.addLayer({
        'id': 'Cartagena de Indias',
        'source': 'Cartagena de Indias',
        'type': 'raster'
    });

    slider.addEventListener('input', (e) => {
        map.setPaintProperty(
            'Cartagena de Indias',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );

        // Value indicator
        sliderValue.textContent = e.target.value + '%';
    });
});

// create the popupp060100109
const popupp060100109 = new mapboxgl
    .Popup()
    .setHTML(`
    <table>
        <tr>
            <th>IDACTIVO: </th> 
            <td>467528</td>
        </tr> 
        <tr> 
            <th>FMI: </th> 
            <td>060100109</td>
        </tr>
        <tr>
            <th>TIPO ACTIVO: </th> 
            <td>INMUEBLE</td>
        </tr> 
        <tr> 
        <th>link: </th> 
        <td><a href="https://docs.google.com/spreadsheets/d/1JKT203HoJIPA18Lw70UiMi0pVG8bQmlM/edit?usp=sharing&ouid=117735801746855831514&rtpof=true&sd=true" target="_blank">Visita para más info</a></td>
    </tr>

    </table>`

    );
// create the popupp060100110
const popupp060100110 = new mapboxgl
    .Popup()
    .setHTML(`
    <table>
        <tr>
            <th>IDACTIVO: </th> 
            <td>467529</td>
        </tr> 
        <tr> 
            <th>FMI: </th> 
            <td>060100110</td>
        </tr>
        <tr>
            <th>TIPO ACTIVO: </th> 
            <td>INMUEBLE</td>
        </tr> 
        <tr> 
        <th>link: </th> 
        <td><a href="https://docs.google.com/spreadsheets/d/1JKT203HoJIPA18Lw70UiMi0pVG8bQmlM/edit?usp=sharing&ouid=117735801746855831514&rtpof=true&sd=true" target="_blank">Visita para más info</a></td>
    </tr>

    </table>`

    );
// create the popupp060179656
const popupp060179656 = new mapboxgl
    .Popup()
    .setHTML(`
    <table>
        <tr>
            <th>IDACTIVO: </th> 
            <td>467530</td>
        </tr> 
        <tr> 
            <th>FMI: </th> 
            <td>060179656</td>
        </tr>
        <tr>
            <th>TIPO ACTIVO: </th> 
            <td>INMUEBLE</td>
        </tr> 
        <tr> 
        <th>link: </th> 
        <td><a href="https://docs.google.com/spreadsheets/d/1JKT203HoJIPA18Lw70UiMi0pVG8bQmlM/edit?usp=sharing&ouid=117735801746855831514&rtpof=true&sd=true" target="_blank">Visita para más info</a></td>
    </tr>

    </table>`

    );
// create DOM element for the marker
const elp060100109 = document.createElement('div');
elp060100109.id = 'marker';

const elp060100110 = document.createElement('div');
elp060100110.id = 'marker';

const elp060179656 = document.createElement('div');
elp060179656.id = 'marker';

// create the marker
new mapboxgl.Marker(elp060100109)
    .setLngLat(p060100109)
    .setPopup(popupp060100109) // sets a popup on this marker
    .addTo(map);

new mapboxgl.Marker(elp060100110)
    .setLngLat(p060100110)
    .setPopup(popupp060100110) // sets a popup on this marker
    .addTo(map);

new mapboxgl.Marker(elp060179656)
    .setLngLat(p060179656)
    .setPopup(popupp060179656) // sets a popup on this marker
    .addTo(map);

// Add the control to the map.
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

// NavigationControl
map.addControl(new mapboxgl.NavigationControl());

// FullscreenControl
map.addControl(new mapboxgl.FullscreenControl());

// Add geolocate control to the map.
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
    })
);

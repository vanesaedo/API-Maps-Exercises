//1. Utiliza Leaflet para posicionarte en un mapa
//Habrá que utilizar navigator.geolocation.getCurrentPosition(...)


if ("geolocation" in navigator) {//coge datos de ubicación (coordenadas) del navegador

    navigator.geolocation.getCurrentPosition(position => {

        const map = L.map('map').setView([position.coords.latitude.toFixed(4), position.coords.longitude.toFixed(4)], 13);//Dibuja el mapa pero en gris, sin mapa-dibujo-tiles

        //pinta lals baldosas (apariencia)
        L.tileLayer.provider('OpenTopoMap').addTo(map);

        //pinta el símbolo de ubicación
        const marker = L.marker([position.coords.latitude.toFixed(4), position.coords.longitude.toFixed(4)]).addTo(map);
    })

}

//2 



//Petición HTTP para obtener los terremotos disponibles en la API

    async function getEarth() {
        let response = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
        let data = await response.json();
        //console.log(data)
        const map2 = await L.map('map2').setView([-122.7128296, 38.7514992],13);
        L.tileLayer.provider('OpenTopoMap').addTo(map2);
     
        //const map2 = await L.map('map2').setView([data.features[0].geometry.coordinates[1], data.features[0].geometry.coordinates[2]],13);
        return map2;
        }

async function pintar() {
    const data = await getEarth();
    console.log(data)
}




/* //Dibujar los marcadores de cada terremoto en el mapa
for (let i = 0; i < array.length; i++) {

    //
    const map2 = L.map('map2').setView([data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[2]]);

    //pinta lals baldosas (apariencia)
    L.tileLayer.provider('OpenTopoMap').addTo(map2);

    //pinta el símbolo de ubicación
    const marker = L.marker([position.coords.latitude.toFixed(4),position.coords.longitude.toFixed(4)]).addTo(map);
} */



//Dibujar los marcadores de cada terremoto en el mapa








//import styles
require('./index.css');

//asincronich function fetchWeather
function fetchWeather() {
    

}

//corremos la funcion
document.addEventListener('DOMContentLoaded', fetchWeather);

const { Weather } = require('./weather.js');
const { UI } = require('./UI'); 
//importar la clase store
const { Store } = require('./store');

//se crea una nueva instancia store
const store = new Store();  
const { city, countryCode } = store.getLocationData();
// SE CREA UNA NUEVA INSTANCIA
const weather = new Weather('city', 'countryCode');
const ui = new UI();
//asincronich function fetchWeather
async function fetchWeather() {
    
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);

}

document.addEventListener('DOMContentLoaded', fetchWeather);

//se obtiene el elemento del boton, se escucha el evento y se realiza una funcion
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    // se obtienene los elementos de ciudad y codigo del pais
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('country-code').value;

    weather.changeLocation(city,countryCode);
    store.setlocationData(city, countryCode);
    fetchWeather();

    e.preventDefault();
})
// Export class
export class Weather {

    //constructor method (se ejecuta solo)
    constructor(city, countryCode) 
    {
        this.apikey = 'a067a2c6146fb0221cfe4929b714e894';
        this.city = city;
        this.countryCode = countryCode; 
    }


//asinchronich method and inner a await 
async getWeather()
{
    //URL of API
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
    // se hace la peticion con fetch y await es paara especificarr que puede tardar
    const response = await fetch(URL);

    const data = await response.json();
    return data;
}
//cambiar la ciudad
changeLocation(city, countryCode)
{
    this.city = city;
    this.countryCode = countryCode;
}
}
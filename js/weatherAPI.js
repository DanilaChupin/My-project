const APP_ID = 'f8f0d1cac99d090cb4806abe11f45a42';
const WEATHER_URI = 'https://api.openweathermap.org/data/2.5/weather';

const getResource = async (url) => {
    try {
        const res = await fetch(url);
        return res.json();
    } catch (err) {
        throw new Error(`Error code ${err.status}`);
    }
}

const getWeatherInfo = async (place = 'Minsk') => {
    const result = await getResource(`${WEATHER_URI}?q=${place}
    &appid=${APP_ID}&lang=ru`);
    return result;
}

const renderWeatherApp = async () => {
    const currentPlace = document.querySelector('#place').value.trim();
    const data = await getWeatherInfo(currentPlace);


    const currentTemp = document.querySelector('#current-temp');
    const weather = document.querySelector('#weather');


    currentTemp.innerHTML = Math.round(data.main.temp - 273);
    weather.innerHTML = data.weather[0].description;


};

const searchBtn = document.querySelector('#get-info');
searchBtn.addEventListener('click', renderWeatherApp);


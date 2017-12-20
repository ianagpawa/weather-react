import axious from 'axious';

import API_KEY from './client_secrets'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;

    const request = axious.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

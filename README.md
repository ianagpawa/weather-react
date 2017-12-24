# Weather-React
##### This repo is for Weather project utilizing React and Redux.    

### Quick Start
-Clone the repo: `git clone https://github.com/ianagpawa/weather-react.git`


#### Dependencies
This app requires `Node` and `npm` to be installed on your system.  To install dependencies, while the terminal is in the project folder, execute the following command:
```
$   npm install
```

#### Requirements
This app requires an API key from [OpenWeatherMap](http://openweathermap.org). The API key should be saved in a `client_secrets.js` file in the `actions` folder.

##### OpenWeatherMap
`client_secrets.js`
```
const API_KEY = "XXXXX"
module.exports = API_KEY
```


### View the App
In order to view the app, navigate the terminal into the project folder, execute the command
```
npm start
```
Open your browser to `http://localhost:8080`:


### What's included
Within the project folder, you will find the following files:

```
weather-react/
    ├── src/
    |   ├── actions/
    |   |    ├── client_secrets.js (NOT INCLUDED)
    |   |    └── index.js
    |   ├── components/
    |   |    ├── app.js
    |   |    ├── chart.js
    |   |    └── google_map.js
    |   ├── containers/
    |   |    ├── search_bar.js
    |   |    └── weather_list.js
    |   ├── reducers/
    |   |    ├── index.js
    |   |    └── reducer_weather.js
    |   └── index.js
    ├── style/
    |   └── style.css
    ├── test/
    |   ├── components/
    |   |    └── app_test.js
    |   └── test_helper.js
    ├── .gitignore
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── webpack.config.js
```

## Creator

**Ian Agpawa**
[Github](https://github.com/ianagpawa)
 agpawaji@gmail.com

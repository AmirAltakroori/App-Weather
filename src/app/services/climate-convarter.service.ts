import { Injectable } from '@angular/core';
import { WeatherComponent } from '../components/weather/weather.component';

@Injectable({
  providedIn: 'root'
})
export class ClimateConvarterService {

  constructor() { }

  fillClimateData(type: string, data: any): WeatherComponent {
    if (type == "forecast")
      return this.fillForecastData(data);
    else if (type == "weather")
      return this.fillWeatherData(data);
    return data;
  }

  private fillWeatherData(data: any): WeatherComponent {
    let weatherData = new WeatherComponent();

    weatherData.id = data.weather[0].id;
    weatherData.main = data.weather[0].main;
    weatherData.description = data.weather[0].description;
    weatherData.icon = data.weather[0].icon;

    weatherData.temp = data.main.temp;
    weatherData.maxTemp = data.main.temp_max;
    weatherData.minTemp = data.main.temp_min;
    weatherData.pressure = data.main.pressure;

    weatherData.windSpeed = data.wind.speed;
    weatherData.date = data.dt;

    weatherData.lat = data.lat;
    weatherData.lon = data.lon;
    weatherData.city = data.name;

    return weatherData;
  }

  private fillForecastData(data: any): WeatherComponent {
    let forecastData = new WeatherComponent();

    forecastData.id = data.list[0].weather[0].id;
    forecastData.main = data.list[0].weather[0].main;
    forecastData.description = data.list[0].weather[0].description;
    forecastData.icon = data.list[0].weather[0].icon;

    forecastData.temp = data.list[0].main.temp;
    forecastData.maxTemp = data.list[0].main.temp_max;
    forecastData.minTemp = data.list[0].main.temp_min;
    forecastData.pressure = data.list[0].main.pressure;

    forecastData.windSpeed = data.list[0].wind.speed;
    forecastData.date = data.list[0].dt_txt;

    forecastData.lat = data.city.coord.lat;
    forecastData.lon = data.city.coord.lon;
    forecastData.city = data.city.name;

    return forecastData;
  }
}

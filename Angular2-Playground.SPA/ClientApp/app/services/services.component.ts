import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../shared/services/weatherForecast.service';
import { WeatherForecast } from '../shared/models/weatherForecast.model';

@Component({
    selector: 'services',
    template: require('./services.component.html'),
    providers: [WeatherForecastService]
})
export class ServicesComponent implements OnInit {
    weatherForecast: WeatherForecast[] = [];

    constructor(private weatherForecastService: WeatherForecastService) { };

    ngOnInit() {
        this.weatherForecastService.getWeatherForecast().subscribe(weatherForecast => this.weatherForecast = weatherForecast);
    }
}

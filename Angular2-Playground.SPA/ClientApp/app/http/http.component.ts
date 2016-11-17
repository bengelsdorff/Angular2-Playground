import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'http',
    template: require('./http.component.html')
})
export class HttpComponent {
    public forecasts: WeatherForecast[];

    constructor(http: Http) {
        http.get('/api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json();
        });
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WeatherForecast } from '../models/weatherForecast.model';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherForecastService {

    constructor(private http: Http) { }

    getWeatherForecast() {
        return this.http.get('api/SampleData/WeatherForecasts')
             .map((response: Response) => <WeatherForecast[]>response.json());
    }
}
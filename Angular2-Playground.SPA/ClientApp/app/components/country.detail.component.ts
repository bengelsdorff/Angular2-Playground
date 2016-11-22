import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'country-detail',
    template: require('./country.detail.component.html')
})
export class CountryDetailComponent implements OnInit {
    @Input() country: string;

    constructor() { }

    ngOnInit() { }
}
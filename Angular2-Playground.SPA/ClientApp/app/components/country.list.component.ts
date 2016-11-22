import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'country-list',
    template: require('./country.list.component.html')
})
export class CountryListComponent implements OnInit {
    @Input() countries: Array<string>;
    @Output() selected: EventEmitter<string> = new EventEmitter<string>();
    constructor() { }

    ngOnInit() { }

    public clickCountry(event: any) {
        event.preventDefault();
        let country = event.target.textContent;
        this.selected.emit(country);
    }
}
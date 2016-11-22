import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'components',
    template: require('./components.component.html')
})
export class ComponentsComponent implements OnInit {
    @Input() country: string = 'No country selected';
    constructor() { }

    public onSelected(selectedCountry: string) {
        this.country = selectedCountry;
        console.log(this.country);
    }

    ngOnInit() { }
}
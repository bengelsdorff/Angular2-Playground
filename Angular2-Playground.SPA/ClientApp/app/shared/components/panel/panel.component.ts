import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'panel',
    template: require('./panel.component.html')
})
export class PanelComponent implements OnInit {
    @Input() title: string;
    constructor() {
    }

    ngOnInit() { }
}
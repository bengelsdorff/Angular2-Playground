import { Component } from '@angular/core';

@Component({
    selector: 'bindings',
    template: require('./bindings.component.html')
})
export class BindingsComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}

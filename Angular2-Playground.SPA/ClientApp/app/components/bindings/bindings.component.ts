import { Component } from '@angular/core';

@Component({
    selector: 'bindings',
    template: require('./bindings.component.html'),
    styles: [require('./bindings.component.css')]
})
export class BindingsComponent {
    public currentCount = 0;
    public isSpecial = true;
    public isSelected = false;
    public imageUrl = 'http://ofbiz-vm2.apache.org:28080/images/products/GZ-1000/small.png';

    public incrementCounter(event: Event ) {
        event.preventDefault();
        this.currentCount++;
    }

    public decrementCounter(event: Event) {
        event.preventDefault();
        this.currentCount--;
    }
    public switchIsSpecial(event: Event) {
        event.preventDefault();
        this.isSpecial = !this.isSpecial;
    }
}

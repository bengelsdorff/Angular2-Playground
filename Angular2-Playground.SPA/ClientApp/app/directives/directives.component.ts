import { Component } from '@angular/core';

@Component({
    selector: 'directives',
    template: require('./directives.component.html')
})
export class DirectivesComponent {
    itemList = ['item', 'item', 'item', 'item'];

    public clickRemove(event: Event) {
        event.preventDefault();
        this.itemList.pop();
    }

    public clickAdd(event: Event) {
        event.preventDefault();
        this.itemList.push('item');
    }
}

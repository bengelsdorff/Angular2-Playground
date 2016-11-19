import { Component } from '@angular/core';

@Component({
    selector: 'directives',
    template: require('./directives.component.html')
})
export class DirectivesComponent {
    clubsList = ['Benfica', 'Porto', 'Sporting', 'Braga'];

    public clickRemoveClub(event: Event) {
        event.preventDefault();
        this.clubsList.pop();
    }

}

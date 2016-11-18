import { Component } from '@angular/core';

@Component({
    selector: 'bindings',
    template: require('./bindings.component.html')
})
export class BindingsComponent {
    public homeBadges = 42;
    public profileBadges = 0;
    public messagesBadges = 3;
    public optionActive = 'home';

    public clickHome(event: Event) {
        event.preventDefault();
        this.homeBadges++;
        this.optionActive = 'home';
    }

    public clickProfile(event: Event) {
        event.preventDefault();
        this.profileBadges++;
        this.optionActive = 'profile';
    }

    public clickMessages(event: Event) {
        event.preventDefault();
        this.messagesBadges++;
        this.optionActive = 'messages';
    }


}

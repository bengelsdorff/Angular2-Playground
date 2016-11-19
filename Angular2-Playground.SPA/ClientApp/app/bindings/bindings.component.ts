import { Component } from '@angular/core';

@Component({
    selector: 'bindings',
    template: require('./bindings.component.html')
})
export class BindingsComponent {
     homeBadges = 42;
     profileBadges = 0;
     messagesBadges = 3;
     optionActive = 'home';

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

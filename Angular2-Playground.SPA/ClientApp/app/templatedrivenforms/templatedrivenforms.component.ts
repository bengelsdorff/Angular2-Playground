import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'template-driven-forms',
    template: require('./templatedrivenforms.component.html')
})
export class TemplateDrivenFormsComponent implements OnInit {
     template: any;

    ngOnInit() { }

    onSubmit(template) {
        this.template = template;
    }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'github-corner',
    template: require('./githubcorner.component.html'),
    styles: [require('./githubcorner.component.css')]
})
export class GitHubCornerComponent implements OnInit {
    @Input() href: string;
    constructor() {
    }

    ngOnInit() { }
}
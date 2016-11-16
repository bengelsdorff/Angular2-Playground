import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'github-corner',
    inputs: ['href'],
    template: require('./githubcorner.component.html'),
    styles: [require('./githubcorner.component.css')]
})
export class GitHubCornerComponent implements OnInit {

    public href: string;
    constructor() {
    }

    ngOnInit() { }
}
import { Component } from '@angular/core';

@Component({
    selector: 'pipes',
    template: require('./pipes.component.html')
})
export class PipesComponent {
    simpleText: string = 'This is a text';
    piNumber: number = 3.141592;
    clubsList: Array<string> = ['Benfica', 'Porto', 'Sporting'];
    todayDate: number = Date.now();

}

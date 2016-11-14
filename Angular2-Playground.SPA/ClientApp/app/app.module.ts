import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { AppComponent } from './components/app/app.component'
import { BindingsComponent } from './components/bindings/bindings.component';
import { ComponentsComponent } from './components/components/components.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HomeComponent } from './components/home/home.component';
import { HttpComponent } from './components/http/http.component';
import { ModelDrivenFormsComponent } from './components/modeldrivenforms/modeldrivenforms.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { RoutingComponent } from './components/routing/routing.component';
import { ServicesComponent } from './components/services/services.component';
import { TemplateDrivenFormsComponent } from './components/templatedrivenforms/templatedrivenforms.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        BindingsComponent,
        ComponentsComponent,
        DirectivesComponent,
        HomeComponent,
        HttpComponent,
        ModelDrivenFormsComponent,
        NavMenuComponent,
        PipesComponent,
        RoutingComponent,
        ServicesComponent,
        TemplateDrivenFormsComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'bindings', component: BindingsComponent },
            { path: 'components', component: ComponentsComponent },
            { path: 'directives', component: DirectivesComponent },
            { path: 'home', component: HomeComponent },
            { path: 'http', component: HttpComponent },
            { path: 'model-driven-forms', component: ModelDrivenFormsComponent },
            { path: 'pipes', component: PipesComponent },
            { path: 'routing', component: RoutingComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'template-driven-forms', component: TemplateDrivenFormsComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { AppComponent } from './app.component';
import { BindingsComponent } from './bindings/bindings.component';
import { ComponentsComponent } from './components/components.component';
import { DirectivesComponent } from './directives/directives.component';
import { GitHubCornerComponent } from './-shared/components/githubcorner/githubcorner.component';
import { HomeComponent } from './home/home.component';
import { HttpComponent } from './http/http.component';
import { ModelDrivenFormsComponent } from './modeldrivenforms/modeldrivenforms.component';
import { NavMenuComponent } from './-shared/components/navmenu/navmenu.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoutingComponent } from './routing/routing.component';
import { ServicesComponent } from './services/services.component';
import { TemplateDrivenFormsComponent } from './templatedrivenforms/templatedrivenforms.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        BindingsComponent,
        ComponentsComponent,
        DirectivesComponent,
        GitHubCornerComponent,
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

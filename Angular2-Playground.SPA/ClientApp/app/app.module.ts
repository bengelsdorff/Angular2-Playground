import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { BindingsComponent } from './bindings/bindings.component';
import { ComponentsComponent } from './components/components.component';
import { CountryDetailComponent } from './components/country.detail.component';
import { CountryListComponent } from './components/country.list.component';
import { DirectivesComponent } from './directives/directives.component';
import { GitHubCornerComponent } from './shared/components/githubcorner/githubcorner.component';
import { HomeComponent } from './home/home.component';
import { ModelDrivenFormsComponent } from './modeldrivenforms/modeldrivenforms.component';
import { NavMenuComponent } from './shared/components/navmenu/navmenu.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { TemplateDrivenFormsComponent } from './templatedrivenforms/templatedrivenforms.component';
import { PanelComponent } from './shared/components/panel/panel.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        BindingsComponent,
        ComponentsComponent,
        CountryDetailComponent,
        CountryListComponent,
        DirectivesComponent,
        GitHubCornerComponent,
        HomeComponent,
        ModelDrivenFormsComponent,
        NavMenuComponent,
        PipesComponent,
        ServicesComponent,
        TemplateDrivenFormsComponent,
        PanelComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'bindings', component: BindingsComponent },
            { path: 'components', component: ComponentsComponent },
            { path: 'directives', component: DirectivesComponent },
            { path: 'home', component: HomeComponent },
            { path: 'model-driven-forms', component: ModelDrivenFormsComponent },
            { path: 'pipes', component: PipesComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'template-driven-forms', component: TemplateDrivenFormsComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}

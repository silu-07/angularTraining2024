import { Routes } from '@angular/router';
import { BasicComponent } from "./topics/basic/basic.component";
import { HomeComponent } from "./home/home.component";
import { TemplateDrivenFormComponent } from './topics/template-driven-form/template-driven-form.component';

export const routes: Routes = [
    {title: 'Home', path: '', component: HomeComponent},
    {title: 'Basic', path: 'basic', component: BasicComponent},
    {title: 'Template Driven Form', path: 'template-driven-form', component: TemplateDrivenFormComponent},
];
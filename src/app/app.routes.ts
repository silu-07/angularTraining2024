import { Routes } from '@angular/router';
import { BasicComponent } from "./topics/basic/basic.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
    {title: 'Home', path: '', component: HomeComponent},
    {title: 'Basic', path: 'basic', component: BasicComponent},
];
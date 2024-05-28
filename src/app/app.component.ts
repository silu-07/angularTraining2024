import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./extra/navbar/navbar.component";
import { CloudComponent } from "./extra/cloud/cloud.component";
import { BasicComponent } from "./topics/basic/basic.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HomeComponent, NavbarComponent, CloudComponent, BasicComponent]
})
export class AppComponent {
  title = 'Angular 17 Learning';
}

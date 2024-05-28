import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatListModule],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})



export class BasicComponent {
  test:any;
}

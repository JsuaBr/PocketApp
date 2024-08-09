import { Component } from '@angular/core';

@Component({
  selector: 'app-notes-heading',
  standalone: true,
  imports: [],
  templateUrl: './notes-heading.component.html',
  styleUrl: './notes-heading.component.css'
})
export class NotesHeadingComponent {


  hola(){
    alert('hola')
  }
}

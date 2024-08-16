import { Component } from '@angular/core';
// Option Bar
import { OptionbarComponent } from '../../shared/components/optionbar/optionbar.component';
import { NotesHeadingComponent } from '../common/notes-heading/notes-heading.component';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [OptionbarComponent, NotesHeadingComponent],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {

notesList = [
  {id: '1', date: 'Today', title: 'School Assignment', description: 'I have to do my History Homework for tomorrow'},
  {id: '2', date: 'Yesterday', title: 'Spanish Course', description: 'I have to Assist to My Spanish Course'},
]

prueba(){
  alert('Funciona!!')
}

}

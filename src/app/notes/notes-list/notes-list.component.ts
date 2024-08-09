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

}

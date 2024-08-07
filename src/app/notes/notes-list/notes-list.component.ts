import { Component } from '@angular/core';
// Option Bar
import { OptionbarComponent } from '../../shared/components/optionbar/optionbar.component';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [OptionbarComponent],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {

}

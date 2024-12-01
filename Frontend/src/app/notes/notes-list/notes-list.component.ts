import { Component } from '@angular/core';
// Option Bar
import { OptionbarComponent } from '../../shared/components/optionbar/optionbar.component';
import { NotesHeadingComponent } from '../common/notes-heading/notes-heading.component';
import { NotesService } from '../../core/services/notes-service/notes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [OptionbarComponent, NotesHeadingComponent],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {

notesList = NotesService.notas;

constructor(private router:Router){}

irADetalles(id:any):void{
  this.router.navigate([`notes/details`, id]);
}

}

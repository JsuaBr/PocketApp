import { Component, Inject, PLATFORM_ID, signal} from '@angular/core';
import { NotesHeadingComponent } from '../common/notes-heading/notes-heading.component';
import { OptionbarComponent } from '../../shared/components/optionbar/optionbar.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NotesService } from '../../core/services/notes-service/notes.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-notes-create',
  standalone: true,
  imports: [NotesHeadingComponent, OptionbarComponent, ReactiveFormsModule],
  templateUrl: './notes-create.component.html',
  styleUrl: './notes-create.component.css'
})
export class NotesCreateComponent{

  constructor(private notesService:NotesService, @Inject(PLATFORM_ID) private platformId: any){}

  formulario = signal<FormGroup>(
    new FormGroup({
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      fecha: new FormControl(''),
      importante: new FormControl('')
    })
  );

  agregarNota():void{
    let nuevaNota = this.formulario().value;
    nuevaNota.id = this.notesService.agregarId();
    nuevaNota.images = [];
    if(nuevaNota.nombre && nuevaNota.descripcion && nuevaNota.fecha){
      NotesService.notas.push(nuevaNota);
      if(isPlatformBrowser(this.platformId)){
        this.notesService.guardarNotasStorage();
        this.formulario().reset();
      }
      alert('Nota creada correctamente');
    } else{
      alert('Todos los campos son obligarorios');
    }
  }


}

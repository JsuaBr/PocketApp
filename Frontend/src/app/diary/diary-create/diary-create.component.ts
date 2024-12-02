import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { NotesHeadingComponent } from "../../notes/common/notes-heading/notes-heading.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { NotesService } from '../../core/services/notes-service/notes.service';
import { OptionbarComponent } from "../../shared/components/optionbar/optionbar.component";
import { DiaryService } from '../../core/services/diary-service/diary.service';
import { DiaryHeadingComponent } from "../diary-heading/diary-heading.component";

@Component({
  selector: 'app-diary-create',
  standalone: true,
  imports: [ReactiveFormsModule, OptionbarComponent, DiaryHeadingComponent],
  templateUrl: './diary-create.component.html',
  styleUrl: './diary-create.component.css'
})
export class DiaryCreateComponent {

  estadoAnimo: string = '';

  formulario = signal<FormGroup>(
    new FormGroup({
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      estadoAnimo: new FormControl('') // Añadimos estado de ánimo
    })
  );

  constructor(private diaryService:DiaryService, @Inject(PLATFORM_ID) private platformId: any){}


  agregarNota():void{
    let nuevaNotaDiario = this.formulario().value;
    nuevaNotaDiario.id = this.diaryService.agregarIdDiario();
    nuevaNotaDiario.images = [];
    if(nuevaNotaDiario.nombre && nuevaNotaDiario.descripcion){
      DiaryService.diario.push(nuevaNotaDiario);
      if(isPlatformBrowser(this.platformId)){
        this.diaryService.guardarDiarioStorage();
        this.formulario().reset();
      }
      alert('Nota de diario creada correctamente');
    } else{
      alert('Todos los campos son obligarorios');
    }
  }

  seleccionarEstado(estado: string): void {
    this.estadoAnimo = estado;
    this.formulario().patchValue({ estadoAnimo: estado });
  }
}

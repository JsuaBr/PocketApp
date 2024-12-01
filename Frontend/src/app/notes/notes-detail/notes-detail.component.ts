import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../core/services/notes-service/notes.service';
import { ActivatedRoute } from '@angular/router';
import { OptionbarComponent } from '../../shared/components/optionbar/optionbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-detail',
  standalone: true,
  imports: [OptionbarComponent],
  templateUrl: './notes-detail.component.html',
  styleUrl: './notes-detail.component.css'
})
export class NotesDetailComponent implements OnInit{

  nota:any = {
    nombre: "",
    descripcion: "",
    fecha: "" 
  };
  private id:any;
  images: string[] = []; // Almacena las URLs de las imágenes cargadas


  constructor(private route:ActivatedRoute, private notesService:NotesService, private router:Router){}

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage():void{
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    NotesService.notas.forEach((e: any) => {
      if(e.id == this.id){
        this.nota = e;
        console.log(this.nota);
      }
    });
  }

  onFileSelected(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.images.push(e.target.result); // Agrega la imagen como base64
        };
        reader.readAsDataURL(file); // Convierte el archivo a base64
      });
    }
  }

  terminarTarea():void{
    const terminarBool = window.confirm('¿Estás seguro que quieres terminar esta tarea?');
    if(terminarBool){
      this.notesService.eliminarNota(this.nota.id);
      this.notesService.guardarNotasStorage();
      this.router.navigate([`notes`])
    }
  }

}

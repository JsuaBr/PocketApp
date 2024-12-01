import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotesService } from './core/services/notes-service/notes.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pocketapp';

  constructor(private noteService:NotesService, @Inject(PLATFORM_ID) private platformId: any){
    if(isPlatformBrowser(this.platformId)){
      this.noteService.obtenerNotasStorage();
    }
  }
}

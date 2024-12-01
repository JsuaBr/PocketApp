import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public static notas:any = [];

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  guardarNotasStorage():void{
    if(isPlatformBrowser(this.platformId)){
      localStorage.setItem('notas', JSON.stringify(NotesService.notas));
    }
  }

  obtenerNotasStorage():void{
    if(localStorage.getItem('notas') && isPlatformBrowser(this.platformId)){
      NotesService.notas = JSON.parse(localStorage.getItem('notas') || '{}');
    }
  }

  agregarId():number{
    if(NotesService.notas.length == 0){
      return 0;
    } else{
      return NotesService.notas[NotesService.notas.length - 1].id + 1;
    }
  }

  eliminarNota(idF:Number):void{
    NotesService.notas = NotesService.notas.filter((e:any) => e.id !== idF);
  }
}

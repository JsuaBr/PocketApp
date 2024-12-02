import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  public static diario:any = [];

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  // Diario

  guardarDiarioStorage():void{
    if(isPlatformBrowser(this.platformId)){
      localStorage.setItem('diario', JSON.stringify(DiaryService.diario));
    }
  }

  obtenerDiarioStorage():void{
    if(localStorage.getItem('notas') && isPlatformBrowser(this.platformId)){
      DiaryService.diario = JSON.parse(localStorage.getItem('diario') || '{}');
    }
  }

  agregarIdDiario():number{
    if(DiaryService.diario.length == 0){
      return 0;
    } else{
      return DiaryService.diario[DiaryService.diario.length - 1].id + 1;
    }
  }

  eliminarDiario(idF:Number):void{
    DiaryService.diario = DiaryService.diario.filter((e:any) => e.id !== idF);
  }
}

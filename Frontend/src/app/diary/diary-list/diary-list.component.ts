import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { OptionbarComponent } from "../../shared/components/optionbar/optionbar.component";
import { DiaryHeadingComponent } from "../diary-heading/diary-heading.component";
import { NotesService } from '../../core/services/notes-service/notes.service';
import { DiaryService } from '../../core/services/diary-service/diary.service';

@Component({
  selector: 'app-diary-list',
  standalone: true,
  imports: [OptionbarComponent, DiaryHeadingComponent],
  templateUrl: './diary-list.component.html',
  styleUrl: './diary-list.component.css'
})
export class DiaryListComponent implements OnInit{

  diaryList:any = [];

  constructor(private diaryService: DiaryService,  @Inject(PLATFORM_ID) private platformId: any){}

  ngOnInit(): void {
    this.diaryService.obtenerDiarioStorage();
    this.diaryList = DiaryService.diario;
  }

  irADetalles(id:any):void{

  }

}

import { Component } from '@angular/core';
import { OptionbarComponent } from '../../shared/components/optionbar/optionbar.component';
import { NotesHeadingComponent } from '../common/notes-heading/notes-heading.component';
import { NotesService } from '../../core/services/notes-service/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-grid',
  standalone: true,
  imports: [OptionbarComponent, NotesHeadingComponent],
  templateUrl: './notes-grid.component.html',
  styleUrl: './notes-grid.component.css'
})
export class NotesGridComponent {
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();
  days: number[] = [];
  notes: { nombre: string, descripcion: string, fecha: string, importante: boolean }[] = NotesService.notas;

  months: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
  ];

  constructor(private router:Router) {
    this.generateCalendar();
  }

  generateCalendar() {
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    this.days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  previousMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.generateCalendar();
  }

  hasNote(day: number): boolean {
    const date = `${this.currentYear}-${String(this.currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return this.notes.some(note => note.fecha === date);
  }

  IrADetalles():void{
    console.log('Hola Mundo')
  }
}

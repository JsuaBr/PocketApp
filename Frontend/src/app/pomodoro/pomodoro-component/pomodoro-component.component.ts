import { Component, OnInit } from '@angular/core';
import { OptionbarComponent } from "../../shared/components/optionbar/optionbar.component";
import { NotesService } from '../../core/services/notes-service/notes.service';

@Component({
  selector: 'app-pomodoro-component',
  standalone: true,
  imports: [OptionbarComponent],
  templateUrl: './pomodoro-component.component.html',
  styleUrl: './pomodoro-component.component.css'
})
export class PomodoroComponentComponent implements OnInit{

  notes:any;
  timeLeft: number = 1 * 60; // 25 minutes in seconds
  timerDisplay: string = "1:00";
  timerInterval: any;

  constructor(){}

  ngOnInit(): void {
    this.notes = NotesService.notas;
  }

  ngOnDestroy(): void {
    this.stopTimer(); // Limpia el intervalo cuando el componente se destruye
  }

  startTimer(): void {
    if (this.timerInterval) return; // Evita múltiples intervalos

    this.timerInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.updateTimerDisplay();
      } else {
        this.stopTimer();
        alert('¡Tiempo terminado!');
      }
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
  }

  updateTimerDisplay(): void {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    this.timerDisplay = `${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
  }

  formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
  cortarTexto(text: string, wordLimit: number): string {
    if (!text || wordLimit <= 0) {
      return '';
    }
  
    const words = text.split(' ');
    if (words.length <= wordLimit) {
      return text;
    }
  
    return words.slice(0, wordLimit).join(' ') + '...';
  }
}

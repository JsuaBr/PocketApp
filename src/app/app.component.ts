import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Option Bar
import { OptionbarComponent } from './shared/components/optionbar/optionbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OptionbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pocketapp';
}

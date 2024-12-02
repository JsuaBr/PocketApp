import { Component, Injectable, Input, Inject, OnInit} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-optionbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './optionbar.component.html',
  styleUrl: './optionbar.component.css'
})

@Injectable()
export class OptionbarComponent implements OnInit{

@Input() compConfig = {
  page: ''
};

constructor(@Inject(DOCUMENT) private document: Document) {}

ngOnInit(): void {
  this.loadPageSelection();
}


// This method puts an square to show the user which option is he using (climate, clock, pet, notes)
loadPageSelection():void{
  switch(this.compConfig.page){
    case 'notes':
      const notes = this.document.getElementById('notes');
      notes?.classList.add('selected');
    break;

    case 'pomodoro':
      const climate = this.document.getElementById('pomodoro');
      climate?.classList.add('selected');
    break;

    case 'diary':
      const clock = this.document.getElementById('clock');
      clock?.classList.add('selected');
    break;

    case 'pet':
      const pet = this.document.getElementById('pet');
      pet?.classList.add('selected');
    break;

    default:
    console.log('Error');  
    break;
  }
}

}

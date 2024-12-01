import { Component, Input, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-notes-heading',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './notes-heading.component.html',
  styleUrl: './notes-heading.component.css'
})
export class NotesHeadingComponent {


  @Input() compConfig = {
    page: ''
  };

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage():void{
    switch(this.compConfig.page){
      case 'list':
        const notes = this.document.getElementById('list');
        notes?.classList.add('selected');
      break;
  
      case 'grid':
        const climate = this.document.getElementById('grid');
        climate?.classList.add('selected');
      break;
  
      case 'create':
        const clock = this.document.getElementById('create');
        clock?.classList.add('selected');
      break;
      default:
      console.log('Error');  
      break;
    }
  }

  hola(){
    alert('hola')
  }
}

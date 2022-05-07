import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent  {

  get historial() {
    return this.gifService.historial;
  }

  buscar ( item: string) {
    console.log(item);
    return this.gifService.buscarGifs(item);
  }

  constructor(private gifService: GifsService) { }

 

}

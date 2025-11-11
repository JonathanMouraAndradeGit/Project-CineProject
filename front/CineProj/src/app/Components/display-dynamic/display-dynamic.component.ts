import { Component } from '@angular/core';
import { LightModeService } from '../../Service/LightMode.service';

@Component({
  selector: 'app-display-dynamic',
  standalone: false,
  templateUrl: './display-dynamic.component.html',
  styleUrl: './display-dynamic.component.css'
})
export class DisplayDynamicComponent {
  mode: boolean
  constructor(private modeS: LightModeService) {
    this.mode = false
    LightModeService.ev.subscribe((el) => {
      this.mode = el.mode
      console.log("the current mode is " + this.mode)
    })
  }
  arr = [{ img: "/static/img/city.jpg", title: "title01" }, { img: "/static/img/program.jpg", title: "title02" },
  { img: "/static/img/shark.jpg", title: "title03" }, { img: "/static/img/city.jpg", title: "title04" },
  ]
}

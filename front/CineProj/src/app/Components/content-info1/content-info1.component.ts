import { Component } from '@angular/core';
import { LightModeService } from '../../Service/LightMode.service';

@Component({
  selector: 'app-content-info1',
  standalone: false,
  templateUrl: './content-info1.component.html',
  styleUrl: './content-info1.component.css'
})
export class ContentInfo1Component {
  mode: boolean
  constructor(private modeS: LightModeService) {
    this.mode = false
    LightModeService.ev.subscribe((el) => {
      this.mode = el.mode
      console.log("the current mode is " + this.mode)
    })
  }
}

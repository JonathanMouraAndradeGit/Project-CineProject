import { Component, Input } from '@angular/core';
import { LightModeService } from '../../Service/LightMode.service';

@Component({
  selector: 'app-accordion1',
  standalone:false,
  templateUrl: './accordion1.component.html',
  styleUrl: './accordion1.component.css',
})
export class Accordion1Component {
  mode: boolean
    constructor(private modeS: LightModeService) {
      this.mode = false
      LightModeService.ev.subscribe((el) => {
        this.mode = el.mode
        console.log("the current mode is " + this.mode)
      })
    }
  @Input("obji") obj!:any;
  @Input("idEl") id!:any;
  @Input("nameG") name!:any;
}

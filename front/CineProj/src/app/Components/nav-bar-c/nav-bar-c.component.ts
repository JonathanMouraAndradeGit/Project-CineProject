import { Component } from '@angular/core';
import { LightModeService } from '../../Service/LightMode.service';

@Component({
  selector: 'nav-bar-c',
  standalone:false,
  templateUrl: './nav-bar-c.component.html',
  styleUrl: './nav-bar-c.component.css'
})
export class NavBarCComponent {
  mode:boolean
  constructor(private modeS:LightModeService){
    this.mode = false
    LightModeService.ev.subscribe((el)=>{
      this.mode = el.mode
      console.log("the current mode is "+this.mode)
    })
  }
}

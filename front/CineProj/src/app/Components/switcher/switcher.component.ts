import { Component } from '@angular/core';
import { LightModeService } from '../../Service/LightMode.service';

@Component({
  selector: 'app-switcher',
  standalone:false,
  templateUrl: './switcher.component.html',
  styleUrl: './switcher.component.css'
})
export class SwitcherComponent {
  constructor(private mode:LightModeService){

  }
  changeMode(){
    this.mode.setValue()
  }
}

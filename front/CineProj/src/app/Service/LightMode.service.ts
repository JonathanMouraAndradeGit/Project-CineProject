import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class LightModeService{
    static selectedMode:boolean = false
    public static ev:EventEmitter<any> = new EventEmitter<any>()

    setValue(){
        LightModeService.selectedMode = !LightModeService.selectedMode
        LightModeService.ev.emit({mode:LightModeService.selectedMode})
    }
}
import { ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-type1',
  standalone:false,
  templateUrl: './input-type1.component.html',
  styleUrl: './input-type1.component.css',
  providers:[
    { useExisting:forwardRef(()=>InputType1Component),
      multi:true,
      provide:NG_VALUE_ACCESSOR
    }
  ]
})
export class InputType1Component implements ControlValueAccessor {
  @Input("type") type!:string
  @Input("id") idField!:string
  @Input("label") labelName!:string
  @Input("fgField") fgField!:any
  //@Input("compFunction") cmpF!:any

  @Output() messageEvent = new EventEmitter<string>();

  value=""
  onChange=(val:any)=>{}
  onTouched=()=>{}

  constructor(private cd: ChangeDetectorRef) {}
  onBlurFuns(){
    this.onTouched()
    ////if(typeof this.cmpF == "function"){
      //this.cmpF()
      ///this.cd.detectChanges();
    //}
    this.messageEvent.emit()
  }


  writeValue(obj: any): void {
    this.value = obj
    //throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
    ///throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    this.onTouched=fn
    //throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
  }

}

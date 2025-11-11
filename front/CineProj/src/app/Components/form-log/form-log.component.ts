import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-log',
  standalone:false,
  templateUrl: './form-log.component.html',
  styleUrl: './form-log.component.css'
})
export class FormLogComponent {
  fg:FormGroup
  totalFields = 0
  totC=0
  constructor(private fb:FormBuilder){
    this.fg = this.fb.group({
      email:[null,[Validators.nullValidator,this.checkField1()]],
      password:[null,[Validators.nullValidator,this.checkField1()]]
    })
    this.totalFields = this.getTotalField()
  }
  getTotalField(){
    return Object.keys(this.fg.controls).length
  }
  getTotalCorrect(){
    console.log("executing correct")
    let keep = true
    let tot = 0
    Object.keys(this.fg.controls).forEach((el)=>{
      if(keep){
        if(this.fg.get(el)?.invalid){
          keep = false
        }else{
          tot+=1
        }
      }
    })
    console.log("the tot is "+tot)
    this.totC = tot
  }
  checkField1(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let value = control.value
      if (value) {
        if (value.length < 5) {
          return { msgE: "o comprimento deve ser superior a 5" }
        }
      } else {
        return { msgE: "nao pode ser nulo" }
      }
      return null
    }
  }
}

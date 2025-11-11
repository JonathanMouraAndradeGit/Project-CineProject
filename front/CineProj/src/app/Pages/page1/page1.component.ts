import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-page1',
  standalone: false,
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component implements AfterViewInit{
  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
  }
}
  /*
  fg: FormGroup
  qtdC = 0
  qtdTot = 0
  arrG: any[] = []//[{qtd:0,name:"gfield1"},{qtd:0,name:""}]
  
  SliderCon!:any
  currentSlide=0
  len=0
  constructor(private fb: FormBuilder,private elementRef:ElementRef,private rend:Renderer2) {
    this.fg = fb.group({
      gfield1: fb.group({
        name: [null, [Validators.nullValidator, this.checkField1()]],
        email: [null, [Validators.nullValidator, this.checkField1()]],
      }),
      gfield2: fb.group({
        name: [null, [Validators.nullValidator, this.checkField1()]],
        email: [null, [Validators.nullValidator, this.checkField1()]],
      }),
      gfield3: fb.group({
        age:[0,[Validators.nullValidator,this.checkFieldDate()]]
      }),
      //field1: [null],
      //field2: [null]

    })
    this.setarrG()
    //console.log(this.arrG)
  }
  setFieldValue(value:any,field:string){
    console.log("the set value is "+value)
    this.fg.get(field)?.setValue(value)
    //console.log(this.fg.get(field))
    this.fg.get(field)?.markAsTouched()
    this.getTotC2('gfield3')
  }
  ngAfterViewInit(): void {
    this.SliderCon = this.elementRef.nativeElement.getElementsByClassName("formMainCSlider")[0]
    this.len = this.SliderCon.children.length
    //throw new Error('Method not implemented.');
  }
  setarrG() {
    Array.from(Object.keys(this.fg.controls)).forEach((e) => {
      if (this.fg.controls[e] instanceof FormGroup) {
        let f = Array.from(Object.keys(this.fg.controls[e].controls)).map((el) => {
          return { fieldName: el, valid: false }
        })
        this.arrG.push({ name: e, qtd: 0, fields: f })
        //console.log(this.arrG)
      }
    })
  }
  getGroup1(group:string): FormGroup {
    return this.fg.get(group) as FormGroup
  }*/
  /*check --------------------------------------------------------------------------*/
  /*
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
  checkFieldDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let value = control.value
      if (value) {
        if (value < 10) {
          return { msgE: "idade deve ser superior a 5" }
        }
      } else {
        return { msgE: "nao pode ser nulo" }
      }
      return null
    }
  }
  getTotF2(groupName: string) {
    let fg1: FormGroup = this.fg.get(groupName) as FormGroup
    return Array.from(Object.keys(fg1.controls)).length
  }*/
  /*
  getTotF() {
    //console.log()
    this.qtdTot = Array.from(Object.keys(this.fg.controls)).length
    return this.qtdTot
  }*/
 /*
  getTotC2(group: string) {
    let id = 0
    let obj: any = this.arrG.filter((e,i) =>{
      if(e.name == group){
        id = i 
        return e
      }
    })
    let totalQtd = 0
    //console.log("---------------------obj")
    //console.log(obj)
    obj = obj[0]
    obj.fields.forEach((el: any, i: number) => {
      //if(el.fieldName == field){
      //if (this.fg.get(`${group}.${field}`)?.valid) {
      if (this.fg.get(`${group}.${el.fieldName}`)?.valid) {
        obj.fields[i].valid = true
        totalQtd+=1
      } else {
        obj.fields[i].valid = false
      }
      //}
    })
    obj.qtd = totalQtd
    //console.log(obj)
    //console.log("the id to be updated is "+id)
    this.arrG[id] = obj
    this.getTot2()
  }
  getGroupVFields(group: string){
    let obj: any = this.arrG.filter((e) =>e.name = group)
    return obj.qtd
  }
  getTot2(){
    let keep = true
    let cfields = 0
    this.arrG.forEach((el)=>{
        if(keep){
          if(el.qtd == el.fields.length){
            cfields += 1
          }else{
            keep = false
          }
        }
    })
    this.qtdC = cfields
  }*/
  /*
  getTotC() {
    this.qtdC = 0
    let f = Array.from(Object.keys(this.fg.controls))
    let keep = true
    let cfields = 0
    f.forEach((el: any) => {
      if (keep) {
        if (this.fg.get(el)?.valid) {
          cfields += 1
        } else {
          keep = false
        }
      }
    })
    //console.log("total correct is "+cfields)
    this.qtdC = cfields
  }*/
 /*
  subs() {
    //this.fg.get("")?.touched
    console.log(this.fg.value)
    console.log(this.fg.valid)
    console.log("ok submit")

    console.log(this.arrG)
  }*/
  /*----------------------------------------------------------------------------------------------*/
  /*
  moveSides(side:string){
    let qtdSld = this.SliderCon.children.length
    if(side=="r" && (this.currentSlide+1) < qtdSld){
      this.currentSlide+=1
      this.rend.setStyle(this.SliderCon,"transform",`translateX(-${this.currentSlide * 100}%)`)
      console.log("left")
    }

    if(side=="l" && (this.currentSlide-1) >= 0){
      this.currentSlide-=1
      this.rend.setStyle(this.SliderCon,"transform",`translateX(-${this.currentSlide * 100}%)`)
      console.log("right")
    }
  }
}*/

import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-form-switcher',
  standalone:false,
  templateUrl: './form-switcher.component.html',
  styleUrl: './form-switcher.component.css'
})
export class FormSwitcherComponent implements AfterViewInit {
  SideLvl: any = ""
  //FieldBtns: any = ""
  refSld:any = ""
  constructor(private rend: Renderer2, private el: ElementRef) {

  }
  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    this.loadVals()

    let result = this.SideLvl.getBoundingClientRect()
    let w = result.width / 4
    this.SideLvl.style.setProperty("--w", `${w}px`)
  }
  loadVals() {
    this.SideLvl = this.el.nativeElement.getElementsByClassName("SideLvl")[0]
    //this.FieldBtns = this.el.nativeElement.getElementsByClassName("FieldBtns")[0]
    this.refSld = this.el.nativeElement.getElementsByClassName("FrmSlideC")[0]
  }
  changeBar(dir:any) {
    let result = this.SideLvl.getBoundingClientRect()
    let w = result.width / 4
    if (dir == "u") {
      //this.SideLvl.classList.add("selected")
      this.rend.addClass(this.SideLvl,"selected")
      this.rend.setStyle(this.refSld,"transform",`translateY(-100%)`)
      //refSld.current.style.transform = `translateY(-100%)`
      this.SideLvl.style.setProperty("--w", `calc(100% - ${w}px)`)
    } else {
      this.rend.removeClass(this.SideLvl,"selected")
      //this.SideLvl.classList.remove("selected")
      this.rend.setStyle(this.refSld,"transform",`translateY(0%)`)
      //refSld.current.style.transform = `translateY(0%)`
      this.SideLvl.style.setProperty("--w", `${w}px`)
    }
  }

  /*
let ref = useRef()
let ref2 = useRef()
SideLvl = ""
let refSld = useRef()

const frmSig = useRef()
const frmLog = useRef()
loadValsFunc(){
  SideLvl = this.el.
}
useEffect(() => {
    let result = ref2.current.getBoundingClientRect()
    let w = result.width / 4
    ref2.current.style.setProperty("--w", `${w}px`)
    //console.log(w)
}, [])
changeBar(dir) {
  let result = ref2.current.getBoundingClientRect()
  let w = result.width / 4
  if (dir == "u") {
    ref2.current.classList.add("selected")
    refSld.current.style.transform = `translateY(-100%)`
    ref2.current.style.setProperty("--w", `calc(100% - ${w}px)`)
  } else {
    ref2.current.classList.remove("selected")
    refSld.current.style.transform = `translateY(0%)`
    ref2.current.style.setProperty("--w", `${w}px`)
  }
}*/
}

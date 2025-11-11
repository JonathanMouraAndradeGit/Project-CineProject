import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { LightModeService } from '../../Service/LightMode.service';

@Component({
  selector: 'app-slider-type2',
  standalone: false,
  templateUrl: './slider-type2.component.html',
  styleUrl: './slider-type2.component.css'
})
export class SliderType2Component implements AfterViewInit {
  subs: Subject<any> = new Subject<any>()
  arr = [{ id: 0, img: "/static/img/city.jpg", title: "title-01" },
  { id: 1, img: "/static/img/program.jpg", title: "title-02" },
  { id: 2, img: "/static/img/shark.jpg", title: "title-03" },
  { id: 3, img: "/static/img/city.jpg", title: "title-04" },
  { id: 4, img: "/static/img/program.jpg", title: "title-05" }
  ]
  ref: any //= Slider useRef()
  ref2: any //= SliderSelect useRef()

  qtdSlides = 5;
  selected = 0
  autoSlide = 0
  dir = true

  once = true
  timer: any
  mode: boolean
  constructor(private modeS: LightModeService,private el: ElementRef, private rend: Renderer2) {
    this.mode = false
    LightModeService.ev.subscribe((el) => {
      this.mode = el.mode
      console.log("the current mode is " + this.mode)
    })
  }
  ngAfterViewInit(): void {
    this.loadVals()
    //throw new Error('Method not implemented.');
    this.subs.subscribe((el) => {
      this.timer = setInterval(() => {
        this.autoDesloc(el.val);
      }, 2000);
      //return () => clearInterval(timer);
    })
    this.desloc("r")
  }
  desloc(side: string) {
    let num = 0
    clearInterval(this.timer);
    if (side == "l" && this.selected > 0) {
      this.rend.setStyle(this.ref, "transform", `translateX(calc(${(this.selected - 1) * -1}*100%))`)
      //this.ref.style.transform = `translateX(calc(${(this.selected - 1) * -1}*100%))`
      //num = (this.selected - 1)
      this.selected = (this.selected - 1) //setSelected(prev => prev - 1)
      this.selectRef(this.selected, this.ref)
      this.selectRef(this.selected, this.ref2)
      this.subs.next({ val: this.selected })
      //selectRef2(num)
      //selectRefSlide(num)
    } else if (side == "r" && this.selected < (this.arr.length - 1)) {
      this.rend.setStyle(this.ref, "transform", `translateX(calc(${(this.selected + 1) * -1}*100%))`)
      //ref.current.style.transform = `translateX(calc(${(this.selected + 1) * -1}*100%))`
      //console.log(selected)
      //setSelected(prev => prev + 1)
      this.selected = this.selected + 1
      //num = this.selected+1 //(selected + 1)
      //selectRef2(num)
      //selectRefSlide(num)
      this.selectRef(this.selected, this.ref)
      this.selectRef(this.selected, this.ref2)
      this.subs.next({ val: this.selected })
    }
  }
  loadVals() {
    this.ref = this.el.nativeElement.getElementsByClassName("Slider")[0] //Slider useRef()
    this.ref2 = this.el.nativeElement.getElementsByClassName("SliderSelect")[0] //SliderSelect useRef()
  }
  autoDesloc(select: number) {
    //let dirDesloc = dir
    if (select == (this.arr.length - 1)) {
      //dirDesloc = false
      this.dir = false
    } else if (select == 0) {
      //dirDesloc = true
      this.dir = true
    }
    if (this.dir) {
      this.desloc("r")
      //console.log("go to r")
    } else {
      this.desloc("l")
      //console.log("go to l")
    }
  }
  selectRef(num: number, refEl: any) {
    Array.from(refEl.children).map((el: any, i) => {
      if (num == i) {
        el.classList.add("Selected")
      } else {
        el.classList.remove("Selected")
      }
    })
  }
}

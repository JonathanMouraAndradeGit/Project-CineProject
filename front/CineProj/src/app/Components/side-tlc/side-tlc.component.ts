import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LightModeService } from '../../Service/LightMode.service';

@Component({
  selector: 'app-side-tlc',
  standalone: false,
  templateUrl: './side-tlc.component.html',
  styleUrl: './side-tlc.component.css'
})
export class SideTLCComponent implements AfterViewInit {
  arr = [1, 2, 3, 4, 5, 6, 7, 8]
  //const ref = useRef(null);
  totalScrolled = 0
  containerWidth = 0
  timer: any = 0
  //const [totalScrolled, setTotalScrolled] = useState(0);
  //const [containerWidth, setContainerWidth] = useState(0);
  //const [timer, setTimer] = useState(null);
  w1 = 0
  w2 = 0
  ScrollableCon: any
  mode: boolean
  constructor(private modeS: LightModeService, private el: ElementRef, private rand: Renderer2) {
    this.mode = false
    LightModeService.ev.subscribe((el) => {
      this.mode = el.mode
      console.log("the current mode is " + this.mode)
    })
  }
  loadValues() {
    this.ScrollableCon = this.el.nativeElement.getElementsByClassName("ScrollableCon")[0]
  }
  // Inicializa os valores após o componente montar
  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    this.loadValues()
    if (this.ScrollableCon) {
      const width = this.ScrollableCon.getBoundingClientRect().width;
      console.log("Width:", width);

      this.w1 = width
      this.totalScrolled = width
      this.containerWidth = width
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.rand.addClass(entry.target, "activeItem")
          //entry.target.classList.add("activeItem");
        } else {
          this.rand.removeClass(entry.target, "activeItem")
          //entry.target.classList.remove("activeItem");
        }
      });
      this.setRols()
    }, { threshold: 0.5 });

    // Observar cada filho do ref
    Array.from(this.ScrollableCon.children).forEach((child: any) => obs.observe(child));
  }
  setIntervalRep(side: any) {
    console.log("going to " + side)
    if (this.timer) return;
    this.w1 = this.totalScrolled
    const newTimer = setInterval(() => {
      this.moveSides(side, 1.5);
    }, 10);

    this.timer = newTimer;
  }

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  setRols() {
    let qtd = 0
    Array.from(this.ScrollableCon.children).map((el) => {
      if (!this.ScrollableCon.classList.contains('activeItem')) {
        qtd += 1
      }
    })
    let itemsQ = Array.from(this.ScrollableCon.children).length //Array.from(refFrm.current.querySelectorAll(".Prog2")).length
    Array.from(this.ScrollableCon.children).forEach((el: any, i) => {
      if (this.ScrollableCon.classList.contains('activeItem')) {
        let vel = `${(i * 0.2)}s`
        this.rand.setStyle(el, "transition", vel)
        //el.style.transition = vel
        this.rand.setStyle(el, "transitionDelay", vel)
        //el.style.transitionDelay = vel
        el.children[0].style.setProperty("--vel", vel);
        el.style.setProperty("--vel", vel);

        Array.from(el.children[0].children).forEach((chil: any) => {
          chil.style.setProperty("--vel", vel);
        })
      } else {
        let vel = `${(Math.abs((itemsQ - qtd) - (i - itemsQ)) * 0.1)}s`
        this.rand.setStyle(el, "transition", vel)
        //el.style.transition = vel
        this.rand.setStyle(el, "transitionDelay", vel)
        //el.style.transitionDelay = vel
        el.children[0].style.setProperty("--vel", vel);
        el.style.setProperty("--vel", vel);
        Array.from(el.children[0].children).forEach((chil: any) => {
          chil.style.setProperty("--vel", vel);
        })
      }
    })
  }

  moveSides(side: any, amount: any) {
    if (!this.ScrollableCon || !this.containerWidth) return;

    const unitSize = this.containerWidth / 5;
    const totalUnits = this.ScrollableCon.children.length * unitSize;

    // Movimento para a direita
    if (side === "l" && this.containerWidth < (this.w1 - amount)) {
      this.w1 -= amount;
      this.w2 = Math.abs((this.containerWidth - this.w1))
      this.totalScrolled = this.w1
      //console.log(w2);
      this.rand.setStyle(this.ScrollableCon, "transform", `translateX(-${Math.abs(this.w2)}px)`)
      //this.ScrollableCon.style.transform = `translateX(-${Math.abs(this.w2)}px)`;
      //console.log("l w2 "+w2+" w1 "+w1)
    }
    // Movimento para a esquerda
    else if (side === "r" && (this.w1 + amount) < totalUnits) {
      this.w1 += amount;
      this.w2 = Math.abs((this.containerWidth - this.w1))
      this.totalScrolled = this.w1 //setTotalScrolled(w1)
      this.rand.setStyle(this.ScrollableCon, "transform", `translateX(-${Math.abs(this.w2)}px)`)
      //this.ScrollableCon.style.transform = `translateX(-${Math.abs(this.w2)}px)`;

      //console.log("r w2 "+w2+" w1 "+w1)
    }
  }
}

import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { LightModeService } from '../../Service/LightMode.service';

@Component({
  selector: 'app-steps-comp1',
  standalone:false,
  templateUrl: './steps-comp1.component.html',
  styleUrl: './steps-comp1.component.css'
})
export class StepsComp1Component implements AfterViewInit{
  arrSteps = [{id:0,title:"title01",icon:"/static/icon/google-drive-logo.png",description:"desc1"},
    {id:1,title:"title02",icon:"/static/icon/home.png",description:"desc2"},
    {id:2,title:"title03",icon:"/static/icon/login.png",description:"desc3"},
    {id:3,title:"title04",icon:"/static/icon/settings.png",description:"desc4"},
    {id:4,title:"title05",icon:"/static/icon/location.png",description:"desc5"}
  ]
  mode: boolean
  constructor(private el:ElementRef,private rend:Renderer2,private modeS: LightModeService){
    this.mode = false
        LightModeService.ev.subscribe((el) => {
          this.mode = el.mode
          console.log("the current mode is " + this.mode)
        })
  }
  mainContainer:any
  ngAfterViewInit(): void {
    const obs = new IntersectionObserver((el)=>{
      el.forEach((el)=>{
        if(el.isIntersecting){
          this.rend.addClass(el.target,"Activate")
          this.setRols(5)
        }else{
          this.setRols(0)
          this.rend.removeClass(el.target,"Activate")
        }
      })
      
    },{threshold:0.5})
    let elmt = this.el.nativeElement.getElementsByClassName("actionScroll")[0]
    this.mainContainer = this.el.nativeElement.getElementsByClassName("StepComp")[0]

    if(elmt){
      obs.observe(elmt)
    }
    console.log(elmt)
  }
  setRols(qtd:number
    //obj
  ){
        //let stillValid = true
        //let qtd=this.arrSteps.length
        /*
        Object.keys(obj).map((el)=>{
            if(obj[el].valid){
                if(stillValid){
                    qtd+=1
                }
            }else{
                stillValid = false
            }
        })*/
        //console.log(refFrm.current)
        let itemsQ = Array.from(this.mainContainer.children //refFrm.current.querySelectorAll(".Prog2")
        ).length
        Array.from(this.mainContainer.children).forEach((el:any,i)=>{
            //console.log(i)
            if((i+1) <= qtd){
                let vel = `${(i * 0.2)}s`
                //console.log(vel)
                this.rend.addClass(el,"SelectedValid")
                //el.classList.add("SelectedValid")
                this.rend.setStyle(el,"transition",vel)
                //el.style.transition = vel
                this.rend.setStyle(el,"transitionDelay",vel)
                //el.style.transitionDelay = vel
                this.rend.setStyle(el.children[0],"transition",vel)
                this.rend.setStyle(el.children[0],"transitionDelay",vel)

                this.rend.setStyle(el.children[1],"transition",vel)
                this.rend.setStyle(el.children[1],"transitionDelay",vel)
                //this.rend.setStyle(el.children[0],"--vel",vel)
                //el.children[0].style.setProperty("--vel", vel);
                //this.rend.setStyle(el,"--vel", vel)
                el.style.setProperty("--vel", vel);
            }else{
                //console.log("the left if" +(itemsQ - qtd))
                //console.log("the pos is "+i)
                let vel = `${(Math.abs((itemsQ - qtd) - (i-itemsQ)) * 0.1)}s`
                //console.log(vel)

                this.rend.setStyle(el,"transition",vel)
                //el.style.transition = vel
                this.rend.setStyle(el,"transitionDelay",vel)
                //el.style.transitionDelay = vel
                this.rend.setStyle(el.children[0],"transition",vel)
                this.rend.setStyle(el.children[0],"transitionDelay",vel)

                this.rend.setStyle(el.children[1],"transition",vel)
                this.rend.setStyle(el.children[1],"transitionDelay",vel)
                //this.rend.setStyle(el.children[0],"--vel",vel)
                //el.children[0].style.setProperty("--vel", vel);
                this.rend.removeClass(el,"SelectedValid")
                //el.classList.remove("SelectedValid")
                //this.rend.setStyle(el,"--vel",vel)
                el.style.setProperty("--vel", vel);
            }
            //console.log(el)
        })
    }
}

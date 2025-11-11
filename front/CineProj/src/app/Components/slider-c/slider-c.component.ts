import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-slider-c',
  standalone:false,
  templateUrl: './slider-c.component.html',
  styleUrl: './slider-c.component.css'
})
export class SliderCComponent implements OnInit{
  constructor(private el:ElementRef,private rend:Renderer2){
  }
  value:any=0
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.loadVals()
    this.setContent("")
    this.setTagValues()
    setTimeout(()=>{
      this.setAutoInterval()
    },0)
    /*
      setTimeout(() => {
        this.loadVals()
        this.setContent("")
        this.setTagValues()
        console.log("ok")
    }, 20)*/
  }
  objs = [
  { id: 0, img: "/static/img/city.jpg", title: "title1", 
    description: `1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure.` },
  { id: 1, img: "/static/img/program.jpg", title: "title2", 
    description: `2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure.` },
  { id: 2, img: "/static/img/shark.jpg", title: "title3", 
    description: `3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure.` },
]
tcon:any
mainContent:any
txtConRef:any
autoSlider:any
setAutoInterval(){
  this.autoSlider = setInterval(()=>{
    this.setSelect()
  },3000)
}
rmvInterval(){
  clearInterval(this.autoSlider)
}
setTagValues() {
  Array.from(this.tcon.children).forEach((el:any, i) => {
    let imgVal = el.querySelectorAll(".ElementDisplay > img")[0]
    imgVal.setAttribute("src", this.objs[i].img)
    let imgVal2 = el.querySelectorAll(".ContentCard > img")[0]
    imgVal2.setAttribute("src", this.objs[i].img)
  })
}
setContent(side:string) {
  this.rmvInterval()
  let res:any = ""
  if (side == "l") {
    res = this.objs.shift()
    this.objs.push(res)
  }
  if (side == "r") {
    res = this.objs.pop()
    this.objs.unshift(res)
  }
  this.value = ((this.objs[this.objs.length - 1].id+1)/this.objs.length)*100+"%"
  this.rend.addClass(this.txtConRef,"MainCDCAnim")
  //this.txtConRef.current.classList.add("MainCDCAnim")
  this.txtConRef.children[0].textContent = this.objs[this.objs.length - 1].title
  this.txtConRef.children[1].textContent = this.objs[this.objs.length - 1].description
  setTimeout(()=>{
    this.rend.removeClass(this.txtConRef,"MainCDCAnim")
    //this.txtConRef.current.classList.remove("MainCDCAnim")
  },500)
  let img = this.mainContent.querySelectorAll("img")[0]
  img.setAttribute("src", this.objs[this.objs.length - 1].img)
  //console.log(objs)
}
setSelected2() {
  //setTagValues()
  let childLen = this.tcon.children.length
  let fcStl = this.tcon.children[childLen - 1]
  //-----------------------------------------------------------------TO DO
  this.rend.setStyle(fcStl,"position","static")
  //fcStl.style.position = "static"
  let el = fcStl.querySelectorAll(".ElementDisplay")[0]
  this.rend.addClass(el,"showElmtReverse")
  //el.classList.add("showElmtReverse")
  this.rend.addClass(this.tcon,"deslocReverse")
  //tcon.classList.add("deslocReverse")
  //setTagValues()
  this.setContent('r')
  this.rend.insertBefore(this.tcon,this.tcon.children[childLen - 1], this.tcon.children[0])
  //tcon.insertBefore(tcon.children[childLen - 1], tcon.children[0]);
  setTimeout(() => {
    //console.log(tcon.children)
    //tcon.insertBefore(tcon.children[childLen - 1], tcon.children[0]);
    //tcon.appendChild(tcon.children[childLen-1])
    this.rend.setStyle(fcStl,"position","relative")
    //fcStl.style.position = "relative"
    this.rend.removeClass(el,"showElmtReverse")
    //el.classList.remove("showElmtReverse")
    this.rend.removeClass(this.tcon,"deslocReverse")
    //tcon.classList.remove("deslocReverse")
    this.rend.removeClass(this.tcon.children[0],"execOnce")
    //tcon.children[0].classList.remove("execOnce")

    this.setAutoInterval()
  }, 600)
}
setSelect() {
  let fcStl = this.tcon.children[0]
  let childLen = this.tcon.children.length
  this.rend.setStyle(fcStl,"position","static")
  //fcStl.style.position = "static"
  let el = fcStl.querySelectorAll(".ElementDisplay")[0]
  this.rend.addClass(el,"showElmt")
  //el.classList.add("showElmt")
  //console.log(el)
  this.rend.addClass(this.tcon,"desloc")
  //tcon.classList.add("desloc")
  setTimeout(() => {
    this.setContent('l')
    //console.log(this.tcon.children)
    this.rend.appendChild(this.tcon,this.tcon.children[0])
    //tcon.appendChild(this.tcon.children[0])
    this.rend.setStyle(this.tcon.children[childLen - 1],"position","relative")
    //this.tcon.children[childLen - 1].style.position = "relative"
    this.rend.removeClass(el,"showElmt")
    //el.classList.remove("showElmt")
    this.rend.removeClass(this.tcon,"desloc")
    //tcon.classList.remove("desloc")
    this.rend.addClass(this.tcon.children[childLen - 1],"execOnce")
    //tcon.children[childLen - 1].classList.add("execOnce")

    this.setAutoInterval()
  }, 600)
}
loadVals() {
  //this.el.nativeElement.getElementsByClassName("thumbCon")[0]
  this.tcon = this.el.nativeElement.getElementsByClassName("thumbCon")[0]
  //document.getElementsByClassName("thumbCon")[0]
  this.mainContent = this.el.nativeElement.getElementsByClassName("mainContent")[0]
  //document.getElementsByClassName("mainContent")[0]
  this.txtConRef = this.el.nativeElement.getElementsByClassName("MainCDispContent")[0]
}
}

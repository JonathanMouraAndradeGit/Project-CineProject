import { Component, ElementRef, Renderer2, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-progress-info-v1',
  standalone:false,
  templateUrl: './progress-info-v1.component.html',
  styleUrl: './progress-info-v1.component.css',
  inputs: ["progress:p", "qtd:q"]
})
export class ProgressInfoV1Component {
  @ViewChild("mainC", { read: ElementRef, static: true }) mainC!: ElementRef;
  progress!: any
  qtd!: any
  mainElement!: any
  constructor(private el: ElementRef, private rand: Renderer2) {

  }
  ngAfterViewInit(): void {
    this.setValus()
    this.setProgress()
  }
  setValus() {
    this.mainElement = this.el.nativeElement.getElementsByClassName("progCon")[0]
  }
  setProgress() {
    let elM = this.mainC.nativeElement
    //console.log(elM)
    //console.log(elM.children)
    if (elM) {
      Array.from(elM.children).forEach((el, i) => {
        if ((i + 1) <= parseInt(this.progress)) {
          this.rand.addClass(el, "active")
          //console.log("adding class")
          //console.log(el)
        } else {
          this.rand.removeClass(el, "active")
        }
      })
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log(this.progress)
    //console.log(this.qtd)
    //console.log(this.getArr)
    this.setProgress()
  }
  get getArr() {
    let qtd = [...Array(parseInt(this.qtd)).keys()]
    //console.log("the qtd is " + qtd)
    return qtd
  }
}

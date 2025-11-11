import { AfterViewInit, Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-img-layout',
  standalone: false,
  templateUrl: './img-layout.component.html',
  styleUrl: './img-layout.component.css'
})
export class ImgLayoutComponent implements AfterViewInit {
  refC:any=""
  constructor(private el: ElementRef, private rend: Renderer2) {

  }
  @Input("arr") arr!: any[] /*[
        [{img:"/static/cityImage.jpeg",visible:true},
            {img:"/static/cityImage.jpeg",visible:true},{img:"/static/cityImage.jpeg",visible:false}],
        [{img:"/static/cityImage.jpeg",visible:true},{img:"/static/shark.jpg",visible:true}],
        [{img:"/static/cityImage.jpeg",visible:false},{img:"/static/shark.jpg",visible:true}],
        [{img:"/static/cityImage.jpeg",visible:true}],
        [{img:"/static/cityImage.jpeg",visible:true}]
    ]*/
  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    this.loadVals()
    this.addItems(5)
  }
  loadVals(){
    this.refC = this.el.nativeElement.getElementsByClassName("content")[0]
  }
//let refC = useRef()

addItems(gap: number): void {
  let inc = 2;
  let inc2 = 0;

  this.arr.forEach((el: any, i: number) => {
    const doc = this.rend.createElement('div');
    this.rend.addClass(doc, 'ItemCon');

    const height = (100 / (this.arr.length / 2)) - ((gap * 0.3) * gap);
    this.rend.setStyle(doc, 'height', `${height}%`);

    if (inc === i) {
      inc += 2;
      inc2 += 1;
    }

    const translateY = inc2 * 100 + (inc2 * (gap / 2));
    this.rend.setStyle(doc, 'transform', `translateY(${translateY}%)`);

    el.forEach((il: any) => {
      let item: any;

      if (il.visible) {
        item = this.rend.createElement('img');
        this.rend.setAttribute(item, 'src', il.img);
      } else {
        item = this.rend.createElement('div');
      }

      this.rend.addClass(item, 'ItemD');
      this.rend.appendChild(doc, item);
    });

    this.rend.appendChild(this.refC, doc);
  });
}
}

import {CommonModule} from "@angular/common"
import {FormsModule } from "@angular/forms"
import {HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"

import { HomePageComponent } from "./home-page.component"
import { SliderCComponent } from "../../Components/slider-c/slider-c.component"
import { ContentInfo1Component } from "../../Components/content-info1/content-info1.component"
import { ContentInfo2SplitComponent } from "../../Components/content-info2-split/content-info2-split.component"
import { DisplayDynamicComponent } from "../../Components/display-dynamic/display-dynamic.component"
import { ContentInfo3Component } from "../../Components/content-info3/content-info3.component"
import { SliderType2Component } from "../../Components/slider-type2/slider-type2.component"
import { StepsComp1Component } from "../../Components/steps-comp1/steps-comp1.component"
import { Card2Component } from "../../Components/card2/card2.component"
import { SideTLCComponent } from "../../Components/side-tlc/side-tlc.component"
import { Accordion1Component } from "../../Components/accordion1/accordion1.component"
import { ImgLayoutComponent } from "../../Components/img-layout/img-layout.component"
@NgModule({
    declarations:[HomePageComponent,SliderCComponent,ContentInfo1Component,ContentInfo2SplitComponent,
        DisplayDynamicComponent,ContentInfo3Component,SliderType2Component,Card2Component,
        StepsComp1Component,SideTLCComponent,Accordion1Component,ImgLayoutComponent
    ],
    imports:[CommonModule,FormsModule,HttpClientModule],
    providers:[],
    exports:[HomePageComponent]
})

export class HomePageModule{}
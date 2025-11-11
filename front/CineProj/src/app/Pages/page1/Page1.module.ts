import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Page1Component } from "./page1.component";
import { Page1Rot } from "./Page1.routes";
import { ProgresInfo1Component } from "../../Components/progres-info1/progres-info1.component";
import { InputType1Component } from "../../Components/input-type1/input-type1.component";
import { ProgressInfoV1Component } from "../../Components/progress-info-v1/progress-info-v1.component";
import { Calendar01Component } from "../../Components/calendar01/calendar01.component";
import { FormCad1Component } from "../../Components/form-cad1/form-cad1.component";
import { FormSwitcherComponent } from "../../Components/form-switcher/form-switcher.component";
import { FormLogComponent } from "../../Components/form-log/form-log.component";
@NgModule({
    declarations:[Page1Component,ProgresInfo1Component,InputType1Component,ProgressInfoV1Component,
        Calendar01Component,FormCad1Component,FormSwitcherComponent,FormLogComponent
    ],
    providers:[],
    imports:[ReactiveFormsModule,FormsModule,CommonModule,Page1Rot],
    exports:[Page1Component]
})
export class Page1Module{}
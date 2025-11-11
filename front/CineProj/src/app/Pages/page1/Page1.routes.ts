import { Routes,RouterModule } from "@angular/router";
import { Page1Component } from "./page1.component";
import { ModuleWithProviders } from "@angular/core";
const rot:Routes = [
    {path:"",component:Page1Component},
]

export const Page1Rot:ModuleWithProviders<RouterModule> = RouterModule.forChild(rot) 
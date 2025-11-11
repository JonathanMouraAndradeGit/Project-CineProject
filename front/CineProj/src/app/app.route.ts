import { ModuleWithProviders } from "@angular/core"
import {Router,Routes,RouterModule} from "@angular/router"
import { HomePageComponent } from "./Pages/home-page/home-page.component"
//import { Page1Component } from "./Pages/page1/page1.component"
import { Page2Component } from "./Pages/page2/page2.component"

//import { Page1Module } from "./Pages/page1/Page1.module"
let rot:Routes = [
    {path:"",component:HomePageComponent},
    {path:"page1", loadChildren:() => import("./Pages/page1/Page1.module").then(m => m.Page1Module) /*component:Page1Component*/},
    {path:"page2",component:Page2Component}
]

export const MainRoutes:ModuleWithProviders<RouterModule> = RouterModule.forRoot(rot)
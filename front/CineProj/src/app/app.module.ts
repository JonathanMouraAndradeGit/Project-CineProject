import {BrowserModule} from "@angular/platform-browser"
import {FormsModule} from "@angular/forms"
import {NgModule} from "@angular/core"
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from "./app.component"
import { NavBarCComponent } from "./Components/nav-bar-c/nav-bar-c.component"
import { MainRoutes } from "./app.route"
import { HomePageModule } from "./Pages/home-page/homePageModule.module"
import { SwitcherComponent } from "./Components/switcher/switcher.component"

@NgModule({
    declarations:[AppComponent,NavBarCComponent,SwitcherComponent],
    imports:[BrowserModule,FormsModule,HttpClientModule,MainRoutes,HomePageModule],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{}
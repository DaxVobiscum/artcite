import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HomePageComponent } from "./homePage.component";
import { HomePageRoutingModule } from "./homePage-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomePageRoutingModule
    ],
    declarations: [
        HomePageComponent
    ]
})
export class HomePageModule { }
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./homePage.component";

const homePageStates : Routes = [
    {
        path: "",
        component: HomePageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(homePageStates)
    ],
    exports: [
        RouterModule
    ]
})
export class HomePageRoutingModule { }
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const pageRoutes : Routes = [
    {
        path: "home",
        loadChildren: "src/pages/homePage/homePage.module#HomePageModule"
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(pageRoutes)
    ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule { }
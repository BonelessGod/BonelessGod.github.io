import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./page/about/about.component";
import { LandingComponent } from "./page/landing/landing.component";
import { ProjectComponent } from "./page/project/project.component";


const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'projets', component: ProjectComponent},
    { path: 'about', component: AboutComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
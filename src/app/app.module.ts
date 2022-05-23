import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectComponent } from './page/project/project.component';
import { ProjectObjComponent } from './page/project/project-obj/project-obj.component';
import { LandingComponent } from './page/landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './page/about/about.component';
import { SkillObjComponent } from './page/about/skill-obj/skill-obj.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectComponent,
    ProjectObjComponent,
    LandingComponent,
    AboutComponent,
    SkillObjComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

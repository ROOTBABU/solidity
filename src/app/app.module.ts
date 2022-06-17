import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './components/basic/basic.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PrerequisitesComponent } from './components/prerequisites/prerequisites.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    HomepageComponent,
    PrerequisitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

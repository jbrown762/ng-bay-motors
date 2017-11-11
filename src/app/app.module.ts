import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './shared/panel/panel.component';
import { NavComponent } from './shared/nav/nav.component';
import { InfoBarComponent } from './shared/info-bar/info-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent,
    NavComponent,
    InfoBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

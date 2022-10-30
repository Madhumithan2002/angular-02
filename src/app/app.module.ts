import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MadhuComponent } from './madhu/madhu.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { HomeRComponent } from './home-r/home-r.component';
import { RoterComponent } from './roter/roter.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    MadhuComponent,
    FirstcomponentComponent,
    HomeRComponent,
    RoterComponent,
    PagenotfoundComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

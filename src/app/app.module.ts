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
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmpdataComponent } from './empdata/empdata.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmpReactiveComponent } from './add-emp-reactive/add-emp-reactive.component';


@NgModule({
  declarations: [

    AppComponent,
    MadhuComponent,
    FirstcomponentComponent,
    HomeRComponent,
    RoterComponent,
    PagenotfoundComponent,
    HeaderComponent,
    EmpdataComponent,
    AddEmpComponent,
    AddEmpReactiveComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

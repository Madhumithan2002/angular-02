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
import { LoginComponent } from './login/login.component';
import { UserAuthGuard } from './user-auth.guard';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [

    AppComponent,
    MadhuComponent,
    FirstcomponentComponent,
    HomeRComponent,
    RoterComponent,
    PagenotfoundComponent,
    HeaderComponent,
    AddEmpComponent,
    AddEmpReactiveComponent,
    LoginComponent,
    EmpdataComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [UserAuthGuard, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

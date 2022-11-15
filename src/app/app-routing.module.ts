import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpReactiveComponent } from './add-emp-reactive/add-emp-reactive.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { HomeRComponent } from './home-r/home-r.component';
import { LoginComponent } from './login/login.component';
import { MadhuComponent } from './madhu/madhu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { UserAuthGuard } from './user-auth.guard';


const routes: Routes = [
  {
    path: 'services',
    component: HomeRComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'about/:sid',
    component: FirstcomponentComponent
  },
  {
    path: 'tabel',
    component: MadhuComponent
  },
  {
    path: 'add-employee',
    component: AddEmpComponent
  },
  {
    path: 'addemployeereactive',
    component: AddEmpReactiveComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Getproduct',
    component: ProductComponent
  },
  { path: '', redirectTo: "/services", pathMatch: 'full' },
  {
    path: '**',
    component: PagenotfoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




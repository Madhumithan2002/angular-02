import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { HomeRComponent } from './home-r/home-r.component';
import { MadhuComponent } from './madhu/madhu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RoterComponent } from './roter/roter.component';

const routes: Routes = [
{path:'services',
  component:HomeRComponent
},
{path:'about/:sid',
  component:FirstcomponentComponent
},
{path:'tabel',
  component:MadhuComponent
},
{path:'',redirectTo:"services", pathMatch:'full'},
{
  path:'**',
  component:PagenotfoundComponent
}
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




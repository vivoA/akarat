import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './layout/gards/auth.guard';
import { LoginComponent } from './layout/login/login.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {path:'',redirectTo:'home', pathMatch: 'full' },
  {
    path:"home",
    loadChildren:() => import ('./modules/home/home.module').then (
      m => {return m.HomeModule}
    )
  },
  {
    path:"dash-board",
    loadChildren:() => import ('./modules/dash/dash.module').then (
      m => {return m.DashModule}
    ),
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

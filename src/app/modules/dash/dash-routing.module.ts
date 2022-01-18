import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { layout } from 'src/app/layout/layout-routing.service';
import { DashBoardComponent } from './dash-board/dash-board.component';
const routes: Routes = [
    layout.loadChildern([
      {
        path:"",
        component:DashBoardComponent
      }
    ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }

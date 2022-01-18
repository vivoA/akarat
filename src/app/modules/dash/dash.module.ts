import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ShardModule } from 'src/app/shard/shard.module';

@NgModule({
  declarations: [
    DashBoardComponent
  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    ShardModule
  ]
})
export class DashModule { }

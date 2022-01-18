import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NgxSelectModule } from 'ngx-select-ex';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutosizeModule } from '@techiediaries/ngx-textarea-autosize';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { SearchPipe } from './pips/search.pipe';


@NgModule({
  declarations: [
    ConfirmModalComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    NgxSelectModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[
    NgxSelectModule,
    AutosizeModule,
    ConfirmModalComponent,
    SearchPipe
  ]
})
export class ShardModule { }

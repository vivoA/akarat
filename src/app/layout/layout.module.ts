import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout-component/layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './header/modal/modal.component';

import { ShardModule } from '../shard/shard.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ModalComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShardModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule
  ]
})
export class LayoutModule { }

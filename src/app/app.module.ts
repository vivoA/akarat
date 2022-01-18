import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShardModule } from './shard/shard.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';

//angular firebase 
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//shard module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule,
    ShardModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA5shRnqcYmkO8B5OdZaybFTXb04b3z1Tg",
      authDomain: "akarat-52b61.firebaseapp.com",
      projectId: "akarat-52b61",
      storageBucket: "akarat-52b61.appspot.com",
      messagingSenderId: "273956154763",
      appId: "1:273956154763:web:1dc8fdfa3223e89ce6d38e",
      measurementId: "G-YNTHK3B8WD"
    }),

    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild ('modal') modalComp:any
  isuser:boolean=false
  constructor(private modal:NgbModal,
              private authSer:LoginService) {}

  ngOnInit(): void {
    this.authSer.authUser.subscribe(user =>{
      if(user){
        this.isuser=true;
      } 
      else this.isuser=false
    });
  }

  open() {
    this.modal.open(this.modalComp.content)
  }




}

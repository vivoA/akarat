import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/layout/login/services/login.service';

import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  reals:any=[]
  modalContent:any
  btnContent:any
  realId:any
  isUser:boolean=false
  query:any
  constructor(private homeSer:HomeService,
              private authSer:LoginService) { }

  ngOnInit(): void {
    this.homeSer.getReals().subscribe(res=>{
      console.log(res);
      this.reals=res
    })
  
    this.authSer.authUser.subscribe(user =>{
      if(user){
        this.isUser=true
      }else{
        this.isUser=false
      }
    })
  }

  

  accept(realId:any){
    this.realId=realId
    this.modalContent="هل انت متاكد من الموافقة؟"
    this.btnContent="قبول"
  }

  delete(realId:any){
    console.log("real id");
    console.log(realId);
    
    this.realId=realId
    this.modalContent="هل انت متاكد من الحذف ؟"
    this.btnContent="حذف"
  }

  accetpReal(){
    console.log('accetp real');
  }

  deleteReal(){
    console.log("this.real id");
    console.log(this.realId);
    
    this.homeSer.deleteReal(this.realId).then(res=>{
      console.log("res");
      
      console.log(res);
      
    }).catch(err=>{
      console.log("err");
      
      console.log(err);
      
    })
  }
}

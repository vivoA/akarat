import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private loginSer:LoginService,
              private router:Router,
             private toster:ToastrService ) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log((form.value).email);
    this.loginSer.forgetPass((form.value).email).then(res=>{
      this.toster.success("تم ارسال الرابط الي البريد الالكتروني")
      this.router.navigate(['/login'])
    },err =>{
      this.toster.error(err)
    })
  }

}

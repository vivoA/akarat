import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isPasswordDisplayed: boolean=false;
  loginForm!:FormGroup;
  isFormSubmitted: boolean=false;
  loadingSpinnerEnabled: boolean=false;

  constructor(private fb: FormBuilder,
              private loginSer:LoginService,

              private router: Router, private toaster:ToastrService) { }

  ngOnInit() {
    this.initLoginForm()
  }

  initLoginForm(){
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password:[null, Validators.required]
    })
  }

  get username() {
    return <FormArray>this.loginForm.get('username')
  }
  get password() {
    return <FormArray>this.loginForm.get('password')
  }

  login(){
    this.isFormSubmitted = true
      this.isFormSubmitted = false
      console.log(this.loginForm.value);
      this.loginSer.signin((this.loginForm.value).username, (this.loginForm.value).password).then( res =>{
        console.log(res);
        this.router.navigate(['/dash-board'])
        this.toaster.success("تم تسجيل الدخول بنجاح")
      }).catch(err =>{
        console.log(err);
        this.toaster.error('اسم المستخدم او كلمة السر غير صحيح')
        
      })
  }

}

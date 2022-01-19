import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RealsService } from './services/reals.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild ('content')content:any
  form!:FormGroup;
  submited:boolean=false
  success:boolean=false
  public citizen:any=[]
  public types: string[] = ['ايجار' , 'بيع'];
  public realType: string[] = ['ارض زراعية', 'ارض عقار' , 'منزل', 'شقة', 'فلة', 'محل',
                                'مزرعة', 'مصنع', 'ورشة', 'عمارة', 'شالية', 'روف', 'غرفة', 'قصر',];
  constructor(private fb:FormBuilder,
              private realsService:RealsService,
              private toaster:ToastrService,
              private modal:NgbModal
               ) {}

  ngOnInit(): void {
    this.build()
    this.citizen=this.realsService.citizens()
  }
  
  build(){
    this.form=this.fb.group({
      type:['',       Validators.required],
      realType:['',   Validators.required],
      description:['',Validators.required],
      price:[null,                       ],
      phone:[null,    Validators.required],
      citizen:['',    Validators.required]

    })
  }
  get f() { return this.form.controls}
  //one select 
  doSelect(event:any){
    console.log(event);
  }


  //onsubmit
  onSubmit(){
    this.submited=true
    if(!this.form.valid){
      return
    }
    const dataToSend={
      ...this.form.value,
      publish: false
    }
    this.realsService.addReal(dataToSend).then(res=>{
      this.success=true
      this.submited=false
      this.form.reset()
    }).catch(err=>{
      this.success=false
    })
  }

  //close
  close(){
    this.modal.dismissAll()
  }

  //add another
  addAnother(){
    this.success=false
  }
}




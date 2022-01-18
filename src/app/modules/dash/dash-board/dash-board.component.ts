import { Component, OnInit } from '@angular/core';
import { DashService } from './services/dash.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  reals:any=[]
  modalContent:any
  btnContent:any
  realId:any
  constructor(private dashSer:DashService) { }

  ngOnInit(): void {
    this.dashSer.getReals().subscribe(res=>{
      this.reals=res.map(data=>{
        return{
         data
        }
      })
    }
  )}

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
    this.dashSer.publish(this.realId,true).then(res => {
      console.log("respns");
      
      console.log(res);
    }).catch(err => {
      console.log("err");
      
      console.log(err);
    })
  }

  deleteReal(){
    this.dashSer.deleteReal(this.realId).then(res=>{
    }).catch(err=>{
      console.log("err");
      console.log(err);
    })
  }

}

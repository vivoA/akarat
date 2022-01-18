import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  @Input() modalContent:any
  @Input() btnContent:any
  @Output() confirm:EventEmitter<any>= new EventEmitter
  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  open(content:any) {
    this.modal.open(content);
  }
  
  confirmFun(){
    this.confirm.emit()
  }
}

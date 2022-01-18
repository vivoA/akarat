import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(private fireStore:AngularFirestore) { }

  getReals(){
    return this.fireStore.collection('reals').valueChanges({ idField: 'id' })
  }

  deleteReal(id:any){
    return this.fireStore.doc(`reals/${id}`).delete()
  }

  

  publish(id:any ,publish:boolean){
    return this.fireStore.doc(`reals/${id}`).update({publish})
  };


}

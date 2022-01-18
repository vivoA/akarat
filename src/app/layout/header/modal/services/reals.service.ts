import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class RealsService {

  constructor(private fireStore:AngularFirestore) { }

  addReal(data:any){
   return this.fireStore.collection('reals').add(data)
  }

  citizens(){
     const citiz=[
       "القاهره",
       "الجيزه",
       "المنصوره",
       
     ]
    return citiz
  }
}

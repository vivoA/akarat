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
       "الاسكندرية",
       "لاسماعلية",
       "اسوان",
       "اسيوط",
       "الاقصر",
       "البحر الاحمر",
       "البحيرة",
       "بني سويف",
       "بور سعيد",
       "جنوب سيناء",
       "الجيزة",
       "الدقهلية",
       "دمياط",
       "سوهاج",
       "السويس",
       "الشرقية",
       "الغربية",
       "الفيوم",
       "القليوبية",
       "قنا",
       "كفر الشيخ",
       "شمال سيناء",
       "مطروح",
       "المنوفية",
       "المنيا",
       "الوادي الجديد"
       
     ]
    return citiz
  }
}

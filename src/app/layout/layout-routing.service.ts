import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout-component/layout.component";


export class layout{
    static loadChildern(routes:Routes){
        return{
            path:"",
            component:LayoutComponent,
            children:routes
        }
    }
}
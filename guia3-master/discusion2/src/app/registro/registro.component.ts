import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser'
@Component({
selector: 'app-registro',
templateUrl: './registro.component.html',
styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
registro=[];
ficha:any;
galones:number;
tipo:string;
tip1:string="Regular";
tip2:string="Diesel";
tip3:string="Especial";
monto:number;

constructor() { }
ngOnInit() {
this.galones=0.05;
}

  
ingresar(){
if(this.galones>=0.05 && this.tipo=="Regular" && this.galones<=150){
  this.monto=this.galones*4.05;

  

}else if(this.galones>=0.05 && this.tipo=="Diesel"  && this.galones<=150){
  this.monto=this.galones*3.96;

  
}else if (this.galones>=0.05 && this.tipo=="Especial"  && this.galones<=150){
  this.monto=this.galones*4.25;

  
}
}
 }

import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser'
import { count } from 'console';
@Component({
selector: 'app-registro',
templateUrl: './registro.component.html',
styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
registro=[];
arreglo:string[][];
empleado:any;
nombre:string;
sueldo:number;
contador:number;
desc1:number;
desc2:number;
desc3:number;
monto:number;
i:number;
j:number;
constructor() { }
ngOnInit() {
this.sueldo=300;
this.nombre='';
this.contador=0;
}
ingresar(){
  k:Number;
  this k
  for(this.i=0;(this.i)<count(this.arreglo[this.i]);this.i++)
if(this.sueldo>150 && this.nombre!=''){
  this.desc1= this.sueldo*0.073;
  this.desc2= this.sueldo*0.11;
  this.desc3= this.sueldo*0.051;
  
  this.monto=(this.sueldo-this.desc1-this.desc2-this.desc3);
  
this.empleado={"nombre":this.nombre,"sueldo":this.sueldo,
"desc1":this.desc1,"desc2":this.desc2,"desc3":this.desc3,"monto":this.monto }
this.registro.push(this.empleado);
this.contador++;
}
}
}

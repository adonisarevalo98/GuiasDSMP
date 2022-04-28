import { Component } from '@angular/core';
import { Alumno } from './models/alumno'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngular';
 phone_validation='^[0-9]{4}-[0-9]{4}$';
 email_validation = '^[a-zA-Z0-9._-]{1,15}@[a-zA-Z0-9.-]{1,15}.[a-zA-Z]{1,5}$';

//arreglo del tipo alumno, que tienen 3 registros almacenados
alumnoArray: Alumno[] = [
    {id:1, name:"Alex", lastname:"Campos", age:35, 
    address:"San Salvador", phone:"7789-1234", email:"ACampos@gmail.com"},
    {id:2, name:"Maria", lastname:"Lopez", age:20, 
    address:"San Miguer", phone:"7369-1234", email:"Maria2000@gmail.com"}, 
    {id:3, name:"Juan", lastname:"Castro", age:25, 
    address:"San Vicente", phone:"7323-1234", email:"JC@gmail.com"}
  ]

  selectedAlumno: Alumno = {id:0, name:'', lastname:'', age:0, address:'', phone:'', email:''};
  
  openForEdit(alumno: Alumno): void{
    this.selectedAlumno = alumno;
  }

  addOrEdit(): void{
    

   
    if( this.selectedAlumno.name == '' || this.selectedAlumno.lastname == ''
    || this.selectedAlumno.age <= 0 || this.selectedAlumno.address == '' 
    || this.selectedAlumno.phone == '' || this.selectedAlumno.email == ''){
      alert("Debe rellenar todos los campos")
    }else{

   if (this.selectedAlumno.phone.match(this.phone_validation)){

   if (this.selectedAlumno.email.match(this.email_validation)){

   
    if(this.selectedAlumno.id === 0){ //add
         this.selectedAlumno.id = this.alumnoArray.length + 1;
        
         this.alumnoArray.push(this.selectedAlumno);
          
    }
  }else{
    alert("Formato de correo incorrecto");
  }
  }else{
    alert("formato de teléfono incorrecto");
  }
  }
  
     this.selectedAlumno = {id:0, name: '', lastname: '', age:0, address:'', phone:'',email:''};
  
    }

    delete(): void{
if(confirm('¿Esta seguro de eliminare el registro?')){
  this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
  this.selectedAlumno = {id:0, name:'', lastname:'', age:0, address:'', phone:'', email:''};
}

    }
}

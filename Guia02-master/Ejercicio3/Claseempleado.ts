
      class Empleado{
        nombre:string;
        salario:number;
        afp:number;
        isss:number;
        constructor(nom, sal){
        this.nombre = nom;
        this.salario = sal;
        }
       descuentos() {
           this.afp=this.salario*0.075;
           this.isss=this.salario*0.03;

            return "El salario total de: " + this.nombre + " = $" + (this.salario - this.afp - this.isss);
          }
         
         }
        const miSalario = new Empleado ("Adonis", 300);
            
        console.log(miSalario.descuentos());

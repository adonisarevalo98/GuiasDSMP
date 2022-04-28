var Empleado = /** @class */ (function () {
    function Empleado(nom, sal) {
        this.nombre = nom;
        this.salario = sal;
    }
    Empleado.prototype.descuentos = function () {
        this.afp = this.salario * 0.075;
        this.isss = this.salario * 0.03;
        return "El salario total de: " + this.nombre + " = $" + (this.salario - this.afp - this.isss);
    };
    return Empleado;
}());
var miSalario = new Empleado("Adonis", 300);
console.log(miSalario.descuentos());

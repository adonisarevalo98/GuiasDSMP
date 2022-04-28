var calculadora = /** @class */ (function () {
    function calculadora(num1, num2) {
        this.numero1 = num1;
        this.numero2 = num2;
    }
    calculadora.prototype.calculos = function () {
        this.suma = this.numero1 + this.numero2;
        this.resta = this.numero1 - this.numero2;
        this.multipliacion = this.numero1 * this.numero2;
        this.divicion = this.numero1 / this.numero2;
        return "Resultado de suma " + this.suma +
            " Resultado de resta " + this.resta +
            " Resultado de multiplicacion " + this.multipliacion +
            " Resultado de divicion " + this.divicion;
    };
    return calculadora;
}());
var instancia = new calculadora(10, 5);
console.log(instancia.calculos());

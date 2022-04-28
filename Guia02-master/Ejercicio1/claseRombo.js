var Rombo = /** @class */ (function () {
    function Rombo(DiagonalV, DiagonalH) {
        this.DiagonalVertical = DiagonalV;
        this.DiagonalHorizontal = DiagonalH;
    }
    Rombo.prototype.area = function () {
        return "El area es:" + this.DiagonalHorizontal * this.DiagonalVertical;
    };
    return Rombo;
}());
var miRombo = new Rombo(10, 10);
console.log(miRombo.area());

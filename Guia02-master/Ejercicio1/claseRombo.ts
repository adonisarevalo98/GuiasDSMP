
      class Rombo{
        DiagonalVertical:number;
        DiagonalHorizontal:number;
        
        constructor(DiagonalV, DiagonalH){
        this.DiagonalVertical = DiagonalV;
        this.DiagonalHorizontal = DiagonalH;
        }
       area() {
            return "El area es:" + this.DiagonalHorizontal * this.DiagonalVertical;
          }
         
         }
        const miRombo = new Rombo (10, 10);
            
        console.log(miRombo.area());

    
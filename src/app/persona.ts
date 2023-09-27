export class Persona {

    constructor(
        public nombre: string,
        public apellido: string,
        public edad: number,
        public peso: number,
        public altura: number,
    ){}

    calcularIMC(): any {
        let resultado = Math.round(this.peso / ((this.altura) * (this.altura)));
        if(resultado < 0){
            return 'no found';
        }else if(resultado < 18){
            return 'bajo';
        }else if(resultado >= 18 && resultado <= 24){
            return 'normal';
        }else if(resultado >= 25 && resultado <= 26){
            return 'sobrepeso';
        }else if(resultado >= 27 && resultado <= 29){
            return 'sobrepeso nivel 1';
        }else if(resultado >= 30 && resultado <= 39){
            return 'sobrepeso nivel 2';
        }else if(resultado >= 40){
            return 'sobrepeso nivel 3';
        }
    }
}

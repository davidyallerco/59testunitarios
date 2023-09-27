import { Persona } from './persona';

describe('Test para Persona', () => {

  let persona: any;

  //Arrange
  beforeEach(()=>{
    persona = new Persona(
      'David',
      'Yallerco',
      23,
      40,
      1.65
    );
  });
 
  describe('Test para data', ()=>{
    it('atributos', ()=>{
      expect(persona.nombre).toEqual('David');
      expect(persona.apellido).toEqual('Yallerco');
      expect(persona.edad).toEqual(23);
      expect(persona.peso).toEqual(40);
      expect(persona.altura).toEqual(1.65);
    });
  });

  describe('Test para calcular el IMC', ()=>{

    it('Deberia retornar un string: bajo',()=>{
      persona.peso = 40;
      expect(persona.calcularIMC()).toEqual('bajo');
    });

    it('Deberia retornar un string: normal',()=>{
      persona.peso = 58;
      expect(persona.calcularIMC()).toEqual('normal');
    });

    it('Deberia retornar un string: sobrepeso',()=>{
      persona.peso = 68;
      expect(persona.calcularIMC()).toEqual('sobrepeso');
    });

    it('Deberia retornar un string: sobrepeso nivel 1',()=>{
      persona.peso = 75;
      expect(persona.calcularIMC()).toEqual('sobrepeso nivel 1');
    });

    it('Deberia retornar un string: sobrepeso nivel 2',()=>{
      persona.peso = 90;
      expect(persona.calcularIMC()).toEqual('sobrepeso nivel 2');
    });

    it('Deberia retornar un string: sobrepeso nivel 3',()=>{
      persona.peso = 120;
      expect(persona.calcularIMC()).toEqual('sobrepeso nivel 3');
    });

    it('Deberia retornar un string: no found',()=>{
      persona.peso = -48;
      expect(persona.calcularIMC()).toEqual('no found');
    });


  });

});


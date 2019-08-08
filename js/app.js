var unString = 'Variable string';

var unArray = ['Array 1', 'Array 2', 'Array 3'];

var unBool = true;

console.log(unString);
console.log(unArray);
console.log(unBool);

var arrayImpares = [];

// for (var i = 1; i < 137; i + 2) {
//   arrayImpares[i]= i;
// };

// console.log(arrayImpares);

var ironMan = {
  nombre: 'Iron Man',
  equipo: 'Avengers',
  poderes: ['Volar', 'Lanzar misiles', 'Disparar láser'],
  energia: 100,
  getPoder: function(num){
    return ironMan.poderes[num];
  }
}

var hulk = {
  nombre: 'Hulk',
  equipo: 'Avengers',
  poderes: ['Aplastar', 'Gritar', 'Golpear'],
  energia: 100,
  getPoder: function(num){
    return hulk.poderes[num];
  }
}

var numPoder1 = Math.floor(Math.random() * 3);

console.log(ironMan.getPoder(numPoder1));

if (ironMan.getPoder(numPoder1) == 'Volar') {
  ironMan.energia = ironMan.energia - 10;
} else if (ironMan.getPoder(numPoder1) == 'Lanzar misiles') {
  ironMan.energia = ironMan.energia - 15;
} else if (ironMan.getPoder(numPoder1) == 'Disparar láser') {
  ironMan.energia = ironMan.energia - 25;
}

console.log(ironMan.energia);

var numPoder2 = Math.floor(Math.random() * 3);

console.log(hulk.getPoder(numPoder2));

if (hulk.getPoder(numPoder1) == 'Aplastar') {
  hulk.energia = hulk.energia - 5;
} else if (hulk.getPoder(numPoder1) == 'Gritar') {
  hulk.energia = hulk.energia - 25;
} else if (hulk.getPoder(numPoder1) == 'Golpear') {
  hulk.energia = hulk.energia - 10;
}

console.log(hulk.energia);

var misDatos = {
  nombre: 'Alejandro',
  apellido: "D'Aquila",
  dni: 34577020,
  comidaFavorita: 'asado',
  edad: 30,
  saludar: function(){
    return 'Hola, mi nombre es ' + this.nombre + ' ' + this.apellido + ' y tengo ' + this.edad + ' años';
  }
}

for (var objeto in misDatos) {
  console.log(objeto + ': ' + misDatos[objeto]);
}

console.log(misDatos.saludar());

var botonDePrueba = document.getElementById('miBoton');

botonDePrueba.onclick = function(){alert("Testeando el click")};

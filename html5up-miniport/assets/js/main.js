var idTitular = document.getElementById('titular');

idTitular.style.display = 'none';

var imgLechuza = document.querySelector('span');

imgLechuza.style.filter = 'grayscale(100%)';

var copyright = document.getElementById('copyright');


var h2 = document.querySelectorAll('h2');

for(i = 0; i < h2.length; i++){
    h2[i].style.color = 'red';
  }

  var icon = document.querySelectorAll('.icon');

  for(i = 0; i < icon.length; i++){
      icon[i].style.color = 'green';
    }

// copyright = {
//   attributes: function(){
//     return this.getAttribute();
//   }
// }
//
// console.log(copyright.attributes());

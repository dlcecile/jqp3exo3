$(function(){

  var minNumber=0;
  var maxNumber=100;
  var randomNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // la fonction magique
// // alert(randomNumber) le random marche
var essais=0;
var msg='Le nombre est compris entre 0 est 100';

  $('#myButton').click(function(){
  var value = $('#texte').val();
    essais++;
    if (value > randomNumber){
      var msg='moins';
      alert(msg)
    }
    else if(value  < randomNumber){
      var msg='plus';
      alert(msg)
    }
    else {
      alert('Félicitation tu as gagné en' + essais +'essais!!!')
    };


  });
});

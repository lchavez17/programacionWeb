function validar(){

  //var input = document.getElementById('id');
  var input = $('#nombre');

  console.log(input);

  if(input.val() != ''){
    console.log(input.val());
  }else{
    console.log('Vacío');
    //input.style.border = '1px solid red';
    input.css('border', '1px solid red');
  }

}

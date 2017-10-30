$(document).ready(function(){
  $('.btn-agregar').on('click', agregar);
  $('.btn-verificar').on('click', verificar);
  // $('.btn-danger').on('click', eliminar);
  $('.btn-funcionExtra').on('click', funcionExtra);

});
$( function() {
  $( ".datepicker" ).datepicker();
});

var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;
var numero = 0;
var url ='';
// var fecha = '';

function agregar(){

var nombrePromocion = $('#nombrePromocion');
 var descripcion = $('#descripcion');
  var fecha = $('#fecha');
  url = $('#url');
// fecha.val().trim()
console.log(nombrePromocion);
 if ($.trim(nombrePromocion.val()) != '' && descripcion.val().trim() != '' && url.val().trim() != ''){
   var html = '';

  //  edadPromedio+=parseInt(edad.val());
numero=parseFloat($('#tbody h3').length);
 //  var numero = parseFloat($('#tbody tr').length);
console.log(parseFloat($('#tbody h3').length));
    // html += '<tr>';
     html+= '<ul class="Ules">' +"Fecha agregado:"+ output + '</u>';
     html+= '<h3> <ul class="Ules">' +"Promocion:"+ (numero+1) + '</ul></h3>';
     html += '<ul class="Ules">' + nombrePromocion.val() + '</ul>';
     html += '<ul class="Ules">' + descripcion.val() + '</ul>';
     html += '<b><ul class="fechaIng Ules">' +"Fecha de expedición::"+ fecha.val() + '</ul></b>';
     html += '<ul class="Ules">' + url.val() + '</ul>';
//     html += '<td id="edades">' + edad.val() + '</td>'; //intente por id tomar los valores para sumarlos y dividirlos sobre el numero para tener el promedio, tengo todo el dia con esto.
html += '<td class="Ules">';
  html += '<a id="btnVermas" class="btn btn-primary" href='+'http://'+url.val()+'>Ver mas</a>';
html += '</td>';
     html += '<td class="Ules">';
       html += '<a  id="btnBorrar" class="btn btn-danger">Borrar</a>';
     html += '</td>';
    // html += '</tr>';
 $('#tbody').append(html);

 $(document).ready(function(){
 $('.btn-danger').on('click', eliminar);
 // $('#btnVermas').on('click', verMas);
});
// //  edadPromedio=parseFloat($('#edades').val());
//    html1 += '<tr>';
//      html1 += '<td>'+"Promedio:"+ edadPromedio/numero + '</td>';
//      html1 += '</tr>'

   $(nombrePromocion).val('');
   $(descripcion).val('');
   $(fecha).val('');
   $(url).val('');

   $(nombrePromocion).focus();
 }else {
   $(".form-control").each( function() {
  alert("Campos vacios!!");
  });
 }
}

function verificar(){
  // var nombrePromocion = $('#nombrePromocion');
  //  var descripcion = $('#descripcion');
  //  var fecha = $('#fecha');
  //  var url = $('#url');
  var fecha = $('.fechaIng');

  console.log(fecha.val());
  $(".fechaIng").each( function() {

   if (fecha.val() >= output){
    alert("Todo esta bien");
   }else {
    alert("no todo esta bien");
    }
  });
}
function eliminar(){
//   console.log("hola cullilo");
//   $(document).ready(function() {
   $(".btn-danger").click(function(event) {
     $(".Ules").remove();
   });
// });
  // var numeroPromo = 0;
  //   alertify.confirm("")
  //   $(this).parent().parent().remove();
  //   numero--;
  //
  //   $('.nomPromo').each(function(){
  //       numeroPromo++;
  //       $(this).html('Promocion ' + numeroPromo);
  //   });
  //   numeroPromo = 0;
  //   $('span').each(function(){
  //       numeroPromo++;
  //       $(this).html('mi descripcion ' + numeroPromo);
  //   });
 //   document.getElementsByTagName("table")[0].setAttribute("id","tableid");
 // document.getElementById("tableid").deleteRow(i);
 // //edadPromedio=edadPromedio-document.getElementById("edad");
// numero--;
 // // edadPromedio+=$('#edades').val();
 // //
 // // html1 += '<tr>';
 // // html1 += '<td>'+"Promedio:"+ edadPromedio/numero + '</td>';
 // // html1 += '</tr>'
 // // $('#tbodyProme').append(html1);

}
function verMas(){
  console.log("ddddd");
}

function funcionExtra(){
 console.log("la verdad no me ajusto el tiempo profe tenia pensado hacer algo alguna conexion a rootsecurity.team");
}

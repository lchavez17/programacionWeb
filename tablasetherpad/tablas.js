$(document).ready(function(){
  $('.btn-agregar').on('click', agregar);
  $('.btn-danger').on('click', eliminar);
});
var edadPromedio=0;
var numero = 0;

function agregar(){
  var nombre = $('#nombre');
  var apellido = $('#apellido');
  var ciudad = $('#ciudad');
  var edad = $('#edad');
  var html1 = '';

  if ($.trim(nombre.val()) != '' && apellido.val().trim() != '' && ciudad.val().trim() != '' && edad.val().trim() != ''){
    var html = '';
  //  var html1 = '';
    edadPromedio+=parseInt(edad.val());
numero=parseFloat($('#tbody tr').length);
  //  var numero = parseFloat($('#tbody tr').length);
console.log(parseFloat($('#tbody tr').length));
    html += '<tr>';
      html += '<td>' + numero + '</td>';
      html += '<td>' + nombre.val() + '</td>';
      html += '<td>' + apellido.val() + '</td>';
      html += '<td>' + ciudad.val() + '</td>';
      html += '<td id="edades">' + edad.val() + '</td>'; //intente por id tomar los valores para sumarlos y dividirlos sobre el numero para tener el promedio, tengo todo el dia con esto.
      html += '<td>';
        html += '<a onclick="eliminar();" id="btnLinks" class="btn btn-danger">Borrar</a>';
      html += '</td>';
    html += '</tr>';
    html1 += '<br>';
  $('#tbody').append(html);
//  edadPromedio=parseFloat($('#edades').val());
    html1 += '<tr>';
      html1 += '<td>'+"Promedio:"+ edadPromedio/numero + '</td>';
      html1 += '</tr>'


    $('#tbodyProme').append(html1);

    $(nombre).val('');
    $(apellido).val('');
    $(ciudad).val('');
    $(edad).val('');

    $(nombre).focus();
  }
}

function eliminar(i){
    document.getElementsByTagName("table")[0].setAttribute("id","tableid");
    document.getElementById("tableid").deleteRow(i);
    edadPromedio=edadPromedio-document.getElementById("edad");
    numero--;
    // edadPromedio+=$('#edades').val();
    //
    // html1 += '<tr>';
    // html1 += '<td>'+"Promedio:"+ edadPromedio/numero + '</td>';
    // html1 += '</tr>'
    // $('#tbodyProme').append(html1);

}

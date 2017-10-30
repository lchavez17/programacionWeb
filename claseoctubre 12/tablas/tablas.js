    var  numero = 1;
    function agregar(){
      var nombre = $('#nombre');
      var apellido =$('#apellido');
      var ciudad = $('#ciudad');
      console.log(nombre.val());

      if (nombre.val().trim() != '' && apellido.val().trim() != '' && ciudad.val().trim() != ''){
        var html = '';
        numero++;
        console.log(numero);

        html += '<tr>';
          html += '<td class = "numfk">' + numero + '</td>';
          html += '<td style="color: red;" class="text-center">' + nombre.val() + '</td>';
          html += '<td>' + apellido.val() + '</td>';
          html += '<td>' + ciudad.val() + '</td>';
          html += '<td>';
            html += '<a href="javascript: void(0);" style="color: red;" onclick="eliminar(this);" class="">Borrar</a>';
            // 'This' Manda elemento html en el que se ejecuta
          html += '</td>';
        html += '</tr>';
console.log(html);
        document.getElementById('tbody').innerHTML += html;//no pude solucionar esto en cambiar el inner
        $('#nombre').val('');
        $('#apellido').val('');
        $('#ciudad').val('');
      //  $('#nombre').focus();
      }

    }

    function eliminar(t){
        // var td = t.parentNode;
        // var tr = td.parentNode;
        // var table = tr.parentNode;
        var td = $(this.parentNode).index();
        var tr = $(this.parentNode).index();
        var table = $(this.parentNode).index();

         $("#tr").remove();

        numero--;

        for(var i = 0; i <= numero; i++){
            $('.numfk').html( i + 2);
        }
    }

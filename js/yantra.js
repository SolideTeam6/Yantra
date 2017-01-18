// JavaScript source code
$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "fade"
    });

    $('#dia_r').datepicker({
        showButtonPanel: true,
        beforeShow: function () {
            $(".ui-datepicker").css('font-size', 12)
        }
    });


    $('#hora_r').timepicker();

});

wow = new WOW(
                  {
                      boxClass: 'wow',      // default
                      animateClass: 'animated', // default
                      offset: 0,          // default
                      mobile: true,       // default
                      live: true        // default
                  }
                )
wow.init();


$(function () {
    $('.show_menu').click(function () {
        $('.menu').fadeIn();
        $('.show_menu').fadeOut();
        $('.hide_menu').fadeIn();
    });
    $('.hide_menu').click(function () {
        $('.menu').fadeOut();
        $('.show_menu').fadeIn();
        $('.hide_menu').fadeOut();
    });
});


$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip();



    $('#submit_CONTACTO').click(function () {

        var name = $('#name_r').val();
        var message = $('textarea#mensaje_r').val();
        var email = $('#mail_r').val();
        var dia = $('#dia_r').val();
        var hora = $('#hora_r').val();
        var numero_personas = $('#persons_number_r').val();
        var telefono = $('#telefono_r').val();
        //  console.log('nombre:' + name + ' message:' + message + ' email:' + email + ' dia:' + dia + ' hora:' + hora + ' numero_personas:' + numero_personas + ' telefono:' + telefono);
        if (!name || !message || !email || !dia || !hora || !numero_personas || !telefono)
            toastr.info('Existen campos vacios favor de llenarlos para continuar.');
        else {
            $.ajax({
                url: 'reservacion.php',
                type: 'POST',
                data: {
                    nombre: name,
                    mensaje: message,
                    email: email,
                    dia: dia,
                    hora: hora,
                    numero_personas: numero_personas,
                    telefono: telefono
                },
                success: function (data) {
                    toastr.success('Reservacion enviada con éxito, en un momento te antederemos.');
                    $('#name_r').val('');
                    $('textarea#mensaje_r').val('');
                    $('#mail_r').val('');
                    $('#dia_r').val('');
                    $('#hora_r').val('');
                    $('#persons_number_r').val('');
                    $('#telefono_r').val('');
                }
            });
        }

    });

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    $('#persons_number_r').keypress(function (key) {
        if ((event.keyCode < 48 || event.keyCode > 57))
            return false;
    });

    $('#telefono_r').keypress(function (key) {
        if ((event.keyCode < 48 || event.keyCode > 57))
            return false;
    });

    $('#dia_r').keypress(function (key) {
        if ((event.keyCode != 08))
            return false;
    });

    $('#hora_r').keypress(function (key) {
        if ((event.keyCode != 08))
            return false;
    });


    $("#name_r").keypress(function (key) {
        if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
            && (key.charCode < 65 || key.charCode > 90) //letras minusculas
            && (key.charCode != 241) //ñ
             && (key.charCode != 209) //Ñ
             && (key.charCode != 32) //espacio
             && (key.charCode != 225) //á
             && (key.charCode != 233) //é
             && (key.charCode != 237) //í
             && (key.charCode != 243) //ó
             && (key.charCode != 250) //ú
             && (key.charCode != 193) //Á
             && (key.charCode != 201) //É
             && (key.charCode != 205) //Í
             && (key.charCode != 211) //Ó
             && (key.charCode != 218) //Ú
            //&& (key.charCode != 45) //-

            )
            return false;
    });

    $("#mail_r").keypress(function (key) {
        if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
            && (key.charCode < 65 || key.charCode > 90) //letras minusculas
            && (event.keyCode < 48 || event.keyCode > 57)
            && (key.charCode != 95) //_
             && (key.charCode != 46) //.
            && (key.charCode != 45) //-
            && (key.charCode != 64) //@

            )
            return false;
    });


    $("#name_c").keypress(function (key) {
        if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
            && (key.charCode < 65 || key.charCode > 90) //letras minusculas
            && (key.charCode != 241) //ñ
             && (key.charCode != 209) //Ñ
             && (key.charCode != 32) //espacio
             && (key.charCode != 225) //á
             && (key.charCode != 233) //é
             && (key.charCode != 237) //í
             && (key.charCode != 243) //ó
             && (key.charCode != 250) //ú
             && (key.charCode != 193) //Á
             && (key.charCode != 201) //É
             && (key.charCode != 205) //Í
             && (key.charCode != 211) //Ó
             && (key.charCode != 218) //Ú
            //&& (key.charCode != 45) //-

            )
            return false;
    });

    $("#mail_c").keypress(function (key) {
        if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
            && (key.charCode < 65 || key.charCode > 90) //letras minusculas
            && (event.keyCode < 48 || event.keyCode > 57)
            && (key.charCode != 95) //_
             && (key.charCode != 46) //.
            && (key.charCode != 45) //-
            && (key.charCode != 64) //@

            )
            return false;
    });

    $('#subject_c').keypress(function (key) {
        if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
            && (key.charCode < 65 || key.charCode > 90) //letras minusculas
            && (event.keyCode < 48 || event.keyCode > 57)//numeros
            && (key.charCode != 32) //espacio
            && (key.charCode != 95) //_
             && (key.charCode != 46) //.
            && (key.charCode != 45) //-
            && (key.charCode != 225) //á
             && (key.charCode != 233) //é
             && (key.charCode != 237) //í
             && (key.charCode != 243) //ó
             && (key.charCode != 250) //ú
             && (key.charCode != 193) //Á
             && (key.charCode != 201) //É
             && (key.charCode != 205) //Í
             && (key.charCode != 211) //Ó
             && (key.charCode != 218) //Ú

            )
            return false;
    });

    $('#submit-message2').click(function () {

        var name = $('#name_c').val();
        var email = $('#mail_c').val();
        var mensaje = $('textarea#comment_c').val();
        var subject = $('#subject_c').val();

        if (!name || !mensaje || !email || !subject)
            toastr.info('Existen campos vacios favor de llenarlos para continuar.');
        else {
            if (isEmail(email.trim())) {
                $.ajax({
                    url: 'mensaje.php',
                    type: 'POST',
                    data: {
                        nombre: name.toUpperCase(),
                        mensaje: mensaje.toUpperCase(),
                        email: email.toUpperCase(),
                        asunto: subject.toUpperCase()
                    },
                    success: function (data) {
                        toastr.success('Mensaje enviado con éxito, en un momento te antederemos.');
                        $('#name_c').val('');
                        $('#mail_c').val('');
                        $('textarea#comment_c').val('');
                        $('#subject_c').val('');
                    }
                });
            }
            else
                toastr.info('Favor de agregar un correo valido para continuar.');
        }

    });

    //var gmapDiv = $("#google-map");
    //var gmapMarker = gmapDiv.attr("data-address");

    //gmapDiv.gmap3({
    //    zoom: 16,
    //    address: gmapMarker,
    //    oomControl: true,
    //    navigationControl: true,
    //    scrollwheel: false,
    //    styles: [
    //      {
    //          "featureType": "all",
    //          "elementType": "all",
    //          "stylers": [
    //            { "saturation": "-70" }
    //          ]
    //      }]
    //})
    //.marker({
    //    address: gmapMarker,
    //    icon: "img/map_pin.png"
    //})
    //.infowindow({
    //    content: "Periférico de la Juventud 6902, Cumbres III Etapa, Chihuahua"
    //})
    //.then(function (infowindow) {
    //    var map = this.get(0);
    //    var marker = this.get(1);
    //    marker.addListener('click', function () {
    //        infowindow.open(map, marker);
    //    });
    //});
});
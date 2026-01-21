
$( document ).ready(function() {
    var form    =   $("#id_name_value").closest("form");


    console.log( "ready!" );


    //fullname
    $("#id_name_value").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_name_value',
        name: 'name[value]',
        value: $("#id_name_value").val()
    }).appendTo(form);

});
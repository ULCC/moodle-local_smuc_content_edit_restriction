
$( document ).ready(function() {
    var form    =   $("#id_name").closest("form");


    console.log( "ready!" );


    //fullname
    $("#id_name").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_name',
        name: 'name[value]',
        value: $("#id_name").val()
    }).appendTo(form);

});
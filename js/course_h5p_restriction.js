
$( document ).ready(function() {



    console.log('Course H5P restrictions');

console.log(document.getElementById("field-extratitle--1"));



    //this code deactivates the drag and drop move functionality in each of the section
    setTimeout(function()
    {

        console.log('Course H5P restrictions timer');
        console.log(document.getElementById("field-extratitle--1"));
        var titlefield  =   document.getElementById("field-extratitle--1");
console.log($);
        console.log($('#field-extratitle--1'));

        //shortname
        $(titlefield).prop('disabled', true);

        $('<input>').attr({
            type: 'hidden',
            id: 'field-extratitle--1',
            name: 'field-extratitle--1',
            value: $("#field-extratitle--1").val()
        }).insertAfter(titlefield);


    }, 5000);




});


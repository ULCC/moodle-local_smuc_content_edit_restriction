
$( document ).ready(function() {

    console.log("Course sidebar restrictions");



    //this code deactivates the drag and drop move functionality in each of the section
    setTimeout(function()
    {
        console.log('New 1 Course sidebar restrictions loaded');

        $('#courseindexcollapse0').children('.unlist').children('.courseindex-item').prop('style', 'pointer-events: none');
        $('#courseindexcollapse1').children('.unlist').children('.courseindex-item').prop('style', 'pointer-events: none');
        $('#courseindexsection1').prop('draggable', false);
        $('#courseindexsection1').prop('aria-busy', true);

         $('#courseindexsection1').prop('style', 'pointer-events: none');
     //   $('#courseindexcollapse1').children('.unlist').children('.courseindex-item').prop('style', 'pointer-events: none');

        $('#courseindexsection2').prop('style', 'pointer-events: none');
        $('#courseindexcollapse2').children('.unlist').children('.courseindex-item').prop('style', 'pointer-events: none');

        $('#courseindexsection3').prop('style', 'pointer-events: none');
        $('#courseindexcollapse3').children('.unlist').children('.courseindex-item').prop('style', 'pointer-events: none');




        $('#courseindexcollapse0').children('.unlist').children('.courseindex-item').each(function(i,ele) {
            $( ele ).removeClass('draggable');
            $( ele ).removeClass('dropready');
            $(ele).prop('draggable', false);
            $(ele).prop('aria-busy', true);
            $(ele).prop('style', 'pointer-events: none');
            console.log(ele);
        });

        $('#courseindexcollapse1').children('.unlist').children('.courseindex-item').each(function(i,ele) {
            $( ele ).removeClass('draggable');
            $( ele ).removeClass('dropready');
            $(ele).prop('draggable', false);
            $(ele).prop('aria-busy', true);
            $(ele).prop('style', 'pointer-events: none');
            console.log(ele);
        });

        $('#courseindexcollapse2').children('.unlist').children('.courseindex-item').each(function(i,ele) {
            $( ele ).removeClass('draggable');
            $( ele ).removeClass('dropready');
            $(ele).prop('draggable', false);
            $(ele).prop('aria-busy', true);
            $(ele).prop('style', 'pointer-events: none');
            console.log(ele);
        });

        $('#courseindexcollapse3').children('.unlist').children('.courseindex-item').each(function(i,ele) {
            $( ele ).removeClass('draggable');
            $( ele ).removeClass('dropready');
            $(ele).prop('draggable', false);
            $(ele).prop('aria-busy', true);
            $(ele).prop('style', 'pointer-events: none');
            console.log(ele);
        });

        $('#courseindexsection0').removeClass('draggable');
        $('#courseindexsection0').removeClass('dropready');

        $('#courseindexsection1').removeClass('draggable');
        $('#courseindexsection1').removeClass('dropready');

        $('#courseindexsection2').removeClass('draggable');
        $('#courseindexsection2').removeClass('dropready');

        $('#courseindexsection3').removeClass('draggable');
        $('#courseindexsection3').removeClass('dropready');


    }, 5000);




});


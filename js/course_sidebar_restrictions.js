
$( document ).ready(function() {

    console.log("Course sidebar restrictions");



    //this code deactivates the drag and drop move functionality in each of the section
    setTimeout(function()
    {
        console.log('Course sidebar restrictions loaded');

        $('#courseindexcollapse0').children('.unlist').children('.courseindex-item').prop('style', 'pointer-events: none');

        $('#courseindexsection1').prop('style', 'pointer-events: none');
        $('#courseindexcollapse1').children('.unlist').children('.courseindex-item').prop('style', 'pointer-events: none');

        $('#courseindexsection2').prop('style', 'pointer-events: none');
        $('#courseindexcollapse2').children('.unlist').children('.courseindex-item').prop('style', 'pointer-events: none');

        $('#courseindexsection3').prop('style', 'pointer-events: none');
        $('#courseindexcollapse3').children('.unlist').children('.courseindex-item').prop('style', 'pointer-events: none');
      //  $('#courseindexsection1').prop('draggable', false);
      //  $('#courseindexsection1').prop('aria-busy', true);
      //  $('#courseindexsection1').removeClass('draggable');
        $('#courseindexsection1').removeClass('dropready');
        $('#courseindexsection2').removeClass('dropready');
        $('#courseindexsection3').removeClass('dropready');

    }, 2000);




});


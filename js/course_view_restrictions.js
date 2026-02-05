
$( document ).ready(function() {

    console.log("Course view restrictions new");

//these functions deactive the menus in each of the sections
    sectionzero();

    sectionone();

    sectiontwo();

    sectionthree();

    //this code deactivates the drag and drop move functionality in each of the sections
    setTimeout(function()
    {
        console.log('Move restirction loaded');


        //section 0
        //stop header from being draggable
        $('#section-0').find('.course-section-header').prop('draggable', false);

        //stop draggable first section
        $('#section-0').children('.content').find('ul.section').children('li.modtype_label').prop('draggable', false);
        $('#section-0').children('.content').find('ul.section').children('li.modtype_label').prop('style', 'pointer-events: none');


        //section 1
        //stop the rsource header from being dragged
        $('#section-1').find('.course-section-header').prop('draggable', false);
        $('#section-1').children('.course-section-header').prop('style', 'pointer-events: none');

        //stop draggable first section
        $('#section-1').children('.content').find('ul.section').children('li.modtype_label').prop('draggable', false);
        $('#section-1').children('.content').find('ul.section').children('li.modtype_label').prop('style', 'pointer-events: none');
        $('#section-1').find('.course-section-header').removeClass( "draggable" );


        //section 2

        //stop header from being draggable
        $('#section-2').find('.course-section-header').prop('draggable', false);
        $('#section-2').children('.course-section-header').prop('style', 'pointer-events: none');
        $('#section-2').find('.course-section-header').removeClass( "draggable" );


        //section 3

        //stop header from being draggable
        $('#section-3').find('.course-section-header').prop('draggable', false);

        $('#section-3').find('.course-section-header').removeClass( "draggable" );

        //stop draggable first section
        $('#section-3').children('.content').find('ul.section').children('li.modtype_label').prop('draggable', false);
        $('#section-3').children('.content').find('ul.section').children('li.modtype_label').prop('style', 'pointer-events: none');


    }, 2000);




});


function sectionzero()       {

    console.log("Section 0 restrictions");

    //$("[data-value='About Your Module']").children('.quickeditlink').detach();
    //$("[data-value='About Your Module']").children('.quickeditlink').off('click');
    //replace the link in the header with just the html text
    $("[data-value='About Your Module']").html('About Your Module');
    $("[data-value='About Your Module ']").html('About Your Module');
    //$('#section-0').children('.course-section-header').find('.dropdown-menu-right').detach();

    //remove section header menu dots
    //$('#section-0').children('.course-section-header').find('.action-menu').detach();

    //remove_hvp_menu_items($('#section-0'));

 }





function sectionone()       {

    console.log("Section 1 restrictions new");
   // $("[data-value='Your Resource List']").children('.quickeditlink').off('click');
   // $("[data-value='Your Resource List']").children('.quickeditlink').detach();
    //replace the link in the header with just the html text
    $("[data-value='Your Resource List']").html('Your Resource List');

    //remove the move memnu option
    $('#section-1').find('.dropdown-menu-right').children('.move').detach();


    //remove section header menu
    //$('#section-1').children('.course-section-header').find('.dropdown-menu-right').detach();

    //remove section header menu dots
   // $('#section-1').children('.course-section-header').find('.action-menu').detach();



}


function sectiontwo()       {

    console.log("Section 2 restrictions");
 //   $("[data-value='Assessment Guidance']").children('.quickeditlink').off('click');
   // $("[data-value='Assessment Guidance']").children('.quickeditlink').detach();
    $("[data-value='Assessment Guidance']").html('Assessment Guidance');
    //remove the move memnu option

    $('#section-2').find('.dropdown-menu-right').children('.move').detach();
    //remove edit title link
  //  $('#section-2').children('.content').find('ul.section').children('li.modtype_hvp').find('.quickeditlink').detach();


    //remove_hvp_menu_items($('#section-2'));

}




function sectionthree()       {

    console.log("Section 3 restrictions");
  //  $("[data-value='Assessment Guidance']").children('.quickeditlink').off('click');
  //  $("[data-value='Assessment Guidance']").children('.quickeditlink').detach();
    $("[data-value='Submissions, Feedback, Results']").html('Submissions, Feedback, Results');
    //remove the move memnu option
    $('#section-3').find('.dropdown-menu-right').children('.move').detach();

    //remove section header menu
   // $('#section-3').children('.course-section-header').find('.dropdown-menu-right').detach();

    //remove section header menu dots
    //$('#section-3').children('.course-section-header').find('.action-menu').detach();


   // remove_hvp_menu_items($('#section-3'));

}


function remove_hvp_menu_items(element)    {

    //remove first section hvp duplicate
    $(element).children('.content').find('ul.section').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_duplicate').detach();

    //remove first section hvp  move right
    $(element).children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_makeunavailable').detach();


    //remove first section hvp  move right
    $(element).children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_moveright').detach();

    //remove first section hvp  hide/show
    $(element).children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_hide').detach();
    $(element).children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_show').detach();


    //remove first section hvp  move
    $(element).children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_movecm').detach();

    //remove first section hvp delete
    $(element).children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_delete').detach();

    //remove first section hvp delete
    $(element).children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_assign').detach();


}
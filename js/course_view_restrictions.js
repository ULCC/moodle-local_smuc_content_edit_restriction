
$( document ).ready(function() {

    console.log("Course view restrictions");

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
        //stop draggable first section
        $('#section-0').children('.content').find('ul.section').children('li.modtype_label').prop('draggable', false);
        $('#section-0').children('.content').find('ul.section').children('li.modtype_label').prop('style', 'pointer-events: none');


        //stop first section h5p from being dragged
        $('#section-0').children('.content').find('ul.section ').children('li.modtype_hvp').prop('draggable', false);

        $('#section-0').children('.content').find('ul.section ').children('li.modtype_hvp').prop('style', 'pointer-events: none');

        $('#section-0').children('.content').find('ul.section ').children('li.modtype_hvp').find('.action-menu').prop('style', 'pointer-events: all');


        //section 1
        //stop the rsource header from being dragged
        $('#section-1').children('.course-section-header').prop('draggable', false);
        $('#section-1').children('.course-section-header').prop('style', 'pointer-events: none');

        //stop draggable first section
        $('#section-1').children('.content').find('ul.section').children('li.modtype_label').prop('draggable', false);
        $('#section-1').children('.content').find('ul.section').children('li.modtype_label').prop('style', 'pointer-events: none');

        //stop draggable first section
        $('#section-1').children('.content').find('ul.section').children('li.modtype_lti').prop('draggable', false);
        $('#section-1').children('.content').find('ul.section').children('li.modtype_lti').prop('style', 'pointer-events: none');

        //section 2

        //stop header from being draggable
        $('#section-2').children('.course-section-header').prop('draggable', false);
        $('#section-2').children('.course-section-header').prop('style', 'pointer-events: none');

        $('#section-2').children('.content').find('ul.section ').children('li.modtype_hvp').prop('draggable', false);
        $('#section-2').children('.content').find('ul.section ').children('li.modtype_hvp').prop('style', 'pointer-events: none');
        $('#section-2').children('.content').find('ul.section ').children('li.modtype_hvp').find('.action-menu').prop('style', 'pointer-events: all');


        //section 3

        //stop draggable first section
        $('#section-3').children('.content').find('ul.section').children('li.modtype_label').prop('draggable', false);
        $('#section-3').children('.content').find('ul.section').children('li.modtype_label').prop('style', 'pointer-events: none');

        //stop first section h5p from being dragged
        $('#section-3').children('.content').find('ul.section ').children('li.modtype_hvp').prop('draggable', false);
        $('#section-3').children('.content').find('ul.section ').children('li.modtype_hvp').prop('style', 'pointer-events: none');
        $('#section-3').children('.content').find('ul.section ').children('li.modtype_hvp').find('.action-menu').prop('style', 'pointer-events: all');

    }, 2000);




});


function sectionzero()       {

    console.log("Section 0 restrictions");

    $("[data-value='About Your Module']").children('.quickeditlink').detach();

    $('#section-0').children('.course-section-header').find('.dropdown-menu-right').detach();

    //remove section header menu dots
    $('#section-0').children('.course-section-header').find('.action-menu').detach();


    //remove H5p title quick edit
    $('#section-0').children('.content').find('ul.section ').children('li.modtype_hvp').find('.media-body').find('.inplaceeditable').find('.quickeditlink').detach();


    $('#section-0').children('.content').find('ul.section ').children('li.modtype_hvp').children('.activityname').children('.editing_hide').detach();

    //remove label menu dots
    $('#section-0').children('.content').find('ul.section').children('li.modtype_label').find('.action-menu').detach();

    remove_hvp_menu_items($('#section-0'));

 }





function sectionone()       {

    console.log("Section 1 restrictions");

    $("[data-value='Your Resource List']").children('.quickeditlink').detach();


    //remove section header menu
    $('#section-1').children('.course-section-header').find('.dropdown-menu-right').detach();

    //remove section header menu dots
    $('#section-1').children('.course-section-header').find('.action-menu').detach();


    //remove first section edit update
    $('#section-1').children('.content').find('ul.section').children('li.modtype_label').find('.dropdown-menu-right').detach();

    //remove label menu dots
    $('#section-1').children('.content').find('ul.section').children('li.modtype_label').find('.action-menu').detach();


    //remove edit leganto title link
    $('#section-1').children('.content').find('ul.section').children('li.modtype_lti').find('.quickeditlink').detach();

    // remove Leganto resource list menu
    $('#section-1').children('.content').find('ul.section ').children('li.modtype_lti ').find('.dropdown-menu-right').detach();

    //remove label menu dots
    $('#section-1').children('.content').find('ul.section').children('li.modtype_lti').find('.action-menu').detach();


}


function sectiontwo()       {

    console.log("Section 2 restrictions");
    $("[data-value='Assessment Guidance']").children('.quickeditlink').off('click');
    $("[data-value='Assessment Guidance']").children('.quickeditlink').detach();

    //remove edit title link
    $('#section-2').children('.content').find('ul.section').children('li.modtype_hvp').find('.quickeditlink').detach();


    //remove section header menu
    $('#section-2').children('.course-section-header').find('.dropdown-menu-right').detach();

    //remove section header menu dots
    $('#section-2').children('.course-section-header').find('.action-menu').detach();


    //remove first section hvp duplicate
    $('#section-2').children('.content').find('ul.section').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_duplicate').detach();

    //remove first section hvp  move right
    $('#section-2').children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_makeunavailable').detach();


    //remove first section hvp  move right
    $('#section-2').children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_moveright').detach();

    //remove first section hvp  hide/show
    $('#section-2').children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_hide').detach();
    $('#section-2').children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_show').detach();


    //remove first section hvp  move
    $('#section-2').children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_movecm').detach();

    //remove first section hvp delete
    $('#section-2').children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_delete').detach();

    remove_hvp_menu_items($('#section-2'));

}




function sectionthree()       {

    console.log("Section 3 restrictions");

    $("[data-value='Submissions, Feedback, Results']").children('.quickeditlink').detach();

    //remove title edit link
    $('#section-3').children('.content').find('ul.section').children('li.modtype_hvp').find('.quickeditlink').detach();

    //remove section header menu
    $('#section-3').children('.course-section-header').find('.dropdown-menu-right').detach();

    //remove section header menu dots
    $('#section-3').children('.course-section-header').find('.action-menu').detach();



    //remove  label menu
    $('#section-3').children('.content').find('ul.section').children('li.modtype_label').find('.dropdown-menu-right').detach();

    //remove label menu dots
    $('#section-3').children('.content').find('ul.section').children('li.modtype_label').find('.action-menu').detach();


    //remove  hvp menu
    $('#section-3').children('.content').find('ul.section').children('li.modtype_hvp').find('.dropdown-menu-right').detach();

    remove_hvp_menu_items($('#section-3'));

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
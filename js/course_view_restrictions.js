
$( document ).ready(function() {

    console.log("Course view restrictions");

//these functions deactive the menus in each of the sections
    sectionzero();

    sectionone();

    sectiontwo();

    sectionthree();

    //this code deactivates the drag and drop move functionality in each of the section
    setTimeout(function()
    {
        console.log("stop first section ");

        //section 0
        console.log(        $('#section-0').children('.content').find('ul.section').children('li.modtype_label').prop('draggable'));
        //stop draggable first section
        $('#section-0').children('.content').find('ul.section').children('li.modtype_label').prop('draggable', false);
        console.log(        $('#section-0').children('.content').find('ul.section').children('li.modtype_label').prop('draggable'));


        console.log($('#section-0').children('.content').find('ul.section ').children('li.modtype_hvp').prop('draggable'));
        //stop first section h5p from being dragged
        $('#section-0').children('.content').find('ul.section ').children('li.modtype_hvp').prop('draggable', false);
        console.log($('#section-0').children('.content').find('ul.section ').children('li.modtype_hvp').prop('draggable'));

        //section 1
        console.log("resource header");
        console.log($('#section-1').children('.course-section-header').prop('draggable'));
        //stop the rsource header from being dragged
        $('#section-1').children('.course-section-header').prop('draggable', false);
        console.log($('#section-1').children('.course-section-header').prop('draggable'));

        console.log("label");
        console.log($('#section-1').children('.content').find('ul.section').children('li.modtype_label'));
        console.log($('#section-1').children('.content').find('ul.section').children('li.modtype_label').prop('draggable'));
        //stop draggable first section
        $('#section-1').children('.content').find('ul.section').children('li.modtype_label').prop('draggable', false);
        console.log($('#section-1').children('.content').find('ul.section').children('li.modtype_label').prop('draggable'));

        console.log("LTI");
        console.log(        $('#section-1').children('.content').find('ul.section').children('li.modtype_lti').prop('draggable'));

        //stop draggable first section
        $('#section-1').children('.content').find('ul.section').children('li.modtype_lti').prop('draggable', false);
        console.log(        $('#section-1').children('.content').find('ul.section').children('li.modtype_lti').prop('draggable'));

        //section 2

        //stop header from being draggable
        $('#section-2').children('.course-section-header').prop('draggable', false);

        $('#section-2').children('.content').find('ul.section ').children('li.modtype_hvp').prop('draggable', false);


        //section 3

        console.log(        $('#section-3').children('.content').find('ul.section').children('li.modtype_label').prop('draggable'));
        //stop draggable first section
        $('#section-3').children('.content').find('ul.section').children('li.modtype_label').prop('draggable', false);
        console.log(        $('#section-3').children('.content').find('ul.section').children('li.modtype_label').prop('draggable'));


        console.log($('#section-3').children('.content').find('ul.section ').children('li.modtype_hvp').prop('draggable'));
        //stop first section h5p from being dragged
        $('#section-3').children('.content').find('ul.section ').children('li.modtype_hvp').prop('draggable', false);
        console.log($('#section-3').children('.content').find('ul.section ').children('li.modtype_hvp').prop('draggable'));
    }, 5000);




});


function sectionzero()       {

    console.log("Section 0 restrictions");

    $("[data-value='About Your Module']").children('.quickeditlink').detach();

    //remove edit section from first section
    $('#section-0').children('.course-section-header').find('.dropdown-menu-right').children('.edit').detach();

    //remove first section edit update
    $('#section-0').children('.content').find('ul.section').children('li.modtype_label').find('.dropdown-menu-right').children('.editing_update').detach();

    //remove first section move right
    $('#section-0').children('.content').find('ul.section ').children('li.modtype_label').find('.dropdown-menu-right').children('.editing_moveright').detach();

    //remove first section hide/show
    $('#section-0').children('.content').find('ul.section ').children('li.modtype_label').find('.dropdown-menu-right').children('.editing_hide').detach();

    //remove first section move
    $('#section-0').children('.content').find('ul.section ').children('li.modtype_label').find('.dropdown-menu-right').children('.editing_movecm').detach();

    //remove first section delete
    $('#section-0').children('.content').find('ul.section ').children('li.modtype_label').find('.dropdown-menu-right').children('.editing_duplicate').detach();


    //remove first section delete
    $('#section-0').children('.content').find('ul.section ').children('li.modtype_label').find('.dropdown-menu-right').children('.editing_delete').detach();


// H5P menu

    //remove edit title link
    $('#section-0').children('.content').find('ul.section').children('li.modtype_hvp').find('.quickeditlink').detach()

    //remove first section hvp duplicate
    $('#section-0').children('.content').find('ul.section').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_duplicate').detach();

    //remove first section hvp  move right
    $('#section-0').children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_makeunavailable').detach();


    //remove first section hvp  move right
    $('#section-0').children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_moveright').detach();

    //remove first section hvp  hide/show
    $('#section-0').children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_hide').detach();
    $('#section-0').children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_show').detach();


    //remove first section hvp  move
    $('#section-0').children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_movecm').detach();

    //remove first section hvp delete
    $('#section-0').children('.content').find('ul.section ').children('li.modtype_hvp').find('.dropdown-menu-right').children('.editing_delete').detach();


}





function sectionone()       {

    console.log("Section 1 restrictions");

    $("[data-value='Your Resource List']").children('.quickeditlink').detach();

    //remove section header menu
    $('#section-1').children('.course-section-header').find('.dropdown-menu-right').detach();

    //remove first section edit update
    $('#section-1').children('.content').find('ul.section').children('li.modtype_label').find('.dropdown-menu-right').detach();

    //remove edit leganto title link
    $('#section-1').children('.content').find('ul.section').children('li.modtype_lti').find('.quickeditlink').detach();

    // remove Leganto resource list menu
    $('#section-1').children('.content').find('ul.section ').children('li.modtype_lti ').find('.dropdown-menu-right').detach();

}


function sectiontwo()       {

    console.log("Section 2 restrictions");
    $("[data-value='Assessment Guidance']").children('.quickeditlink').off('click');
    $("[data-value='Assessment Guidance']").children('.quickeditlink').detach();

    //remove edit title link
    $('#section-2').children('.content').find('ul.section').children('li.modtype_hvp').find('.quickeditlink').detach();


    //remove section header menu
    $('#section-2').children('.course-section-header').find('.dropdown-menu-right').detach();

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

}




function sectionthree()       {

    console.log("Section 3 restrictions");

    $("[data-value='Submissions, Feedback, Results']").children('.quickeditlink').detach();

    //remove title edit link
    $('#section-3').children('.content').find('ul.section').children('li.modtype_hvp').find('.quickeditlink').detach();

    //remove section header menu
    $('#section-3').children('.course-section-header').find('.dropdown-menu-right').detach();

    //remove  label menu
    $('#section-3').children('.content').find('ul.section').children('li.modtype_label').find('.dropdown-menu-right').detach();

    //remove  hvp menu
    $('#section-3').children('.content').find('ul.section').children('li.modtype_hvp').find('.dropdown-menu-right').detach();

}
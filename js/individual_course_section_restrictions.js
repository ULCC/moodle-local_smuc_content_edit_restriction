
$(document).ready(function() {

    console.log("Course view restrictions new");

// These functions deactive the menus in each of the sections
    sectionzero();

    sectionone();

    sectiontwo();

    sectionthree();


});


function sectionzero() {

    console.log("Section 0 restrictions");

    if ($("[data-value='About Your Module']") != 'undefined') {

        $("[data-value='About Your Module']").children('.quickeditlink').detach();
        $("[data-value='About Your Module']").children('.quickeditlink').off('click');
        // Replace the link in the header with just the html text
        $("[data-value='About Your Module']").html('About Your Module');
        $("[data-value='About Your Module ']").html('About Your Module');
    }
 }


function sectionone() {

    console.log("Section 1 restrictions new");

    if ($("[data-value='Your Resource List']") != 'undefined') {

        $("[data-value='Your Resource List']").children('.quickeditlink').off('click');
        $("[data-value='Your Resource List']").children('.quickeditlink').detach();
        // Replace the link in the header with just the html text
        $("[data-value='Your Resource List']").html('Your Resource List');
    }
}


function sectiontwo() {

    console.log("Section 2 restrictions");

    if ($("[data-value='Assessment Guidance']") != 'undefined') {
        $("[data-value='Assessment Guidance']").children('.quickeditlink').off('click');
        $("[data-value='Assessment Guidance']").children('.quickeditlink').detach();
        $("[data-value='Assessment Guidance']").html('Assessment Guidance');
    }
}


function sectionthree() {

    console.log("Section 3 restrictions");

    if ($("[data-value='Submissions, Feedback, Results']") != 'undefined') {
        $("[data-value='Submissions, Feedback, Results']").children('.quickeditlink').off('click');
        $("[data-value='Submissions, Feedback, Results']").children('.quickeditlink').detach();
        $("[data-value='Submissions, Feedback, Results']").html('Submissions, Feedback, Results');
    }
}

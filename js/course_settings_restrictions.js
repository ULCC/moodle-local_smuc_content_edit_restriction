
$( document ).ready(function() {
    var form    =   $("#id_fullname").closest("form");


    console.log( "ready!" );


    //fullname
    $("#id_fullname").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_fullname',
        name: 'fullname',
        value: $("#id_fullname").val()
    }).appendTo(form);


    //shortname
    $("#id_shortname").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_shortname',
        name: 'shortname',
        value: $("#id_shortname").val()
    }).appendTo(form);

    //im not 100% happy using this selector to find the automcomplete but its all i have at the moment as
    //Moodle changes the id of it using a timestamp
   // var autocomplete = $('*[id^="form_autocomplete_input"]')[0];
//console.log($('*[id^="form_autocomplete_input"]'));
    //autocomplete.prop('disabled', true);


    //start date elements

    $("#id_startdate_day").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_startdate_day',
        name: 'startdate[day]',
        value: $("#id_startdate_day").val()
    }).appendTo(form);

    $("#id_startdate_month").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_startdate_month',
        name: 'startdate[month]',
        value: $("#id_startdate_month").val()
    }).appendTo(form);

    $("#id_startdate_year").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_startdate_year',
        name: 'startdate[year]',
        value: $("#id_startdate_year").val()
    }).appendTo(form);


    $("#id_startdate_hour").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_startdate_hour',
        name: 'startdate[hour]',
        value: $("#id_startdate_hour").val()
    }).appendTo(form);

    $("#id_startdate_minute").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_startdate_year',
        name: 'startdate[year]',
        value: $("#id_startdate_year").val()
    }).appendTo(form);



    //end date elements



    $("#id_enddate_enabled").prop('disabled', true);

    $("#id_enddate_day").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_enddate_day',
        name: 'enddate[day]',
        value: $("#id_enddate_day").val()
    }).appendTo(form);

    $("#id_enddate_month").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_enddate_month',
        name: 'enddate[month]',
        value: $("#id_enddate_month").val()
    }).appendTo(form);

    $("#id_enddate_year").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_enddate_year',
        name: 'enddate[year]',
        value: $("#id_enddate_year").val()
    }).appendTo(form);


    $("#id_enddate_hour").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_enddate_hour',
        name: 'enddate[hour]',
        value: $("#id_enddate_hour").val()
    }).appendTo(form);

    $("#id_enddate_minute").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_enddate_year',
        name: 'enddate[year]',
        value: $("#id_enddate_year").val()
    }).appendTo(form);


    //shortname
    $("#id_idnumber").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_idnumber',
        name: 'idnumber',
        value: $("#id_idnumber").val()
    }).appendTo(form);


    //COURSE FORMAT

    //format
    $("#id_format").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_format',
        name: 'format',
        value: $("#id_format").val()
    }).appendTo(form);

    //hidden sections
    $("#id_hiddensections").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_hiddensections',
        name: 'hiddensections',
        value: $("#id_hiddensections").val()
    }).appendTo(form);


    //course layout
    $("#id_coursedisplay").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_coursedisplay',
        name: 'coursedisplay',
        value: $("#id_coursedisplay").val()
    }).appendTo(form);


    //APPEARANCE

    //force language
    $("#id_lang").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_lang',
        name: 'lang',
        value: $("#id_lang").val()
    }).appendTo(form);

    //number of announcements
    $("#id_newsitems").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_newsitems',
        name: 'newsitems',
        value: $("#id_newsitems").val()
    }).appendTo(form);


    //show gradebook to students
    $("#id_showgrades").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_showgrades',
        name: 'showgrades',
        value: $("#id_showgrades").val()
    }).appendTo(form);

    //show activity reports
    $("#id_showreports").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_showreports',
        name: 'showreports',
        value: $("#id_showreports").val()
    }).appendTo(form);


    //show activity dates
    $("#id_showactivitydates").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_showactivitydates',
        name: 'showactivitydates',
        value: $("#id_showactivitydates").val()
    }).appendTo(form);


    //FILE UPLOADS

    //maximum upload
    $("#id_maxbytes").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_maxbytes',
        name: 'maxbytes',
        value: $("#id_maxbytes").val()
    }).appendTo(form);


    //COMPLETION TRACKING
    /*
        $("#id_enablecompletion").prop('disabled', true);

        $('<input>').attr({
            type: 'hidden',
            id: 'id_enablecompletion',
            name: 'enablecompletion',
            value: $("#id_enablecompletion").val()
        }appendTo(form);

        //GROUPS
    /*
        //group mode
        $("#id_groupmode").prop('disabled', true);

        $('<input>').attr({
            type: 'hidden',
            id: 'id_groupmode',
            name: 'groupmode',
            value: $("#id_groupmode").val()
        }).appendTo(form);

        //force group mode
        $("#id_groupmodeforce").prop('disabled', true);

        $('<input>').attr({
            type: 'hidden',
            id: 'id_groupmodeforce',
            name: 'groupmodeforce',
            value: $("#id_groupmodeforce").val()
        }).appendTo(form);


        //default grouping
        $("#id_defaultgroupingid").prop('disabled', true);

        $('<input>').attr({
            type: 'hidden',
            id: 'id_defaultgroupingid',
            name: 'defaultgroupingid',
            value: $("#id_defaultgroupingid").val()
        }).appendTo(form);

    */
    //ROLE RENAMING

    //
    // Your word for 'Manager'
    $("#id_role_1").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_role_1',
        name: 'role_1',
        value: $("#id_role_1").val()
    }).appendTo(form);

    //Your word for 'Course creator'
    $("#id_role_2").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_role_2',
        name: 'role_2',
        value: $("#id_role_2").val()
    }).appendTo(form);


    //Your word for 'Teacher'
    $("#id_role_3").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_role_3',
        name: 'role_3',
        value: $("#id_role_3").val()
    }).appendTo(form);


    //Your word for 'Non-editing teacher'
    $("#id_role_4").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_role_4',
        name: 'role_4',
        value: $("#id_role_4").val()
    }).appendTo(form);


    //Your word for 'Student'
    $("#id_role_5").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_role_5',
        name: 'role_5',
        value: $("#id_role_5").val()
    }).appendTo(form);


    //Your word for 'Guest'
    $("#id_role_6").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_role_6',
        name: 'role_6',
        value: $("#id_role_6").val()
    }).appendTo(form);


    //Your word for 'Authenticated user'
    $("#id_role_7").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_role_7',
        name: 'role_7',
        value: $("#id_role_7").val()
    }).appendTo(form);

    //Your word for 'moderator'
    $("#id_role_9").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_role_9',
        name: 'role_9',
        value: $("#id_role_9").val()
    }).appendTo(form);


    //Your word for 'Authenticated user on site home'
    $("#id_role_8").prop('disabled', true);

    $('<input>').attr({
        type: 'hidden',
        id: 'id_role_8',
        name: 'role_8',
        value: $("#id_role_8").val()
    }).appendTo(form);







});
<?php



function local_smuc_content_edit_restriction_extend_navigation($nav) {

    global $CFG,$PAGE,$COURSE,$USER;

    $url   =   $_SERVER['REQUEST_URI'];

    $pagepath = explode('?',$url);

    $pagepath = (is_array($pagepath))   ? $pagepath[0]  :  $pagepath ;

    $path       =   explode("/",$pagepath);

    $contentfunctions = new     \local_smuc_content_edit_restriction\content_edit_restriction();

// if a user is on the course page and doesn't have the relevant capability the specified icons should be hidden
   // if ($PAGE->pagelayout == 'course' && !has_capability('local/smuc_content_edit_restriction:overriderestriction', context_course::instance($COURSE->id))) {

    if ($path[1] == "course") {

        $courseid   =   optional_param('id',$COURSE->id,PARAM_INT);

        if (!empty($courseid)) {



            if ($contentfunctions->is_restricted_course($courseid) && !is_siteadmin($USER->id) && !has_capability('local/smuc_content_edit_restriction:overriderestriction', context_course::instance($COURSE->id))) {
                if ($pagepath == "/course/edit.php") {

                    $PAGE->requires->css(new \moodle_url('/local/smuc_content_edit_restriction/styles/restrictions.css'));
                    $PAGE->requires->jquery();
                    $PAGE->requires->js('/local/smuc_content_edit_restriction/js/course_settings_restrictions.js', array());
                    $PAGE->requires->js('/local/smuc_content_edit_restriction/js/course_sidebar_restrictions.js', array());

                } else if ($pagepath == "/course/view.php") {
                    $PAGE->requires->css(new \moodle_url('/local/smuc_content_edit_restriction/styles/view_restrictions.css'));
                    $PAGE->requires->jquery();
                    $PAGE->requires->js('/local/smuc_content_edit_restriction/js/course_view_restrictions.js', array());
                    $PAGE->requires->js('/local/smuc_content_edit_restriction/js/course_sidebar_restrictions.js', array());
                }
            }
        }
    } else if ($path[1] == "user" || $path[1] == "grade" || $path[1] == "report" || $path[1] == "importtosection" || $path[1] == "local") {

        if ($path[1] == "report") {
            $courseid = optional_param('courseid', $COURSE->id, PARAM_INT);
        } else {
            $courseid = optional_param('id', $COURSE->id, PARAM_INT);
        }

        if ($contentfunctions->is_restricted_course($courseid) && !is_siteadmin($USER->id) && !has_capability('local/smuc_content_edit_restriction:overriderestriction', context_course::instance($COURSE->id))) {
            if ($pagepath == "/user/index.php" || $pagepath == "/grade/report/index.php" || $pagepath == "/report/edit.php"  || $pagepath == "/report/edit.php" || $pagepath == "/local/importtosection/index.php") {
                $PAGE->requires->jquery();
                $PAGE->requires->js('/local/smuc_content_edit_restriction/js/course_sidebar_restrictions.js', array());
            }
        }
    }

}
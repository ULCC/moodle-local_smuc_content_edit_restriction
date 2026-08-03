<?php



function local_smuc_content_edit_restriction_extend_navigation($nav) {

    global $CFG,$PAGE,$COURSE,$USER,$DB;

    $url   =   $_SERVER['REQUEST_URI'];

    $pagepath = explode('?',$url);

    $pagepath = (is_array($pagepath))   ? $pagepath[0]  :  $pagepath ;

    $path       =   explode("/",$pagepath);

    $contentfunctions = new     \local_smuc_content_edit_restriction\content_edit_restriction();

    $config     =   get_config('local_smuc_content_edit_restriction');

// if a user is on the course page and doesn't have the relevant capability the specified icons should be hidden
   // if ($PAGE->pagelayout == 'course' && !has_capability('local/smuc_content_edit_restriction:overriderestriction', context_course::instance($COURSE->id))) {

    if ($path[1] == "course") {

        $courseid = optional_param('id', $COURSE->id, PARAM_INT);
        $moduleid = optional_param('update', false, PARAM_INT);


        if (!empty($courseid)) {

            if ($contentfunctions->is_restricted_course($COURSE->id) && !is_siteadmin($USER->id) && !has_capability('local/smuc_content_edit_restriction:overriderestriction', context_course::instance($COURSE->id))) {

                if ($pagepath == "/course/edit.php" && !empty($config->enable_cs)) {

                    $PAGE->requires->css(new \moodle_url('/local/smuc_content_edit_restriction/styles/restrictions.css'));
                    $PAGE->requires->jquery();
                    $PAGE->requires->js('/local/smuc_content_edit_restriction/js/course_settings_restrictions.js', array());


                } else if ($pagepath == "/course/view.php" && !empty($config->enable_cc)) {
                    $PAGE->requires->css(new \moodle_url('/local/smuc_content_edit_restriction/styles/view_restrictions.css'));
                    $PAGE->requires->jquery();
                    $PAGE->requires->js('/local/smuc_content_edit_restriction/js/course_view_restrictions.js', array());
                    $PAGE->requires->js('/local/smuc_content_edit_restriction/js/course_sidebar_restrictions.js', array());

                } else if ($pagepath == "/course/modedit.php" && !empty($config->enable_cc) && !empty($update)) {

                    $sql = "SELECT 		* 
                         FROM 		{course_modules} 	cm,
		                            {modules}		m
                        WHERE 		cm.module		=	m.id
                        AND		    m.name			=	'h5p'
                        AND		    cm.id = {$moduleid}";


                    $moduleinfo = $DB->get_record_sql($sql);

                    if (!empty($moduleinfo) && $contentfunctions->is_restricted_course($moduleinfo->course) && !is_siteadmin($USER->id) && !has_capability('local/smuc_content_edit_restriction:overriderestriction', context_course::instance($COURSE->id))) {

                        $PAGE->requires->jquery();
                        $PAGE->requires->js('/local/smuc_content_edit_restriction/js/course_h5p_restriction.js', array());



                    }
                }   else if ($pagepath == "/course/editsection.php" && !empty($config->enable_cc)) {

                    $sectionid  =   optional_param('id',false,PARAM_INT);

                    $section    =   (!empty($sectionid))    ? $DB->get_record('course_sections',array('id'=>$sectionid)) : false;


                    if ($section && ($section->section == 0 || $section->section == 1 || $section->section == 2 || $section->section == 3) ) {

                        $PAGE->requires->css(new \moodle_url('/local/smuc_content_edit_restriction/styles/view_restrictions.css'));
                        $PAGE->requires->jquery();
                        //$PAGE->requires->js('/local/smuc_content_edit_restriction/js/course_section_settings_restrictions.js', array());
                        $PAGE->requires->js('/local/smuc_content_edit_restriction/js/course_sidebar_restrictions.js', array());
                    }

                }
            }
        } else if (!empty($moduleid))       {



        }
    }

}
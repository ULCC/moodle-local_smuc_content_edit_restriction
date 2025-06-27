<?php

namespace local_smuc_content_edit_restriction;


class content_edit_restriction       {


    /**
     * Returns whether the course with the given course id is part of the restricted courses based on the course
     * shortname and the settings
     *
     * @param $courseid
     * @return bool
     * @throws \dml_exception
     */
    function    is_restricted_course($courseid)      {

        global  $DB;

        $is_restricted  =       false;

       $pluginconfig    =       get_config('local_smuc_content_edit_restriction') ;

       if (!empty($pluginconfig->courseidentformat)) {

           $restrictedcourseformat = explode(",", $pluginconfig->courseidentformat);

           $course = $DB->get_record('course', array('id' => $courseid));

           foreach ($restrictedcourseformat as $rcf) {

               if (str_starts_with($course->shortname, $rcf)) {
                   $is_restricted = true;
               }

           }
       }

        return  $is_restricted;

    }








}
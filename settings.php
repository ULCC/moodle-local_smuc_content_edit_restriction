<?php

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 *
 * @package   local_smuc_content_edit_restriction
 * @copyright  2019 University of London
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */


defined('MOODLE_INTERNAL') || die();

if ($hassiteconfig) {

    // Create the new settings page for local plugin
    $settings = new admin_settingpage('local_smuc_content_edit_restriction', get_string('contentrestrictionsettings', 'local_smuc_content_edit_restriction'));


    $name = get_string('courseidentformat', 'local_smuc_content_edit_restriction');
    $description = get_string('courseidentformat_desc', 'local_smuc_content_edit_restriction');
    $element = new admin_setting_configtext('local_smuc_content_edit_restriction/courseidentformat', $name, $description,'');
    $settings->add($element);


    $ADMIN->add('localplugins', $settings);
}
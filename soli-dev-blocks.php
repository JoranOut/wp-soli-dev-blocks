<?php

/*
  Plugin Name: Soli Development Plugin
  Version: 1.0
  Author: Joran Out
*/

require_once 'blocks/blocks.php';

if (!defined('ABSPATH')) exit; // Exit if accessed directly
define( 'SOLI_DEV__BLOCKS_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'SOLI_DEV__BLOCKS_DIR_URL', plugin_dir_url( __FILE__ ) );


class SoliDevBlocks {

}

$soliDevBlocks = new SoliDevBlocks();



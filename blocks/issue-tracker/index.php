<?php

/*
  Description: Block which shows development progress
*/

class SoliBlockIssueTracker {
  function __construct() {
    add_action('init', array($this, 'adminAssets'));
  }

  function adminAssets() {
    wp_register_style('block-issue-tracker-css', plugin_dir_url(__FILE__) . 'build/index.css');
    wp_register_script('block-issue-tracker-js', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    register_block_type('soli/issue-tracker', array(
      'editor_script' => 'block-issue-tracker-js',
      'editor_style' => 'block-issue-tracker-css',
      'style' => 'block-issue-tracker-css',
    ));
  }
}

$soliBlockIssueTracker = new SoliBlockIssueTracker();

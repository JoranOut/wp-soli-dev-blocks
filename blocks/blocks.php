<?php

/*
  Description: Events
*/

add_filter( 'block_categories_all' , function( $categories ) {

  // Adding a new category.
  $categories[] = array(
    'slug'  => 'development',
    'title' => 'development'
  );

  return $categories;
} );

require_once 'issue-tracker/index.php';

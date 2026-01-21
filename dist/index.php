<?php
// Enable strict types
declare(strict_types=1);

// Set headers for security and cache control if needed
// header("X-Frame-Options: SAMEORIGIN");
// header("X-Content-Type-Options: nosniff");

// Serve the main React HTML file
// The build process puts index.html in the same directory as this script
$file = __DIR__ . '/index.html';

if (file_exists($file)) {
    // Determine mime type if we were serving other things, but for index.html it's standard
    // Simply include it to output the content
    include $file;
} else {
    http_response_code(404);
    echo "Error: Application entry point not found. Please ensure the project is built.";
}

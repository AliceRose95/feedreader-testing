# Feedreader testing
## By Alice Painter

## Overview

This is a web-based application that reads RSS feeds, including a Jasmine file for testing purposes.


## What is tested

The Jasmine tests:
- Make sure the allFeeds variable is defined and is not empty
- Loop through each feed in allFeeds and makes sure url is not empty
- Loop through each feed in allFeeds and makes sure name is not empty
- Ensures the page menu is hidden by default
- Check that the menu is shown and hidden on click of the hamburger button
- Ensure there is at least one entry when the page has loaded
- Check that the content actually changes when a new feed is loaded

## Installation and running

Clone link
https://github.com/AliceRose95/feedreader-testing.git

Run the index.html file in your browser and scroll to the bottom of the feed to access the Jasmine tests

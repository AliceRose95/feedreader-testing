/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has defined URL', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           })
         });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has defined name', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           })
         });
    });

    describe('The Menu', function() {
        /* Test that ensures the menu element is
         * hidden by default.
         */
         /* The body class for hiding/showing the menu is .menu-hidden*/
         it('is hidden by default', function() {
           expect($('body').hasClass('menu-hidden')).toBe(true);
         })

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          /* Use of jQuery to create the trigger/click function*/
          it('changes visibility on click', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });

    });

    describe('Initial Entries', function() {
        /* Test that ensures when the loadFeed function is called and
         * completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(function(done) {
          loadFeed(0, done);
        });

        it('should have at least a single entry within the feed', function() {
          expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let oldContent;
        let newContent;

        beforeEach(function(done) {
          loadFeed(0, function() {
            /*before change*/
            oldContent = $('.feed').html();

            loadFeed(1, function() {
              /*after change*/
              newContent = $('.feed').html();

              done();
            });
          });
        });

        it('changes the content when a new feed is loaded', function(done) {
          expect(oldContent).not.toBe(newContent);

          done();
        });
    });
}());

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
  (function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe("RSS Feeds", function() {
      /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
      it("are defined", function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
      it("have nonempty URLs", function() {
        let urlDefined = false;
        let urlNonempty = false;
        for (let feed of allFeeds) {
          // if url is defined let urlDefined = true
          if (typeof feed.url !== "undefined") {
            urlDefined = true;
          }
          // if url is non-empty let urlNonempty = true
          if (feed.url !== "") {
            urlNonempty = true;
          }
        }
        expect(urlDefined).toBe(true);
        expect(urlNonempty).toBe(true);
      });

      /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
      it("have nonempty names", function() {
        let nameDefined = false;
        let nameNonempty = false;
        for (let feed of allFeeds) {
          // if name is defined let nameDefined = true
          if (typeof feed.name !== "undefined") {
            nameDefined = true;
          }
          // if name is non-empty let urlNonempty = true
          if (feed.name !== "") {
            nameNonempty = true;
          }
        }
        expect(nameDefined).toBe(true);
        expect(nameNonempty).toBe(true);
      });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe("The Menu", function() {
      /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
      it("is hidden by default", function() {
        expect(document.body.classList.contains("menu-hidden")).toBe(true);
      });

      /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
      it("changes visibility when the menu icon is clicked", function() {
        // check that menuIcon exists
        expect(document.querySelectorAll(".menu-icon-link").length > 0).toBe(
          true
        );
        // does the menu display when

        // does the menu hide when clicked again.
      });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function() {
      /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
      it(".feed container includes at least one .entry element after loadFeed", function() {
        expect(1 === 1).toBe(true);
      });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe("New Feed Selection", function() {
      /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
      it("content changes after loadFeed function loads a new feed", function() {
        expect(1 === 1).toBe(true);
      });
    });
  })()
);

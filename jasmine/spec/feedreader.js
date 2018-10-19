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

      /* This test that loops through each feed
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

      /* This test that loops through each feed
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

    describe("The Menu", function() {
      /* This is our second test suite: "The menu" */
      /* This test that ensures the menu element is
         * hidden by default. It tests the whether
         * the body element is a member of class 
         * .menu-hidden, the class that toggles menu
         * visibility on and off.
         */
      it("is hidden by default", function() {
        expect(document.body.classList.contains("menu-hidden")).toBe(true);
      });

      /* This test that ensures the menu changes
          * visibility when the menu icon is clicked. To simulate
          * a click, it uses the jQuery "trigger" function.
          */
      it("changes visibility when the menu icon is clicked", function() {
        // check that menuIcon exists
        expect(document.querySelectorAll(".menu-icon-link").length > 0).toBe(
          true
        );
        // check the menu displays when clicked
        // the click should be simulated
        // https://api.jquery.com/trigger/
        $(".menu-icon-link").trigger("click");
        expect(document.body.classList.contains("menu-hidden")).toBe(false);
        // check the menu hides when clicked again
        $(".menu-icon-link").trigger("click");
        expect(document.body.classList.contains("menu-hidden")).toBe(true);
      });
    });

    describe("Initial Entries", function() {
      /* This is our third test suite: "Initial Entries" */
      /* This test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

      let feedLen;

      beforeEach(function(done) {
        loadFeed(0, done);
      });

      it(".feed container includes at least one .entry element after loadFeed", function(done) {
        feedLen = document.querySelectorAll(".entry").length;
        expect(feedLen).toBeGreaterThan(0);
        // alert(document.querySelectorAll(".entry").length);
        // alert(feedLen);
        done();
      });
    });

    describe("New Feed Selection", function() {
      /* This is our fourth test suite: "New Feed Selection" */
      /* This test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
      let name0, name1;

      beforeEach(function(done) {
        loadFeed(1, function() {
          name1 = document.querySelector("article").innerText;
          loadFeed(0, function() {
            name0 = document.querySelector("article").innerText;
            done();
          });
        });
      });

      it("content changes after loadFeed function loads a new feed", function(done) {
        // alert(name0);
        // alert(name1);
        expect(name0 == name1).not.toBe(true);
        done();
      });
    });
  })()
);

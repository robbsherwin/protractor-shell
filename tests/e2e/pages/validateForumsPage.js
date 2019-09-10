// If we needed additional pages we'd put it here
// var LoginPage = require('./loginPage.js');

var ValidateForumsPage = function () {
    browser.get('https://' + browser.baseUrl);
};

beforeEach(function () {
    // Again - if we needed it
    //loginPage = new LoginPage();
});

// elements
var forumPage = element(by.xpath('//*[@id="hmenu"]/ul/li[1]/a/img'));
var viewAllForums = element(by.xpath('/html/body/table/tbody/tr[4]/td/a[1]')); // Example of using xpath

//page objects
ValidateForumsPage.prototype = Object.create({}, {

    displayAllForums: {
        value: function () {

            viewAllForums.click();

            // wait for a particular element to appear

        }
    },

    highlightForum: {
        value: function () {

            // access the highlight element code

        }
    },

    navigateToForum: {
        value: function () {

            browser.sleep(3000);
            forumPage.click();

            // wait for element to appear for forum

        }
    }
});

module.exports = ValidateForumsPage;
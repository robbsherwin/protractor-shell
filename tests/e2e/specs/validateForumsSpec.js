var ValidateForumsPage = require('../pages/validateForumsPage.js');

describe('Website Link Validation', function () {
    var username;
    var password;

    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 900000;
        validateForumsPage = new ValidateForumsPage();
    });

    afterEach(function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
        browser.manage().deleteAllCookies();
        browser.sleep(3000);
    });

    it('should let us go to the site and highlight an element.', function () {
        validateForumsPage.submitForm({
            firstName: "Flynn",
            lastName: "Taggart",
            email: "doomslayer@example.com",
            company: "Doomguy, Inc.",
            comment: "Rip and tear!"
        });
    });


});

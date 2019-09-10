var ValidateForumsPage = require('../pages/validateForumsPage.js');

describe('Website Link Validation', function () {
    var username;
    var password;

    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 900000;
        validateForumsPage = new ValidateForumsPage();

        browser.sleep(5000);
    });

    afterEach(function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
        browser.manage().deleteAllCookies();
        browser.sleep(3000);
    });

    it('should let us go to the site and highlight an element.', function () {
        validateForumsPage.navigateToForum();
        validateForumsPage.displayAllForums();
        validateForumsPage.highlightForum("Rants");
        validateForumsPage.highlightForum("Cryptozookeeper");
    });


});

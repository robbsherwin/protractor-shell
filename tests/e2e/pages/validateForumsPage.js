// If we needed additional pages we'd put it here
// var LoginPage = require('./loginPage.js');

var ValidateForumsPage = function () {
    browser.get('https://' + browser.baseUrl);
};

beforeEach(function () {
    // Again - if we needed it
    //loginPage = new LoginPage();
});

const EC = protractor.ExpectedConditions;

// elements
const firstName = element(by.id('txtFirstName'));
const lastName = element(by.id('txtLastName'));
const email = element(by.id('txtFormEmail'));
const company = element(by.id('txtCompany'));
const countryDropdown = element(by.id('optCountry'));
const usa = element(by.css('[value="USA"]'));
const comment = element(by.id('txtComments'));
const submit = element(by.css('[type="submit"]'));

//page objects
ValidateForumsPage.prototype = Object.create({}, {
    submitForm: {
        value: function (form) {
            browser.wait(EC.presenceOf(firstName), 3000);
            firstName.sendKeys(form.firstName)
            browser.wait(EC.presenceOf(lastName), 3000);
            lastName.sendKeys(form.lastName)
            browser.wait(EC.presenceOf(email), 3000);
            email.sendKeys(form.email)
            browser.wait(EC.presenceOf(company), 3000);
            company.sendKeys(form.company)
            browser.wait(EC.elementToBeClickable(countryDropdown), 3000);
            countryDropdown.click();
            browser.wait(EC.elementToBeClickable(usa), 3000);
            usa.click();
            browser.wait(EC.presenceOf(comment), 3000);
            comment.sendKeys(form.comment)
            browser.wait(EC.elementToBeClickable(submit), 3000);
            submit.click();
        }
    },
});

module.exports = ValidateForumsPage;

const functions = require('../test_data/helper_functions')
const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'Let`s start testing dropdowns': browser => {
        for (var key in data.transactions) {
            browser.url('http://localhost:3000');
            if (data.transactions.hasOwnProperty(key)) {
                browser
                    .click(selectors.homeScreen.startButton)
                    .waitForElementNotPresent(selectors.homeScreen.startButton, 2000)
                    .waitForElementVisible(selectors.loanPropTypeScreen.loanDropDown, 2000)
                //click the right option in the loantype dropdown, then the option selectors, with the field I want chosen (from my test data)
                functions.clickOption(selectors.loanPropTypeScreen.loanDropDown, selectors.loanPropTypeScreen.loanSelectors[data.transactions[key].loanType], browser)
                //click the right option in the proptype dropdown, then the option selectors, with the field I want chosen (from my test data)
                functions.clickOption(selectors.loanPropTypeScreen.propDropDown, selectors.loanPropTypeScreen.propSelectors[data.transactions[key].propType], browser)
                browser.click(selectors.loanPropTypeScreen.nextButton)
                browser.waitForElementVisible(selectors.cityScreen.city, 2000)
                functions.input(selectors.cityScreen.city, data.goodData.cityName, browser)
                browser
                    .pause(100)
                    .click(selectors.cityScreen.nextButton)
                    .pause(100)
                    .click(selectors.whatPropScreen.primaryHome)
                    .pause(100)
                    .click(selectors.foundHomeScreen.found)
                    .pause(100)
                    .click(selectors.agentScreen.agent)
                    .pause(100)
                functions.input(selectors.paymentScreen.purchasePrice, data.goodData.purchase, browser)
                functions.input(selectors.paymentScreen.downPayment, data.goodData.downPayment, browser)
                browser
                    .pause(100)
                    .click(selectors.paymentScreen.nextButton)
                    .pause(100)
                    .click(selectors.creditScoreScreen.scoreExcellent)
                    .pause(100)
                    .click(selectors.historyScreen.noHistory)
                    .pause(100)
                functions.input(selectors.addressScreen.addressOne, data.goodData.address1, browser)
                functions.input(selectors.addressScreen.addressTwo, data.goodData.address2, browser)
                functions.input(selectors.addressScreen.addressThree, data.goodData.address3, browser)
                browser
                    .pause(100)
                    .click(selectors.addressScreen.nextButton)
                    .pause(100)
                functions.input(selectors.nameScreen.firstName, data.goodData.firstName, browser)
                functions.input(selectors.nameScreen.lastName, data.goodData.lastName, browser)
                functions.input(selectors.nameScreen.email, data.goodData.email, browser)
                browser
                    .pause(100)
                    .click(selectors.nameScreen.nextButton)
                    .waitForElementVisible(selectors.overviewScreen.loan, 5000)
                browser.expect.element(selectors.overviewScreen.loan).text.to.contain(data.transactions[key].loanName)
                browser.expect.element(selectors.overviewScreen.property).text.to.contain(data.transactions[key].propName)
            }

        }
    },
    'Here`s another test': browser => {
    }
}
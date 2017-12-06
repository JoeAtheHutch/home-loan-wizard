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

    'I can click the Yes button on the Found Home screen and have it recorded on the overview screen': (browser) => {
        browser
            .click(selectors.homeScreen.startButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.whatPropScreen.primaryHome)
            .pause(100)
            .click(selectors.foundHomeScreen.found)
            .pause(100)
            .click(selectors.agentScreen.agent)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.creditScoreScreen.scoreExcellent)
            .pause(100)
            .click(selectors.historyScreen.bankruptcy)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
        browser.expect.element(selectors.overviewScreen.found).text.to.contain('True')
    },
    'I can click the No button on the Found Home screen and have it recorded on the overview screen': (browser) => {
        browser
            .click(selectors.homeScreen.startButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.whatPropScreen.primaryHome)
            .pause(100)
            .click(selectors.foundHomeScreen.notFound)
            .pause(100)
            .click(selectors.agentScreen.agent)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.creditScoreScreen.scoreExcellent)
            .pause(100)
            .click(selectors.historyScreen.bankruptcy)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
        browser.expect.element(selectors.overviewScreen.found).text.to.contain('False')
    },


    'I can click the Yes button on the Agent screen and have it recorded on the overview screen': (browser) => {
        browser
            .click(selectors.homeScreen.startButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.whatPropScreen.primaryHome)
            .pause(100)
            .click(selectors.foundHomeScreen.found)
            .pause(100)
            .click(selectors.agentScreen.agent)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.creditScoreScreen.scoreExcellent)
            .pause(100)
            .click(selectors.historyScreen.bankruptcy)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
        browser.expect.element(selectors.overviewScreen.agent).text.to.contain('True')
    },
    'I can click the No button on the Agent screen and have it recorded on the overview screen': (browser) => {
        browser
            .click(selectors.homeScreen.startButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.whatPropScreen.primaryHome)
            .pause(100)
            .click(selectors.foundHomeScreen.found)
            .pause(100)
            .click(selectors.agentScreen.noAgent)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.creditScoreScreen.scoreExcellent)
            .pause(100)
            .click(selectors.historyScreen.bankruptcy)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
        browser.expect.element(selectors.overviewScreen.agent).text.to.contain('False')
    },


    'I can click the Excellent button on the Credit Score screen and have it recorded on the overview screen': (browser) => {
        browser
            .click(selectors.homeScreen.startButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.whatPropScreen.primaryHome)
            .pause(100)
            .click(selectors.foundHomeScreen.found)
            .pause(100)
            .click(selectors.agentScreen.agent)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.creditScoreScreen.scoreExcellent)
            .pause(100)
            .click(selectors.historyScreen.bankruptcy)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
        browser.expect.element(selectors.overviewScreen.credit).text.to.contain('Excellent')
    },
    'I can click the Fair button on the Credit Score screen and have it recorded on the overview screen': (browser) => {
        browser
            .click(selectors.homeScreen.startButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.whatPropScreen.primaryHome)
            .pause(100)
            .click(selectors.foundHomeScreen.found)
            .pause(100)
            .click(selectors.agentScreen.agent)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.creditScoreScreen.scoreFair)
            .pause(100)
            .click(selectors.historyScreen.bankruptcy)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
        browser.expect.element(selectors.overviewScreen.credit).text.to.contain('Fair')
    },
    'I can click the Good button on the Credit Score screen and have it recorded on the overview screen': (browser) => {
        browser
            .click(selectors.homeScreen.startButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.whatPropScreen.primaryHome)
            .pause(100)
            .click(selectors.foundHomeScreen.found)
            .pause(100)
            .click(selectors.agentScreen.agent)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.creditScoreScreen.scoreGood)
            .pause(100)
            .click(selectors.historyScreen.bankruptcy)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
        browser.expect.element(selectors.overviewScreen.credit).text.to.contain('Good')
    },
    'I can click the Poor button on the Credit Score screen and have it recorded on the overview screen': (browser) => {
        browser
            .click(selectors.homeScreen.startButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.whatPropScreen.primaryHome)
            .pause(100)
            .click(selectors.foundHomeScreen.found)
            .pause(100)
            .click(selectors.agentScreen.agent)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.creditScoreScreen.scorePoor)
            .pause(100)
            .click(selectors.historyScreen.bankruptcy)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
            .click(selectors.nextButton)
            .pause(100)
        browser.expect.element(selectors.overviewScreen.credit).text.to.contain('Poor')
    },


    'The browser should load within the time allotted by the requirements': (browser) => {
        browser
            .click(selectors.homeScreen.startButton)
            .waitForElementVisible(selectors.loanPropTypeScreen.loanDropDown, 5000)
            .click(selectors.nextButton)
            .waitForElementVisible(selectors.cityScreen.city, 5000)
            .click(selectors.nextButton)
            .waitForElementVisible(selectors.whatPropScreen.primaryHome, 5000)
            .click(selectors.whatPropScreen.primaryHome)
            .waitForElementVisible(selectors.foundHomeScreen.found, 5000)
            .click(selectors.foundHomeScreen.found)
            .waitForElementVisible(selectors.agentScreen.agent, 5000)
            .click(selectors.agentScreen.agent)
            .waitForElementVisible(selectors.paymentScreen.purchasePrice, 5000)
            .click(selectors.nextButton)
            .waitForElementVisible(selectors.creditScoreScreen.scoreExcellent, 5000)
            .click(selectors.creditScoreScreen.scorePoor)
            .waitForElementVisible(selectors.historyScreen.bankruptcy, 5000)
            .click(selectors.historyScreen.bankruptcy)
            .waitForElementVisible(selectors.addressScreen.addressOne, 5000)
            .click(selectors.nextButton)
            .waitForElementVisible(selectors.nameScreen.lastName, 5000)
            .click(selectors.nextButton)
            .waitForElementVisible(selectors.overviewScreen.startAgain, 5000)
            .click(selectors.overviewScreen.send)
            .waitForElementVisible(selectors.sendScreen.homeButton, 5000)
            .click(selectors.sendScreen.homeButton)
            .waitForElementVisible(selectors.homeScreen.startButton, 5000)
    }

}
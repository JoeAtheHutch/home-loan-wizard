const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')
const func = require('../test_data/helper_functions')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'Testing Options on Payment Screen': browser => {
        browser
            .url('http://localhost:3000')
            .click(selectors.homeScreen.startButton)
            .click(selectors.loanPropTypeScreen.nextButton)
            .setValue(selectors.cityScreen.city, data.goodData.cityName)
            .click(selectors.cityScreen.nextButton)
            .click(selectors.whatPropScreen.primaryHome)
            .click(selectors.foundHomeScreen.found)
            .click(selectors.agentScreen.agent)
            .clearValue(selectors.paymentScreen.purchasePrice)
            .clearValue(selectors.paymentScreen.downPayment)
            .setValue(selectors.paymentScreen.purchasePrice, data.goodData.purchase)
            .setValue(selectors.paymentScreen.downPayment, data.goodData.downPayment)
        browser.expect.element(selectors.paymentScreen.nextButton).to.be.visible
    },
    'Testing Each Credit Score Button': browser => {
        browser
            // .url('http://localhost:3000')
            .click(selectors.homeScreen.startButton)
            .click(selectors.loanPropTypeScreen.nextButton)
            .clearValue(selectors.cityScreen.city)
            .setValue(selectors.cityScreen.city, data.goodData.cityName)
            .click(selectors.cityScreen.nextButton)
            .click(selectors.whatPropScreen.primaryHome)
            .click(selectors.foundHomeScreen.found)
            .click(selectors.agentScreen.agent)
            .clearValue(selectors.paymentScreen.purchasePrice)
            .clearValue(selectors.paymentScreen.downPayment)
            .setValue(selectors.paymentScreen.purchasePrice, data.goodData.purchase)
            .setValue(selectors.paymentScreen.downPayment, data.goodData.downPayment)
            .click(selectors.paymentScreen.nextButton)
            .click(selectors.creditScoreScreen.scoreExcellent)
            .pause(500)
            .url('http://localhost:3000/#/wSeven')
            .pause(500)
            .click(selectors.creditScoreScreen.scoreFair)
            .pause(500)
            .url('http://localhost:3000/#/wSeven')
            .pause(500)
            .click(selectors.creditScoreScreen.scoreGood)
            .pause(500)
            .url('http://localhost:3000/#/wSeven')
            .pause(500)
            .click(selectors.creditScoreScreen.scorePoor)
    },
    'I can put bad data into "City" and return an Error': browser => {
        browser
        // .url('http://localhost:3000')
        browser
            .click(selectors.homeScreen.startButton)
            .click(selectors.loanPropTypeScreen.nextButton)
        func.input(selectors.cityScreen.city, data.badData.cityScreen.cityName, browser)
        browser
            .click(selectors.cityScreen.nextButton)
            .pause(500)
        browser.expect.element(selectors.cityScreen.nextButton).to.be.present
    },
    'I can put bad data into "Property" and return an Error': browser => {
        browser
            .click(selectors.homeScreen.startButton)
            .click(selectors.loanPropTypeScreen.nextButton)
            .pause(5000)
            .setValue(selectors.cityScreen.city, data.goodData.cityName)
            .click(selectors.cityScreen.nextButton)
            .click(selectors.whatPropScreen.primaryHome)
            .click(selectors.foundHomeScreen.found)
            .click(selectors.agentScreen.agent)
            .clearValue(selectors.paymentScreen.purchasePrice)
            .clearValue(selectors.paymentScreen.downPayment)
            .setValue(selectors.paymentScreen.purchasePrice, data.badData.purchaseScreen.purchPrice)
            .setValue(selectors.paymentScreen.downPayment, data.badData.purchaseScreen.downPay)
            .expect.element(selectors.paymentScreen.purchasePrice).to.have.value.that.equals(''),
            browser.expect.element(selectors.paymentScreen.downPayment).to.have.value.that.equals('')

    },
    'I can put bad data into "Address" and return an Error': browser => {
        browser
            .click(selectors.homeScreen.startButton)
            .click(selectors.loanPropTypeScreen.nextButton)
            .pause(5000)
            .clearValue(selectors.cityScreen.city)
            .setValue(selectors.cityScreen.city, data.goodData.cityName)
            .click(selectors.cityScreen.nextButton)
            .click(selectors.whatPropScreen.primaryHome)
            .click(selectors.foundHomeScreen.found)
            .click(selectors.agentScreen.agent)
            .clearValue(selectors.paymentScreen.purchasePrice)
            .clearValue(selectors.paymentScreen.downPayment)
            .setValue(selectors.paymentScreen.purchasePrice, data.goodData.purchase)
            .setValue(selectors.paymentScreen.downPayment, data.goodData.downPayment)
            .click(selectors.paymentScreen.nextButton)
            .click(selectors.creditScoreScreen.scoreExcellent)
            .click(selectors.historyScreen.noHistory)
            .clearValue(selectors.addressScreen.addressOne)
            .clearValue(selectors.addressScreen.addressThree)
            .setValue(selectors.addressScreen.addressOne, data.badData.addressScreen.addOne)
            .setValue(selectors.addressScreen.addressThree, data.badData.addressScreen.addThree)
        browser.expect.element(selectors.addressScreen.addressOne).text.to.equal('')
        browser.expect.element(selectors.addressScreen.addressThree).text.to.equal('')
    },
    'I can put bad data into "Name" and return an Error': browser => {
        browser
            .click(selectors.homeScreen.startButton)
            .click(selectors.loanPropTypeScreen.nextButton)
            .pause(5000)
            .clearValue(selectors.cityScreen.city)
            .setValue(selectors.cityScreen.city, data.goodData.cityName)
            .click(selectors.cityScreen.nextButton)
            .click(selectors.whatPropScreen.primaryHome)
            .click(selectors.foundHomeScreen.found)
            .click(selectors.agentScreen.agent)
            .clearValue(selectors.paymentScreen.purchasePrice)
            .clearValue(selectors.paymentScreen.downPayment)
            .setValue(selectors.paymentScreen.purchasePrice, data.goodData.purchase)
            .setValue(selectors.paymentScreen.downPayment, data.goodData.downPayment)
            .click(selectors.paymentScreen.nextButton)
            .click(selectors.creditScoreScreen.scoreExcellent)
            .click(selectors.historyScreen.noHistory)
            .clearValue(selectors.addressScreen.addressOne)
            .clearValue(selectors.addressScreen.addressTwo)
            .clearValue(selectors.addressScreen.addressThree)
            .setValue(selectors.addressScreen.addressOne, data.goodData.address1)
            .setValue(selectors.addressScreen.addressTwo, data.goodData.address2)
            .setValue(selectors.addressScreen.addressThree, data.goodData.address3)
            .click(selectors.addressScreen.nextButton)
            .clearValue(selectors.nameScreen.email)
            .setValue(selectors.nameScreen.email, data.badData.nameScreen.email)
            browser.expect.element(selectors.nameScreen.email).text.to.equal('')
    }

}




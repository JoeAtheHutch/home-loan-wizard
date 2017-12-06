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
                .pause(1000)
                .click(selectors.homeScreen.startButton)
                .pause(1000)
                .click(selectors.loanPropTypeScreen.nextButton)
                .pause(1000)
                .click(selectors.cityScreen.nextButton)
                .pause(1000)
                .click(selectors.whatPropScreen.primaryHome)
                .pause(1000)
                .click(selectors.foundHomeScreen.found)
                .pause(1000)
                .click(selectors.agentScreen.agent)
                .pause(1000)
                .setValue(selectors.paymentScreen.purchasePrice, data.goodData.wSix.purchPrice)
                .verify.value(selectors.paymentScreen.purchasePrice, data.goodData.wSix.purchPrice)
                .pause(500)
                .setValue(selectors.paymentScreen.downPayment, data.goodData.wSix.downPay)
                .verify.value(selectors.paymentScreen.downPayment, data.goodData.wSix.downPay)
        },
            'Testing Each Credit Score Button': browser => {
                browser
                    .url('http://localhost:3000')
                    .click(selectors.homeScreen.startButton)
                    .click(selectors.loanPropTypeScreen.nextButton)
                    .click(selectors.cityScreen.nextButton)
                    .click(selectors.whatPropScreen.primaryHome)
                    .click(selectors.foundHomeScreen.found)
                    .click(selectors.agentScreen.agent)
                    .click(selectors.paymentScreen.nextButton)
                    .click(selectors.creditScoreScreen.scoreExcellent)
                    .pause(2000)
                    .url('http://localhost:3000/#/wSeven')
                    .pause(3000)
                    .click(selectors.creditScoreScreen.scoreFair)
                    .pause(2000)
                    .url('http://localhost:3000/#/wSeven')
                    .pause(3000)
                    .click(selectors.creditScoreScreen.scoreGood)
                    .pause(2000)
                    .url('http://localhost:3000/#/wSeven')
                    .pause(3000)
                    .click(selectors.creditScoreScreen.scorePoor)
                
            },
                'I can put bad data into "City" and return an Error': browser => {
                    browser
                        .url('http://localhost:3000')
                        .click(selectors.homeScreen.startButton)
                        .click(selectors.loanPropTypeScreen.nextButton)
                        func.input(selectors.cityScreen.city, data.badData.wTwo.cityName, browser)
                        .click(selectors.cityScreen.nextButton)
                        .click(selectors.whatPropScreen.primaryHome)
                        .click(selectors.foundHomeScreen.found)
                        .click(selectors.agentScreen.agent)
                        func.input(selectors.paymentScreen.purchasePrice, data.goodData.purchase, browser)
                        func.input(selectors.paymentScreen.downPayment, data.goodData.downPayment, browser)
                        .click(selectors.paymentScreen.nextButton)
                        .click(selectors.creditScoreScreen.scoreExcellent)
                        .click(selectors.historyScreen.bankruptcy)
                        func.input(selectors.addressScreen.addressOne, data.goodData.address1, browser)
                        func.input(selectors.addressScreen.addressTwo, data.goodData.address2, browser)
                        func.input(selectors.addressScreen.addressThree, data.goodData.address3, browser)
                        .click(selectors.addressScreen.nextButton)
                        func.input(selectors.nameScreen.firstName, data.goodData.firstName, browser)
                        func.input(selectors.nameScreen.lastName, data.goodData.lastName, browser)
                        func.input(selectors.nameScreen.email, data.goodData.email, browser)
                        .click(selectors.nameScreen.nextButton)
                        
      
                }
            }
        }
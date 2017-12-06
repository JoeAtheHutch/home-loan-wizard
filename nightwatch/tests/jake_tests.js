import { select } from '../../../../../Library/Caches/typescript/2.6/node_modules/@types/async';

const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')
const func = require('../test_data/helper_functions')

module.exports = {
    browser: {
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
                    .click(selectors.)
            },
                'Inputting Bad Data in Applicable Fields': browser => {
                    browser
                        .url('http://localhost:3000')
                        .click(selectors.homeScreen.startButton)
                        .click(selectors.loanPropTypeScreen.nextButton)
                        .setValue(selectors.cityScreen.city, data.badData.wTwo)
                        .click(selectors.cityScreen.nextButton)
                        .click(selectors.whatPropScreen.primaryHome)
                        .click(selectors.foundHomeScreen.found)
                        .click(selectors.agentScreen.agent)
                        .setValue(selectors.paymentScreen.purchasePrice, data.badData.wSix.purchPrice)
                        .setValue(selectors.paymentScreen.downPayment, data.badData.wSix.downPay)
                        .click(selectors.paymentScreen.nextButton)
                        .click(selectors.creditScoreScreen.scoreExcellent)
                        .click(selectors.historyScreen.bankruptcy)
                        .setValue(selectors.addressScreen.addressOne, data.badData.wNine.addOne)
                        .setValue(selectors.addressScreen.addressTwo, data.badData.wNine.addTwo)
                        .setValue(selectors.addressScreen.addressThree, data.badData.wNine.addThree)
                        .setValue(selectors.nameScreen.firstName, data.badData.wTen.firstName)
                        .setValue(selectors.nameScreen.lastName, data.badData.wTen.lastName)
                        .setValue(selectors.nameScreen.email, data.badData.wTen.email)
                        .click(selectors.nameScreen.nextButton)
                        .verify.value(selectors.overviewScreen.city, data.badData.wTwo.cityName)
                        .verify.value(selectors.overviewScreen.cost, data.badData.wSix.purchPrice)
                        .verify.value(selectors.overviewScreen.down, data.badData.wSix.downPay)
                        .verify.value(selectors.overviewScreen.address, data.badData.wNine.addOne)
                        .verify.value(selectors.overviewScreen.address, data.badData.wNine.addTwo)
                        .verify.value(selectors.overviewScreen.address, data.badData.wNine.addThree)
                        .verify.value(selectors.overviewScreen.name, data.badData.wTen.firstName)
                        .verify.value(selectors.overviewScreen.name, data.badData.wTen.lastName)
                        .verify.value(selectors.overviewScreen.name, data.badData.wTen.email)
                },
                afterAll: browser => {
                    browser.end()
                }
            }
        }
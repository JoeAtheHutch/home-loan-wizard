// const functions = require('../test_data/helper_functions')
// const selectors = require('../test_data/css_selectors')
// const data = require('../test_data/test_data')

// module.exports = {
//     beforeEach: browser => {
//         browser.url('http://localhost:3000')
//     },
//     after: browser => {
//         browser.end()
//     },
//     'I can put data in the first screen' : (browser) => {
//         browser
//             .click(selectors.homeScreen.startButton)
//             .waitForElementNotPresent(selectors.homeScreen.startButton, 1000)
//             .waitForElementVisible(selectors.loanPropTypeScreen.loanDropDown, 1000)
//         //click the right option in the loantype dropdown, then the option selectors, with the field I want chosen (from my test data)
//         functions.clickOption(selectors.loanPropTypeScreen.loanDropDown, selectors.loanPropTypeScreen.loanSelectors[data.transactions.firstEntry.loanType], browser)
//         //click the right option in the proptype dropdown, then the option selectors, with the field I want chosen (from my test data)
//         functions.clickOption(selectors.loanPropTypeScreen.propDropDown, selectors.loanPropTypeScreen.propSelectors[data.transactions.firstEntry.propType], browser)
        
//         //now leave the screen
//         browser
//             .click(selectors.loanPropTypeScreen.nextButton)
//             .waitForElementNotPresent(selectors.loanPropTypeScreen.loanDropDown, 1000)
//     }
// }
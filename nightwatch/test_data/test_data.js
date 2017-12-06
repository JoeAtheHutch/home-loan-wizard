const selectors = require('../test_data/css_selectors')

module.exports = {
    goodData: {
        wSix: {
            purchPrice: '260,000',
            downPay: '43,000'
        }
    },
    badData: {
        wTwo: {
            cityName: '12345'
            },
        wSix: {
            purchPrice: 'Alpha',
            downPay: 'Beta'
            },
        wNine: {
            addOne: '$',
            addTwo: '$',
            addThree: '$'
            },
        wTen: {
            firstName: '12345',
            lastName: '12345',
            email: '12345'
            }
    },
    transactions: {
        firstEntry: {
            loanType: 'optionPurchase', //purchase loan, the string is the property key for the loan type dropdown in my selector file
            propType: 'optionCondo', //condo home, the string is the property key for the property type dropdown in my selector file
        }
    }
}

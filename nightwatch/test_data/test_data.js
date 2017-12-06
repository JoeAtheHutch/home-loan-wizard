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
    goodData: {
        cityName: 'Salt Lake City',
        purchase: '500000',
        downPayment: '100000',
        address1: '341 S Main St',
        address2: 'Ste 100',
        address3: 'Salt Lake City, UT 84005',
        firstName: 'Bruce',
        lastName: 'Wayne',
        email: 'bruce.wayne@imbatman.com'
    },
    whatPropScreen: {
        primaryHome: 'Primary Home',
        rental: 'Rental Property',
        secondHome: 'Secondary Home'
    },
    transactions: {
        firstEntry: {
            loanType: 'optionPurchase', //purchase loan, the string is the property key for the loan type dropdown in my selector file
            propType: 'optionSingle', //Single home, the string is the property key for the property type dropdown in my selector file
            loanName: 'Home Purchase',
            propName: 'Single Family Home'
        },
        secondEntry: {
            loanType: 'optionRefi', //Refinance loan, the string is the property key for the loan type dropdown in my selector file
            propType: 'optionTown', //condo home, the string is the property key for the property type dropdown in my selector file
            loanName: 'Refinance',
            propName: 'Town Home'
        },
        thirdEntry: {
            loanType: 'optionEquity', //Home Equity loan, the string is the property key for the loan type dropdown in my selector file
            propType: 'optionCondo', //condo home, the string is the property key for the property type dropdown in my selector file              
            loanName: 'Home Equity',
            propName: 'Condo'
        },
        fourthEntry: {
            loanType: 'optionRefi', //Refinance loan, the string is the property key for the loan type dropdown in my selector file
            propType: 'optionMulti', //condo home, the string is the property key for the property type dropdown in my selector file
            loanName: 'Refinance',
            propName: 'Multi Family Dwelling'
        },
        fifthEntry: {
            loanType: 'optionEquity', //Home Equity loan, the string is the property key for the loan type dropdown in my selector file
            propType: 'optionMobile', //condo home, the string is the property key for the property type dropdown in my selector file
            loanName: 'Home Equity',
            propName: 'Mobile Home'
        }
    },
    nameScreen: {
        personOne: {
            firstName: 'John',
            lastName: 'Wayne',
            email: 'john.Wayne@westernhills.net'
        },
        personTwo: {
            firstName: 'Liz',
            lastName: 'Lemon',
            email: 'llemon@nbc.com',
        },
        personThree: {
            firstName: '芳珠',
            lastName: '蔡',
            email: 'TFC@email.com',
        },
        personFour: {
            firstName: '女',
            lastName: 'かんぺきちゃん',
            email: 'All_the_best@people.com',
        },
        personFive: {
            firstName: 'Leia',
            lastName: 'Organa',
            email: 'PrincessOrgana@NotTheRebelAlliance.com',
        }
    }
}

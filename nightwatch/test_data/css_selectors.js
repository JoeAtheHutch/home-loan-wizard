module.exports = {
    nextButton: 'button[name=next]',
    homeScreen: {
        message: 'h1[class="home-text"]',
        startButton: 'button[class=home-btn]',
        
    },
    loanPropTypeScreen: {
        loanDropDown: 'select[name=loanDropDown]',
        loanSelectors: {
            optionPurchase: 'option[name=purchase]',
            optionRefi: 'option[name=refi]',
            optionEquity: 'option[name=equity]'
        },
        propDropDown: 'select[name=propDropDown]',
        propSelectors: {
            optionSingle: 'option[name=singleHome]',
            optionTown: 'option[name=townHome]',
            optionCondo: 'option[name=condo]',
            optionMulti: 'option[name=multiHome]',
            optionMobile: 'option[name=mobileHome]'
        },
        nextButton: 'button[name=next]'
    },
    cityScreen: {
        city: 'input[name="cityName"]',
        nextButton: 'button[name="next"]'
    },
    whatPropScreen: {
        primaryHome: 'button[name="primary"]',
        rental: 'button[name="rental"]',
        secondHome: 'button[name="secondary"]'        
    },
    foundHomeScreen: {
        found: 'button[name="yesFound"]',
        notFound: 'button[name="noFound"]'
    },
    agentScreen: {
        agent: 'button[name="yesAgent"]',
        noAgent: 'button[name="noAgent"]'
    },
    paymentScreen: {
        purchasePrice: 'input[name="purchasePrice"]',
        downPayment: 'input[name="downPayment"]',
        nextButton: 'button[name=next]'
    },
    creditScoreScreen: {
        scoreExcellent: 'button[name="excellent"]',
        scoreGood: 'button[name="good"]',
        scoreFair: 'button[name="fair"]',
        scorePoor: 'button[name="poor"]'
    },
    historyScreen: {
        noHistory: 'button[name="noBankruptForeclose"]',
        bankruptcy: 'button[name="bankrupt"]',
        foreclusure: 'button[name="foreclose"]',
        bothHistory: 'button[name="bankruptForeclose"]'
    },
    addressScreen: {
        addressOne: 'input[name="addressOne"]',
        addressTwo: 'input[name="addressTwo"]',
        addressThree:  'input[name="addressThree"]',
        nextButton: 'button[name=next]'        
    },
    nameScreen: {
        firstName: 'input[name="firstName"]',
        lastName: 'input[name="lastName"]',
        email: 'input[name="email"]',
        nextButton: 'button[name="next"]'
    },
    overviewScreen: {
        send: 'button[name="send"]',
        startAgain: 'button[name="startOver"]',
        //selectors for the text field on the summary screen
        name: 'div[name="name"]',
        email: 'div[name="email"]',
        loan: 'div[name="loan"]',
        property: 'div[name="property"]',
        city: 'div[name="city"]',
        propertyType: 'div[name="propertyType"]',
        found: 'div[name="found"]',
        agent: 'div[name="agent"]',
        cost: 'div[name="cost"]',
        down: 'div[name="downPayment"]',
        credit: 'div[name="credit"]',
        history: 'div[name="bankruptcy"]',
        address: 'div[name="address"]'
    },
    sendScreen : {
        message: 'div[name="thankYou"]',
        homeButton: 'button[name="homeButton"]'
    }
}

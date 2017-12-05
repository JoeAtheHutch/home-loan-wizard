module.exports = {
    Buttons: {
        getStarted: 'button[class="home-btn"]',
        next: 'button[name="next"]', //Next button, repeated on several pages
        primaryHome: 'button[name="primary"]',
        rental: 'button[name="rental"]',
        secondHome: 'button[name="secondary"]',
        foundHome: 'button[name="yesFound"]',
        notFoundHome: 'button[name="noFound"]',
        agent: 'button[name="yesAgent"]',
        noAgent: 'button[name="noAgent"]',
        scoreExcellent: 'button[name="excellent"]',
        scoreGood: 'button[name="good"]',
        scoreFair: 'button[name="fair"]',
        scorePoor: 'button[name="poor"]',
        noHistory: 'button[name="noBankruptForeclosure"]',
        bankruptcy: 'button[name="bankrupt"]',
        foreclusure: 'button[name="foreclosure"]',
        bothHistory: 'button[name="bankruptForeclosure"]',
        send: 'button[name="send"]',
        startAgain: 'button[name="startOver"]'
    },
    TextFields: {
        city: 'input[name="cityName"]',
        purchasePrice: 'input[name="purchasePrice"]',
        downPayment: 'input[name="downPayment"]',
        addressOne: 'input[name="addressOne"]',
        addressTwo: 'input[name="addressTwo"]',
        addressThree: 'input[name="addressThree"]',
        firstName: 'input[name=firstName"]',
        lastName: 'input[name="lastName"]',
        email: 'input[name="email"]'
    },
    Dropdowns: {
        typeOfLoan: 'select[name="loanDropDown"]',
        typeOfProperty: 'select[name="propDropDown"]',
    }
}
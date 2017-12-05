module.exports = {
    homeScreen: {
        startButton: 'button[class=home-btn]'
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
    }
}
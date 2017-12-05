const input = (selector, value, browser) => {
    browser
        .clearValue(selector)
        .setValue(selector, value)
        .expect.element(selector).to.have.value.that.equals(value)
}
const clickOption = (dropdownSelector, optionSelector, browser) => {
    browser
        .click(`${dropdownSelector} ${optionSelector}`)
}
const clickNext = (selector, browser) {
    browser
        .click(selector)
}
module.exports = {
    input: input,
    clickOption: clickOption
}
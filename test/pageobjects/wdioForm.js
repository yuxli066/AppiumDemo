const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub-page containing specific selectors and methods for a specific page
 */
class WdioForm extends Page {
    /**
     * define selectors using getter methods
     */
    get inputField () {
        return $('~text-input');
    }

    get inputTextResult () {
        return $('~input-text-result');
    }

    get switch () {
        return $('~switch');
    }

    get dropDown() {
        return $('~Dropdown');
    }

    get iosPickWheel() {
        return $("-ios predicate string:type == 'XCUIElementTypePickerWheel'")
    }

    get selectorDoneButton() {
        return $('~done_button')
    }

    async inputValue(inputString) {
        await this.inputField.waitForDisplayed();
        await this.inputField.setValue(inputString)
    }

    async validateInputValue (inputString) {
        await this.inputTextResult.waitForDisplayed()
        const typedText = await this.inputTextResult.getAttribute('value')
        await expect(String(typedText).toLowerCase()).toEqual(String(inputString).toLowerCase());
    }

    async toggleSwitch () {
        const currentSwitchValue = await this.switch.getAttribute('value');
        await this.switch.click()
        const newSwitchValue = await this.switch.getAttribute('value');
        await expect(String(currentSwitchValue)).not.toEqual(String(newSwitchValue));
    }

    async selectFromDropdown (option) {
        await this.dropDown.click();
        await this.iosPickWheel.waitForDisplayed();
        await this.iosPickWheel.addValue(option);
        await this.selectorDoneButton.click();
        await this.iosPickWheel.waitForDisplayed({reverse: true})
        const displayedSelectedOption = await $('~text_input').getAttribute('value');
        await expect(String(displayedSelectedOption).toLowerCase()).toEqual(String(option).toLowerCase());
    }

}

module.exports = new WdioForm();

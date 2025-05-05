import TabBar from '../pageobjects/tabBar.js';
import WdioForm from '../pageobjects/wdioForm.js';

describe('Mobile Form Test', () => {
    before(async () => {
        await TabBar.waitForTabBarShown()
    })
    beforeEach(async () => {
        await TabBar.openForms();
    })
    it('User should be able to fill out a form on ios device',  async () => {
        await WdioForm.inputValue('Hello There')
        await WdioForm.validateInputValue('Hello There')
    });
    it('User should be able to toggle switches on an ios device',  async () => {
        await WdioForm.toggleSwitch();
        await WdioForm.toggleSwitch();
    });
    it('User should be able to select from dropdowns from ios devices',  async () => {
        await WdioForm.selectFromDropdown("webdriver.io is awesome");
        await WdioForm.selectFromDropdown("Appium is awesome");
        await WdioForm.selectFromDropdown("This app is awesome");
    });
});
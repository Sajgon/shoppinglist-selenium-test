module.exports = function () {

    let $css = async function(css){return await driver.findElements(by.css(css)); }
    let $id = async function(id){return await driver.findElement(by.id(id)); }
    let TestObj = {name: 'Honung', qty: 2, category: 'Elektronik'};

    this.Given(/^that I have created a list$/, async function () {

        await helpers.loadPage('http://localhost:3000');

        let listBtn = await $id('addList');
        let listInputName = await $css('#listNameInput');

        listInputName[0].sendKeys('A Test List');
        await listBtn.click();

        await driver.sleep(500);
    });

    this.Given(/^that I have clicked the list$/, async function () {

       let selectList = await driver.findElement(by.css('.select-list-parent'));
       await selectList.click();

       await driver.sleep(200);
    });

    this.When(/^I enter item name in the input field$/, async function () {

        let itemInputName = await $css('#item-form-name');
        itemInputName[0].sendKeys(TestObj.name);

        await driver.sleep(200);
    });

    this.When(/^I enter item qty in the input field$/, async function () {

        let itemInputName = await $css('#item-form-qty');
        itemInputName[0].sendKeys(TestObj.qty);

        await driver.sleep(200);

    });

    /**

    Keep this!

    this.When(/^I enter item category in the input field$/, async function () {

        // I add some items to the list
        Select dropdown = new Select(driver.findElement(By.id("item-form-category"));
        dropdown.selectByIndex(2);

        // lämnar denna, man är tvungen att installera OPTION
        // https://coderwall.com/p/tjx5zg/selecting-a-dropdown-option-with-webdriverjs

    });

    **/

    this.When(/^I click the submit button$/, async function () {

        let submitBtn = await driver.findElement(by.css('.submit-btn'));
        await submitBtn.click();
        await driver.sleep(600);
    });

    this.Then(/^a item will be visible in the listview$/, async function () {

        // Check if the textValue of the first list item is the same as the input field
        let findName = await (await $id('list-obj-name')).getText();
        let findQty = await (await $id('list-obj-qty')).getText();
        let findCat = await (await $id('list-obj-cat')).getText();

        // convert qty to integer
        findQty = findQty /1;

        expect(findName).to.deep.equal(TestObj.name);
        expect(findQty).to.deep.equal(TestObj.qty);
        expect(findCat).to.deep.equal(TestObj.category);

        await driver.sleep(800);
    });
};

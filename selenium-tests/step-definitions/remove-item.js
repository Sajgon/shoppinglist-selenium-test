module.exports = function () {

    this.When(/^I click the remove button$/, async function(){
        let removeButton = await driver.findElement(by.css('.remove-item'));
        await removeButton.click();
        await driver.sleep(500);
    });

    this.Then(/^an item will be removed$/, async function(){
        //denna ska inte hitta något
        let elements = await driver.findElements(by.css('.remove-item')).length;
        console.log(elements);

    });
};

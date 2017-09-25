module.exports = function () {

    this.When(/^I click the remove button$/, async function(){
        let removeButton = await driver.findElement(by.css('.remove-item'));
        await removeButton.click();
        await driver.sleep(500);
    });

    this.Then(/^an item will be removed$/, async function(){
        //denna ska inte hitta något
        //await driver.findElement(by.css('.remove-item'));
        expect(async function () {await driver.findElement(by.css('.remove-item'));}).to.throw();

    });
};

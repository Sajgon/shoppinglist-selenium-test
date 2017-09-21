module.exports = function () {
    let $ = async function(css){return await driver.findElements(by.css(css)); }

    this.Given(/^that I have started the application$/, async function () {
        await helpers.loadPage('http://localhost:3000/')
    });

    this.When(/^I enter a unique name in the text input$/, async function () {
        //get text-input
        let inputElement = await $('#listNameInput');
        //input to text-input
        inputElement[0].sendKeys('My Grocery List');
        //wait 2 seconds (just for you to see in the browser that the test is working)
        // await driver.sleep(2000);
    });

    this.When(/^I click the button$/, async function () {
        //get button
        let addListButton = await $('#addList');
        //click the button
        addListButton[0].click();
    });

    this.Then(/^a list will be created and visible in the list$/, async function () {
        let element = await $('.master-list-view button');
        //assert that there is a button in the master-list-view
        //(could be more accurate)
        assert(element[0]);
    });
};
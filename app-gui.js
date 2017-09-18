let GroceryList = require('./grocery-list');

class AppGui {
    constructor(){

        //start with all views hidden
        $('view').hide()
        //show start view
        $('start-view').show();
        this.defineEventListeners();
    }

    //put all event listeners here
    defineEventListeners(){
        //add list
        $(document).on('click','#addList',function(){
            //click it
        });

        //add item
        $(document).on('click','#addItem',function(){
            console.log(this)
        });

        //buy item
        $(document).on('click', '#buyItem', function(){

        })

        //remove item
        $(document).on('click', '#removeItem', function(){

        })
    }
}
new AppGui();
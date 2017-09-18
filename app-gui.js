let GroceryList = require('./grocery-list');

class AppGui {
    constructor(){

        //start with all views hidden


        $('.master-view').hide()
        $('.detail-view').hide()
        //show start view
        // $('master-view').show();
        this.defineEventListeners();
    }

    defineEventListeners(){
        $(document).on('click','#addList',function(){
            //click it
        });

        $(document).on('click','#addItem',function(){
            console.log(this)
        });

        $(document).on('click', '#buyItem', function(){

        })

        $(document).on('click', '#removeItem', function(){

        })
    }


}

$(()=>new AppGui());

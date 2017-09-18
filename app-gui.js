let GroceryList = require('./grocery-list');

class AppGui {
    constructor(){

        //start with all views hidden

        $('.master-view').show()
        $('.detail-view').hide()
        //show start view
        // $('master-view').show();
        this.defineEventListeners();
    }

    defineEventListeners(){
        let that = this;

        //add list
        $(document).on('click','#addList',function(){
            //click it
        });

        //buy item
        $(document).on('click','#addItem',function(){
            console.log(this)
        });

        $(document).on('click', '#buyItem', function(){

        });

        //add item
        $(document).on('click','#addItem',function(){

        });

        //remove item
        $(document).on('click', '#removeItem', function(){

        });
    }
    printList(arr){
        $('.list').empty();
        arr.forEach(function(item){
            $('.list').append('<li>' + item.name + "</li>")
        })
    };
}

$(()=>new AppGui());
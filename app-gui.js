let GroceryList = require('./grocery-list');

class AppGui {
    constructor(){

        //start with all views hidden

        $('.master-view').show()
        $('.detail-view').hide()
        //show start view
        // $('master-view').show();
        this.defineEventListeners();
        this.printList(myGroceryList.items);
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
            myGroceryList.addItem("Hola", 3, "kalas");
            that.printList(myGroceryList.items);
        });

        //remove item

        $(document).on('click', '#removeItem', function(){
            that.printList(myGroceryList.items);

        });
    }
    printList(arr){
        $('.list').empty();
        arr.forEach(function(item){
            $('.list').append('<li>' + item.name + "</li>")
        })
    };
}

// let myGroceryList = new GroceryList("My Grocery List")
// myGroceryList.addItem("Fuktboll", 2, "övrigt");
// myGroceryList.addItem("Tomat", 3, "grönsak");
// myGroceryList.addItem("Äpple", 2, "frukt");
// myGroceryList.addItem("bacon", 2, "kött");
// myGroceryList.addItem("korv", 2, "kött");

$(()=>new AppGui());

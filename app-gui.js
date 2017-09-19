let GroceryList = require('./grocery-list');

class AppGui {

    constructor() {
        //start with all views hidden

        $('.master-view').show();
        $('.detail-view').show();

        this.defineEventListeners();
        this.addItemHandler();
    }

    defineEventListeners() {
        let that = this;

        //add list
        $(document).on('click', '#addList', function() {
            //click it
			let newListName = $('#listNameInput').val();
			let newList = new GroceryList(newListName);
			if(newList.name == newListName){
				// New list was created, notify user that
				console.log("Successfully created a new list!");
				$('#newListSuccessAlert').show();
				//console.log(GroceryList.allInstances);
			}
        });

        //buy item
        $(document).on('click', '#addItem', function() {
            console.log(this)
        });


        $(document).on('click', '#buyItem', function() {

        })

        $(document).on('click', '#removeItem', function() {

        })

    }

    addItemHandler() {

        $('#new-item-form').submit(function(e) {

            let name = $('.item-form-name').val();
            let qty = $('.item-form-qty').val();
            let category = $('.item-form-category').val();

            // TODO: find out a way to add item to THIS list.
            // ??? new GroceryListItem(name, qty, category);

            console.log(name, qty, category);
            $('#new-item-form').clear();
            e.preventDefault();
        });
    }

    printList(){        
        // let instances = GroceryList.allInstances;
        // let activeList = instances.find(instance => { return instance.active = true });
        // console.log(activeList)
        //     activeList.forEach(function(item){
        //         console.log(item);
        //     });
    }
}

$(() => gui = new AppGui());
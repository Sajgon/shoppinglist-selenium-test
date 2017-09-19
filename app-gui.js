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
        $(document).on('click', '#addList', function(e) {
            e.preventDefault();
            //click it
			let newListName = $('#listNameInput').val();
			let newList = new GroceryList(newListName);
			if(newList.name == newListName){
				// New list was created, notify user that
				console.log("Successfully created a new list!");
				$('#newListSuccessAlert').show();
				//console.log(GroceryList.allInstances);
                $('.master-list-view').append("<button type='button' class='btn btn-default'><span style='float: left;'>" +
                    newListName +
                    "</span> <span class='glyphicon glyphicon-remove' style='float: right;'></span></button>");
			}
        });

        //buy item
        $(document).on('click', '#addItem', function() {

        });


        $(document).on('click', '#buyItem', function() {

        })

        $(document).on('click', '#removeItem', function() {

        })

    }

    static findActiveList(){
        let instances = GroceryList.allInstances;
        let activeList = instances.find(instance => { return instance.active == true });
        return activeList;
    }

    addItemHandler() {

        $('#new-item-form').submit(function(e) {
            e.preventDefault();
            let name = $('.item-form-name').val();
            let qty = $('.item-form-qty').val();
            let category = $('.item-form-category').val();
            
            console.log(name, qty, category);
            let activeList = AppGui.findActiveList();
            activeList.addItem(name, qty, category)
            gui.printList();

            $('#new-item-form').clear();
        });
    }

    printList(){        
        let activeList = AppGui.findActiveList();
            activeList.items.forEach(function(item){
                console.log(item);
            });
    }
}

$(() => gui = new AppGui());
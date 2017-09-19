let GroceryList = require('./grocery-list');

class AppGui {

    constructor() {
        //start with all views hidden

        $('.master-view').show();
        $('.detail-view').show();

        this.defineEventListeners();
        this.addItemHandler();
        this.removeListHandler();

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
                $('.master-list-view').append("<button type='button' class='btn btn-default list-button'><span style='float: left;'>" +
                    newListName +
                    "</span> <span class='glyphicon glyphicon-remove remove-list' style='float: right;'></span></button>");
    			}

        });

        //remove item *** Only frontend, removieList need to be written
        $(document).on('click', '.remove-list', function(e) {
            e.preventDefault();
            $(this).parents('button').fadeOut(800);
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
            AppGui.printList();

            $('#new-item-form').clear();
        });
    }

    static printList(){
        $('.unbought-items').empty();
        let activeList = AppGui.findActiveList();
            activeList.items.forEach(function(item){
                $('.unbought-items').append("<tr><td><span style='color: #007AFF;' class='glyphicon glyphicon-ok'></span></td><td>" +
                    item.category +
                    "</td><td>" +
                    item.name +
                    "</td><td>" +
                    item.quantity +
                    "</td><td><span class='glyphicon glyphicon-remove'></span></td></tr>");
            });
    }
}

$(() => gui = new AppGui());

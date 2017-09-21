let GroceryList = require('./grocery-list');

class AppGui {

    constructor() {
        //start with all views hidden

        $('.master-view').show();
        $('.detail-view').hide();

        this.defineEventListeners();
        this.addItemHandler();

        //booleans for alternating between ascending and descending sortings
        this.sortAlphabeticalToggle = true;
        this.sortCategoryToggle = true;

    }

    static printAllLists(){
        $('.master-list-view').empty();

        //use the static propery "allInstances" (array)
        let instances = GroceryList.allInstances;

        instances.forEach(function(instance,index){
            $('.master-list-view').append("<button type='button' data-index='" +
                index +
                "'class='btn btn-default select-list-parent'><span class='select-list' style='float: left;'>" +
                instance.name +
                "</span> <span class='glyphicon glyphicon-remove remove-list' style='float: right;'></span></button>");
        })
    }

    defineEventListeners() {
        let that = this;

        //add list
        $(document).on('click', '#addList', function(e) {
            e.preventDefault();

            //save the value of the name input
			let newListName = $('#listNameInput').val();
            //make an new list with that name
			let newList = new GroceryList(newListName);
            //the all the lists instance names
            $('#listNameInput').val('');
            AppGui.printAllLists();
        });

        //remove item *** Only frontend, removieList need to be written
        $(document).on('click', '.remove-list', function(e) {
            e.preventDefault();

            let removeListID = $(this).parents('button').data('index');
            console.log("ID of the list to be removed: " + removeListID)

            GroceryList.allInstances.splice(removeListID, 1)
            AppGui.printAllLists();

            $(this).parents('button').fadeOut(800);
        });

        //changing list
        $(document).on('click', '.select-list-parent', function(e){
            e.preventDefault();

            let activeList = AppGui.findActiveList();

            //save the index of the now selected list
            let changeListIndex = $(this).closest('button').data('index');

            //see method "changeActiveList" in grocery-list
            activeList.changeActiveList(changeListIndex);

            //find the new active list
            activeList = AppGui.findActiveList();
            //print the list of the new active list

            $('.master-view').hide();
            $('.detail-view').show();

            AppGui.printList(activeList.items);
        });

        $(document).on('click', '.back-button', function(e){
            $('.master-view').show();
            $('.detail-view').hide();
        });

        $(document).on('click', '#sort-alphabetical', function(){

            //find the active list
            let activeList = AppGui.findActiveList();
            //A-Z
            if(that.sortAlphabeticalToggle){
                //OBS sortAlpabetical returns an ARRAY
                activeList.items = activeList.sortAlphabetical(true)
                that.sortAlphabeticalToggle = false;
            }

            //Z-A
            else{
                //OBS sortAlpabetical returns an ARRAY
                activeList.items = activeList.sortAlphabetical(false)
                that.sortAlphabeticalToggle = true;
            }

            //printList takes an array
            AppGui.printList(activeList.items);
        });

        $(document).on('click', '#sort-by-category', function(){

            //find the active list
            let activeList = AppGui.findActiveList();

            if(that.sortCategoryToggle){
                //OBS sortByCategory returns an ARRAY
                activeList.items = activeList.sortByCategory(that.sortCategoryToggle);
                that.sortCategoryToggle = false;
            }
            else{
                activeList.items = activeList.sortByCategory(that.sortCategoryToggle);
                that.sortCategoryToggle = true;
            }
            //printList takes an array
            AppGui.printList(activeList.items);
        });

        //buy item
        $(document).on('click', '.buy-item', function(e) {

            e.preventDefault();
            let activeList = AppGui.findActiveList();
            console.log("klick it")

            //get data-index from the item clicked
            let itemIndex = $(this).closest('tr').data("index");
            console.log(itemIndex)
            activeList.buyIndex(itemIndex);

            //the item is now marked as bought, but
            //...how do we replace glyphicon-unchecked with glyphicon-ok??
            console.log($(this));
            console.log($(this).children('span'));
            $(this).children('span').removeClass("glyphicon-unchecked");
            $(this).children('span').addClass("glyphicon-ok");

			/* This is not working because list is printed afterwards to ($this) is not working
			// Toggle bought/unbougt icon
			if($(this).children('span').hasClass("glyphicon-unchecked")){
				// Icon has now been checked
				$(this).children('span').removeClass("glyphicon-unchecked");
				$(this).children('span').addClass(" glyphicon-ok");
			}else if($(this).children('span').hasClass("glyphicon-ok")){
				// Icon has now been unchecked
				$(this).children('span').removeClass("glyphicon-ok");
				$(this).children('span').addClass(" glyphicon-unchecked");
			}*/


            AppGui.printList(activeList.items);

        });

        $(document).on('click', '.remove-item', function(e) {

            e.preventDefault();
            let activeList = AppGui.findActiveList();

            //get data-index from the item clicked
            let itemIndex = $(this).data("index");

            activeList.removeItemByIndex(itemIndex);

            $(this).closest('tr').fadeOut(800);
            AppGui.printList(activeList.items);
        })
    }

    static findActiveList(){
        let instances = GroceryList.allInstances;
        let activeList = instances.find(function(instance){
            return instance.active == true
        });
        return activeList;
    }

    static findActiveListIndex(){
        let instances = GroceryList.allInstances;
        let activeList = instances.findIndex(function(instance){
            return instance.active == true
        });
        return activeList;
    }

    addItemHandler() {

        $('#new-item-form').submit(function(e) {
            e.preventDefault();
            let name = $('.item-form-name').val();
            let qty = $('.item-form-qty').val();
            let category = $('.item-form-category').val();

            let activeList = AppGui.findActiveList();
            activeList.addItem(name, qty, category)

            AppGui.printList(activeList.items);

            $('.item-form-name').val('');
            $('.item-form-qty').val('');
        });
    }

    static printList(inputArray){
        $('.unbought-items').empty();

        inputArray.forEach(function(item, index){
			console.log("item.bought",item.bought);
			var itemBoughtClass = "glyphicon-unchecked";
			if(item.bought){itemBoughtClass = "glyphicon-ok"}

            $('.unbought-items').append("<tr data-index='" + index + "' ><td class='buy-item'><span style='color: #007AFF;' class='glyphicon "+itemBoughtClass+"'></span></td><td>" +
                item.category +
                "</td><td>" +
                item.name +
                "</td><td>" +
                item.quantity +
                "</td><td " + "data-index='" + index + "'class='remove-item' ><span class='glyphicon glyphicon-remove'></span></td></tr>");
        });
    }
}

$(() => new AppGui());

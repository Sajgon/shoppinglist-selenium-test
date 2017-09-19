let GroceryList = require('./grocery-list');

class AppGui {

    constructor() {
        //start with all views hidden

        $('.master-view').show();
        $('.detail-view').show();

        this.defineEventListeners();
        this.addItemHandler();
    }

    static printAllLists(){
        $('.master-list-view').empty();

        //use the static propery "allInstances" (array)
        let instances = GroceryList.allInstances;

        instances.forEach(function(instance,index){
            $('.master-list-view').append("<button type='button' value='" +
                index +
                "'class='btn btn-default list-button'><span style='float: left;'>" +
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
            AppGui.printAllLists();
        });

        //remove item *** Only frontend, removieList need to be written
        $(document).on('click', '.remove-list', function(e) {
            e.preventDefault();

            let listID = $(this).parents('button').val();

            GroceryList.allInstances.splice(listID, listID+1)
            AppGui.printAllLists();
            $(this).parents('button').fadeOut(800);
        });

        $(document).on('click', '#sort-alphabetical', function(){

            //find the active list
            let activeList = AppGui.findActiveList();
            //A-Z
            //OBS sortAlpabetical returns an ARRAY
            activeList.items = activeList.sortAlphabetical(true)
            //printList takes an array
            AppGui.printList(activeList.items);
        });

        $(document).on('click', '#sort-by-category', function(){

            //find the active list
            let activeList = AppGui.findActiveList();
            //OBS sortByCategory returns an ARRAY
            activeList.items = activeList.sortByCategory(true)
            //printList takes an array
            AppGui.printList(activeList.items);
        });

        //buy item
        $(document).on('click', '#buyItem', function() {
        })

        $(document).on('click', '.remove-item', function(e) {

            e.preventDefault();
            let itemValue = $(this).val();
            console.log(itemValue);
            // $(this).closest('tr').fadeOut(800);
        })

    }

    static findActiveList(){
        let instances = GroceryList.allInstances;
        let activeList = instances.find(function(instance){
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

            console.log(name, qty, category);
            let activeList = AppGui.findActiveList();
            activeList.addItem(name, qty, category)

            AppGui.printList(activeList.items);

            // $('#new-item-form').clear();
        });
    }


    static printList(inputArray){
        $('.unbought-items').empty();
        inputArray.forEach(function(item, index){
            $('.unbought-items').append("<tr><td><span style='color: #007AFF;' class='glyphicon glyphicon-ok'></span></td><td>" +
                item.category +
                "</td><td>" +
                item.name +
                "</td><td>" +
                item.quantity +
                "</td><td " + "value='" + index + "'class='remove-item' ><span class='glyphicon glyphicon-remove'></span></td></tr>");
        });
    }
}

$(() => gui = new AppGui());

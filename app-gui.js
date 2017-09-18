let GroceryList = require('./grocery-list');

class AppGui {

  constructor() {
    //start with all views hidden

    $('.master-view').hide();
    $('.detail-view').show();

    this.defineEventListeners();
    this.addItemForm();
  }

  defineEventListeners() {
    $(document).on('click', '#addList', function() {
      //click it
    });

    $(document).on('click', '#addItem', function() {
      // console.log(this)
    });

    $(document).on('click', '#buyItem', function() {

    })

    $(document).on('click', '#removeItem', function() {

    })

  }

  addItemForm() {

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
}

$(() => new AppGui());

(()=>{
    //Kick it of by kicking an new instance of GroceryList and add two items.
    let TestList = new GroceryList("min lista");
    TestList.addItem("Fuktbollar", 2, "leksaker");
    TestList.addItem("Kalaspäron", 2, "frukt");

    $(document).ready(function() {
        //when clicking the submit-button
        $('form').on('submit', function(event){ //när det submittas i form så sker detta
            event.preventDefault();
            let tempItemName  = $('#addtask').val()

            //quantity and category is fixed for now
            TestList.addItem(tempItemName, 2, "tomater")

            //reset form and print the updated list
            this.reset();
            print();
        });
        print();
    });

    //empty the lists and reprint them
    function print(){
        $('.list ul').empty();

        //store the array resulting from the GroceryList.filterUnboughtItems in an variable. (For readability).
        let unbought = TestList.filterUnboughtItems();
        //loop thru the array
        unbought.forEach(function(item){
            $('.unbought').append('<li><b>' + item.name + "</b><i>. Kategori: " + item.category + ".</i>" +'</li>');
        });

        //Same thing here but with the bought items
        let bought = TestList.filterBoughtItems();
        bought.forEach(function(item){
            $('.bought').append('<li><b>' + item.name + "</b><i>. Kategori: " + item.category + ".</i>" +'</li>');
        });
    }
})();


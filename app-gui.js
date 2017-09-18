class AppGui {
    constructor(){

        //start with all views hidden
        $('view').hide()

        //show start view
        $('start-view').show();

        this.defineEventListeners();
    }

    //put all event listeners here
    defineEventListeners(){
        $(document).on('click','#addCar',function(){
            //click it
        });
    }
}

new AppGui();
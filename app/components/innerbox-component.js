app.component('bluebox' {
    templateUrl: 'app/components/innerbox.html',
    controllerAs: bb,
    controller: function() {
        var bb = this;
        
        bb.keyPress = function($event) {
            console.log($event);
        }
    }
})
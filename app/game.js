app.controller('GameController', function() {
    var gc = this;
    
    gc.vertical = 0;
    gc.horizontal = 0;
    
    gc.movePlayer = function(e) {
        if (e.keyCode == 40) {  //down arrow
            gc.vertical++;
        } else if (e.keyCode == 38) {  //up arrow
            gc.vertical--;
        } else if (e.keyCode == 37) {  //left arrow
            gc.horizontal--;
        } else if (e.keyCode == 39) {  //right arrow
            gc.horizontal++;
        }
    }
    
})
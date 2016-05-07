app.controller('GameController', function() {
    var gc = this;
    
    gc.bluebox = {
        mods: {
            moveSpeed: 2
        },
        position: {
            top: 0,
            left: 0
        }
    }
    
    gc.movePlayer = function(e) {
        var moveSpeed = 1 * gc.bluebox.mods.moveSpeed;
        
        if (e.keyCode == 40) {  //down arrow
            gc.bluebox.position.top += moveSpeed;
        } else if (e.keyCode == 38) {  //up arrow
            gc.bluebox.position.top -= moveSpeed;
        } else if (e.keyCode == 37) {  //left arrow
            gc.bluebox.position.left -= moveSpeed;
        } else if (e.keyCode == 39) {  //right arrow
            gc.bluebox.position.left += moveSpeed;
        }
        
        gc.checkLocation(gc.bluebox.position.top, gc.bluebox.position.left);
    }
    
    gc.checkLocation = function(top, left) {
        if (top < 0) {
            gc.bluebox.position.top = 0;
        } else if (top > 590) {
            gc.bluebox.position.top = 590;
        }
        
        if (left < 0) {
            gc.bluebox.position.left = 0;
        } else if (left > 590) {
            gc.bluebox.position.left = 590;
        }
    }
    
    
})
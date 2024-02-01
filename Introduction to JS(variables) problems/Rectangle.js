var Rectangle = {
    length : 50,
    width : 60,
    area : function(){
       console.log(this.length*this.width);
    },
    perimeter : function(){
    
      console.log(2*(this.length+this.width));
    }
    
    };
    Rectangle.area();
    Rectangle.perimeter();
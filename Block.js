class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
        }
        this.visiblity = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        

        //Add code for loading the image block.png        
        
        World.add(world, this.body);
        
      }
     
      display(){
        console.log(this.body.speed);
        var pos= this.body.position;
        if(this.body.speed <3){
          imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.width, this.height);
        }
      else{
        
          /// Write the code for push and pop 
          
          
      }
    }
}

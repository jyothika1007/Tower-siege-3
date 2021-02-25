class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.5,
           'friction':1.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 3){
          var pos =this.body.position;
          var angle= this.body.angle;
          push();
        
          translate(pos.x,pos.y);
          rectMode(CENTER);
          rect(0,0, this.width, this.height);
          pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visibility = this.Visibility - 5;
           tint(255,this.Visibility);
           pop();
         }
        
       
      }
      score(){
        if (this.Visibility < 0 && this.Visibility > -105){
          score++;
        }
      }
    
}
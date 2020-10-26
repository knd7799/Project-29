class Box {
  constructor(x, y, width, height,angle) {
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
};

/*function score (){
  if(this.visibility<0 && this.visiblity >-105){
    score ++;
  }
}*/


      /*if(this.body.speed<3){
        //super.display();
      }

     else {
        World.remove(world,this.body);
        
        
        this.Visibility=this.Visibility-5;
        tint(255,this.Visibility);
        
        }*/
     
      
      
    
  
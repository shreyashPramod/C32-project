class Block {
  constructor(x, y, width, height) {
    var options = {
      friction :0.0, 
        'restitution':0.8
       
    }

    this.visibility = 225; 
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image=loadImage("sprites/block.jpg");
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle;
    push ();
    translate(pos.x,pos.y);
    rotate (angle);
    rectMode(CENTER);
    fill("green");
    rect(0,0, this.width, this.height);
    pop();
    //console.log(this.body.speed);
    if(this.body.speed < 3){
       //super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-5;
      tint(255,this.Visibility);
      imageMode(CENTER);
      image(this.image, 0,0,this.r, this.r)
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }
  score()
  {
     if(this.Visibility<0 && this.visibility >-105)
     {
       score++;
/*block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block13.score();
block14.score();
block15.score();
block16.score();

blocks1.score();
blocks2.score();
blocks3.score();
blocks4.score();
blocks5.score();
blocks6.score();
blocks7.score();
blocks8.score();
blocks9.score();*/

       } 
      }
   
};

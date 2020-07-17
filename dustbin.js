class Dustbin {
    constructor(x,y,width,height){
var options={
isStatic:true,
friction:0.5,
density:0.3,
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.image=loadImage("dustbingreen.png");
this.width=width;
this.height=height;
World.add(world,this.body);

    }
    display(){
var pos= this.body.position;
rectMode(CENTER);
fill(255);

rect(pos.x,pos.y,this.width,this.height);
imageMode(CENTER);
image(this.image,590,590,250,190);

    }
}
class Paper {
    constructor(x,y,width,height){
        var options = {
isStatic:false,
restitution:1,
friction:0.5,
density:1.2,
        }
    
        this.body=Bodies.circle(x,y,20,options);
        // this.paper=loadImage("paper.png");
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    }
    display() {
        var pos=this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,20,20);
    
    // imageMode(CENTER);
    // image(this.paper,100,660,this.width,this.height);
    
    }
    
    }
    
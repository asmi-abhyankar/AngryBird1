class Pig{
    constructor(x,y){
        var Option={
            restitution:0.8,
            friction:0.3,
            density:1.0
                  }
          this.body=Bodies.rectangle(x,y,50,50,Option);
          World.add(world,this.body);
          this.width=50;
          this.height=50;
    }
    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push() ;
        translate(pos.x,pos.y)
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        fill("pink");
        rectMode(CENTER);
        rect (0,0,this.width,this.height);
        pop();
    }
}
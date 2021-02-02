class Ground1{
    constructor(x,y,width,height){
        var Option={
            isStatic:true
          }
          this.body=Bodies.rectangle(x,y,width,height,Option);
          World.add(world,this.body);
          this.width=width;
          this.height=height;
    }
    display(){
        var pos = this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}
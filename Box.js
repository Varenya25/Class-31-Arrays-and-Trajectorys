class Box extends BaseClass {
    constructor (x,y,width,height) {
        super (x,y,width,height);
        this.image = loadImage ("Images/wood1.png");
    }
    

}

/*
class Box {
    constructor (x,y, width, height) {
        var box_options = {
            restitution : 0.8,
            friction : 1.0,
            density : 1.0
          }
          this.width = width ;
          this.height = height ;
          this.body = Bodies.rectangle (x,y,this.width,this.height, box_options);
          World.add (myWorld, this.body);
          console.log (this.body);

    }

    display () {
        var Pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(Pos.x, Pos.y);
        angleMode (RADIANS)
        rotate(angle);
        rectMode (CENTER);
        fill("lightGreen");
        strokeWeight(4);
        stroke("green");
        rect (0, 0, this.width,this.height);
        pop();
    }
}
*/
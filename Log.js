class Log extends BaseClass {
    constructor (x,y,height,angle) {
        super (x,y,20,height,angle);
        Matter.Body.setAngle(this.body,angle);
        this.image = loadImage ("Images/wood2.png");
    }
}

/*
class Log {
    constructor (x,y,height,angle) {
        var Log_options = {
            restitution : 0.8,
            friction : 1.0,
            density : 1.0
          }
          this.width = 20 ;
          this.height = height ;
          this.body = Bodies.rectangle (x,y,this.width,this.height, Log_options);
          World.add (myWorld, this.body);
          Matter.Body.setAngle(this.body,angle);
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
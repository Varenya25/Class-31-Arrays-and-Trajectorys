class BaseClass {
    constructor (x,y, w, h, angle) {
        var base_options = {
            restitution : 0.8,
            friction : 1.3,
            density : 1.0
          }
          this.width = w ;
          this.height = h ;
          this.image = loadImage("Images/base.png");
          this.body = Bodies.rectangle (x,y,this.width,this.height, base_options);
          World.add (myWorld, this.body);
          console.log (this.body);

    }

    display () {
        var Pos = this.body.position;
        //Pos.x = mouseX;
        //Pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(Pos.x, Pos.y);
        angleMode (RADIANS)
        rotate(angle);
        //rectMode (CENTER);
        //fill("red");
        //strokeWeight(4);
        //stroke("lightPink");
        //rect (0, 0, this.width,this.height);
        imageMode (CENTER);
        image (this.image, 0,0, this.width, this.height);
        pop();
    }
}
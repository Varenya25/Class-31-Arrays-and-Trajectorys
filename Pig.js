class Pig extends BaseClass {
    constructor (x,y) {
        super (x,y,50,50);
        this.image = loadImage ("Images/enemy.png");
        this.visibility = 255;
    }

display () {
    if (this.body.speed < 3) {
        super.display();
        //console.log(this.body.speed);
    } else {
        // speed is more.. implying pig has been hit
        World.remove(myWorld, this.body);
        push();
        tint(255,this.visibility);
        image(this.image, this.body.position.x, this.body.position.y, 50,50);
        this.visibility = this.visibility - 5;
        pop();
    }
}


}

/*
class Pig {
    constructor (x,y) {
        var Pig_options = {
            restitution : 0.8,
            friction : 0.3,
            density : 1.0
          }
          this.width = 50 ;
          this.height = 50 ;
          this.body = Bodies.rectangle (x,y,this.width,this.height, Pig_options);
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
        fill("lightPink");
        rect (0, 0, this.width,this.height);
        pop();    
    }
    */

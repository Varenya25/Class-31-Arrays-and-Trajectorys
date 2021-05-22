class Ground {
    constructor (x,y, width, height) {
        var ground_options = {
            isStatic : true
          }
          this.width = width ;
          this.height = height ;
          this.body = Bodies.rectangle (x,y,this.width,this.height, ground_options);
          World.add (myWorld, this.body);
          console.log (this.body);

    }

    display () {
        var Pos = this.body.position;
        var angle = this.body.angle;
        push();
        //translate(Pos.x, Pos.y);
        //angleMode (RADIANS)
        //rotate(angle);
        rectMode (CENTER);
        fill("brown");
        rect (Pos.x, Pos.y, this.width,this.height);
        pop();
    }
}
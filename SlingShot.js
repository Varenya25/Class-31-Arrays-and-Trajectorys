class SlingShot {
    constructor (bodyX,pointY) {
         var options = {
            bodyA : bodyX,
            pointB : pointY,
            stiffness : 0.04,
            length : 10
        }
        this.sling1 = loadImage("Images/sling1.png");
        this.sling2 = loadImage("Images/sling2.png");
        this.sling3 = loadImage("Images/sling3.png");
      
        this.slingShot = new Constraint.create (options);
        World.add(myWorld,this.slingShot);
    }

    display () {
       // displaying the images
        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);

        if(this.slingShot.bodyA != null){
            var point1 = this.slingShot.bodyA.position;
            var point2 =  this.slingShot.pointB;
          if(point1.x < 220){
            
            push();
            strokeWeight(7);
            stroke(42,28,8);
            //line(point1.x,point1.y,point2.x,point2.y);
            line(point1.x-20,point1.y,point2.x-10,point2.y);
            line(point1.x-20,point1.y,point2.x+30,point2.y-3);
            image(this.sling3, point1.x-30, point1.y-10, 15, 30);
            pop();

          }else{
            push();
            strokeWeight(5);
            stroke(42,28,8);
            //line(point1.x,point1.y,point2.x,point2.y);
            line(point1.x-25,point1.y,point2.x-10,point2.y);
            line(point1.x+20,point1.y,point2.x+30,point2.y-3);
            image(this.sling3, point1.x+25, point1.y-10, 15, 30);
            pop();

          }
        }
        
    }

    release()  {

     this.slingShot.bodyA = null;

    }

    attach(body) {

      this.slingShot.bodyA = body;
    }
}
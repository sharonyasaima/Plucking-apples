class Stone{

    constructor(x,y,r)
        {
            var options={
                
                restitution:0,
                friction:1,
                density:1.2,
                isStatic:true
                
                
                }
            this.x=x;
            this.y=y;
            this.radius=r
            this.body=Bodies.circle(this.x, this.y, this.radius/2, options);
            this.image=loadImage("stone.png");
           // Matter.Body.setStatic(this.body,true);
            World.add(world, this.body);
    
        }
        display()
        {
                
                var pos=this.body.position;		
    
                push()
                translate(pos.x, pos.y);
                imageMode(CENTER)
                ellipseMode(CENTER)
               // strokeWeight(3);
               // fill(0,0,225)
                image(this.image,0,0,this.radius,this.radius);
                pop()
                
      }
    }
    
    
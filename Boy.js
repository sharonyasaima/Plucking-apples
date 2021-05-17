class Boy{

    constructor(x,y,height,width)
        {
            
            this.x=x;
            this.y=y;
            this.height=height;
            this.width=width;
            this.body=Bodies.rectangle(this.x, this.y, this.height,this.width);
            Matter.Body.setStatic(this.body,true)
            this.image=loadImage("kid.png");
            World.add(world, this.body);
    
        }
        display()
        {
                
                var pos=this.body.position;		
    
                push()
                translate(pos.x, pos.y);
                imageMode(CENTER)
                strokeWeight(3);
                fill(0,0,225)
                image(this.image,0,0,this.height,this.width);
                pop()
                
      }
    }
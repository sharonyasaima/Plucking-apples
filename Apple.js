class Apple{

constructor(x,y,r)
	{
		var options={
			
			restitution:0.1,
			friction:1,
			density:1.2,
			isStatic:true
			
			
			}
		this.x=x;
		this.y=y;
		this.radius=r
		this.body=Bodies.circle(this.x, this.y, this.radius/2, options);
		this.image=loadImage("apple.png");
	//	Matter.Body.setStatic(this.body,true);
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		
            var angle = this.body.angle;
			push()
			translate(pos.x, pos.y);
			rotate(angle);
			imageMode(CENTER)
            strokeWeight(3);
			fill(0,0,225)
			image(this.image,0,0,this.radius,this.radius);
			pop()
			
  }
}


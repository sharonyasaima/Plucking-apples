class Cons {

constructor(bodyA, sling){
  var options = {
      bodyA: bodyA,
      pointB: sling,
      stiffness: 0.004,
      length: 5
  }

  this.pointB= sling
  this.cons = Matter.Constraint.create(options);
  World.add(world, this.cons);
}
attach(body){
  this.cons.bodyA = body;
}

fly(){
  this.cons.bodyA = null;
}

display(){
  
    if(this.cons.bodyA){
      var pointA = this.cons.bodyA.position;
      var pointB = this.pointB;
      push();
      strokeWeight(4)
      stroke(0)
      
         
          line(pointA.x, pointA.y, pointB.x , pointB.y);
         
     pop();
         
        
  }

}
}
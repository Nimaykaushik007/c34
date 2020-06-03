class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,300,height,angle);
    this.image = loadImage("sprites/chair.png");
    Matter.Body.setAngle(this.body, angle);
  }
}
class Circle{
    constructor(xPos,yPos,radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
   
    get surface(){
        return ((this.radius*this.radius)*(Math.PI));
    }

    move(xOffset,yOffset){
        this.xPos = xOffset;
        this.yPos = yOffset;
        return "x = " + xOffset + ", y = " + yOffset;
    }

}

let circle1 = new Circle(2,2,4);

console.log(circle1.move(5,3));
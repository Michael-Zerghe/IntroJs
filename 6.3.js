class Rectangle {
    constructor(topLeftXPos,topLeftYPos,width,length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle){
        return ((otherRectangle.topLeftXPos <= this.topLeftXPos + this.width + otherRectangle.topLeftYPos<= this.topLeftYPos + this.length) && (otherRectangle.topLeftXPos + otherRectangle.width >= this.topLeftXPos  otherRectangle.topLeftYPos + otherRectangle.lenght >= this.topLeftYPos));

    }

}

let Container = [];
let i = 0;
let rectangles = new Rectangle(0,0,0,0);
let a = 0;
while(i<1000){
    rectangles = new Rectangle((Math.floor(Math.random()* 1000)),(Math.floor(Math.random()* 1000)),(Math.floor(Math.random()* 1000)),(Math.floor(Math.random()* 1000)));
    Container.push(rectangles);
    console.log(Container[i]);
    while(a<=i){
        console.log(Container[a].collides(otherRectangle));
        a += 1;
    }
    i+=1;
}
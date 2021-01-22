class Rectangle {
    constructor(topLeftXPos,topLeftYPos,width,length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle){
        return ((otherRectangle.topLeftXPos <= this.topLeftXPos + this.width  otherRectangle.topLeftYPos<= this.topLeftYPos + this.length) && (otherRectangle.topLeftXPos + otherRectangle.width >= this.topLeftXPos  otherRectangle.topLeftYPos + otherRectangle.lenght >= this.topLeftYPos));

    }

}

let rectangle1 = new Rectangle(2,2,2,3);
let rectangle2 = new Rectangle(4,4,5,7);

console.log (rectangle1.collides(rectangle2));
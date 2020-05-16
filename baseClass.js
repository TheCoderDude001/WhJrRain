class baseClass {

    constructor(x,y,h){

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.polygon(x, y, 3, h, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);


    }

    display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        /*imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);*/
        pop();

    }



}
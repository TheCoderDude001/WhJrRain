class rainDrops {

    constructor(){

        var charstring = "1234567890abcde/#@!&"
        this.x = Math.round(random(0,1200))
        this.y = Math.round(random(-10,0))


        this.yspeed = Math.round(random(0,50))
        var number = Math.round(random(0,19))

        this.displaychar = charstring.charAt(number);

    }


    fall(){


        this.y = this.yspeed + this.y

        if(this.y > height){


            this.y = Math.round(random(0,-100))

        }
    }
}

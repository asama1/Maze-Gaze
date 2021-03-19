class Surv {

      constructor() {
        this.body = [];
        this.body[0] = createVector(0, 0);
        this.xdir = 0;
        this.ydir = 0;


      }

      setDir(x, y) {
        this.xdir = x;
        this.ydir = y;

      }

      update() {

        this.body[0].x += this.xdir;
        this.body[0].y += this.ydir;

      }
      show() {
        fill(130, 130, 260)
        ellipse(this.body[0].x, this.body[0].y, ro, ro);
      }
    }

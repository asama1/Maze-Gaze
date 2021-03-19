let surv;
let wall;



function setup() {
  createCanvas(400, 400);
  surv = new Surv();
}

    function keyPressed() {if (key === "d")    {
        surv.setDir(1, 0)

      }else if(key === "a"){
       surv.setDir(-1, 0)
               }else if(key === "s"){
                      surv.setDir(0, 1)
                        }else if(key === "w"){
                               surv.setDir(0, -1)
                     

  }else if(key === "q"){
       surv.setDir(-0.2, 0) }
                           else if(key === "e"){
       surv.setDir(0.2, 0) }else if(key === "r"){
       surv.setDir(0, 0.2) }else if(key === " "){
       surv.setDir(0, 0) }
  } 

  var ro
  ro = 20

  function draw() {
    background(100);
  surv.update();
    surv.show();
    
    fill(10, 120, 10)
    fill(0)
    // Side rectangle = 70, ro
    rect(50, 25, 300, ro);
    // down up rectangle = ro , 60
    rect(40, 45, ro, 60);
    rect(260, 45, ro, 60);
    rect(190, 1, ro, 30);
    //sqaure = 45, 45
    rect(90, 70, 45, 45);
    rect(180, 70, 45, 45);
  }

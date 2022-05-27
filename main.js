function setup(){
    canvas=createCanvas(400,400);
    canvas.position(150,250);
    video=createCapture(VIDEO);
   
    video.hide();
}

function draw(){
    image(video,0,0,400,400);
   stroke(155,205,10);
   fill(100,300,200);

  circle(375,25,50);
  circle(25,25,50);
  circle(25,375,50);
  circle(375,375,50);
}

function take_snapshot(){
    save('myImage.png');
}


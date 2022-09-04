let x = 100;
let v = 0;
let k = 0.01;
let xa = [];
let i = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  fill(0);
  ellipse(200, 200+x, 20, 20);
  line(200, 200, 200, 200+x);
  f = -x*k;
  v = v + f;
  x = x+v;
  
  xa[i] = x;
  i++;
  
  for (let j = i; j>0; j--)
    line(200+j-i, 200+xa[j], 200+j-1-i, 200+xa[j-1]);


  //k = 1/Math.max(50,mouseY);
}

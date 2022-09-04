let x1 = 300;
let v1 = 0;
let k1 = 0.02;
let xa1 = [];
let i1 = 0;

let x2 = 200;
let v2 = 0;
let k2 = 0.3;
let xa2 = [];
let i2 = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  fill(0);
  stroke(0);
  ellipse(200, x1, 20, 20);
  line(200, 200, 200, x1);
  let f1 = -(x1-200)*k1;
  v1 = v1 + f1;
  x1 = x1+v1;
  
  xa1[i1] = x1;
  i1++;
  
  for (let j = i1; j>0; j--)
    line(200+j-i1, xa1[j], 200+j-1-i1, xa1[j-1]);

  fill(128);
  stroke(128);
  ellipse(200, x2, 20, 20);
  line(200, x1, 200, x2);
  let f2 = -(x2-x1)*k2;
  v2 = (v2 + f2)*0.8805;
  x2 = x2+v2;
  
  xa2[i2] = x2;
  i2++;
  
  for (let j = i2; j>0; j--)
    line(200+j-i2, xa2[j], 200+j-1-i2, xa2[j-1]);



  //k = 1/Math.max(50,mouseY);
}

// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Basic Pitch Detection
=== */

let audioContext;
let mic;
let pitch;
let xa = [];
let i = 0;
let freqNotes = [];
let canvasW = 800;
let canvasH = 400;
let lastY=0;
let AFreq = 440;

function setup() {
  createCanvas(800, canvasH);
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);
  calcFreqs();

}

function calcFreqs(){
    for (let j = 1; j <= 108; j++)
    freqNotes[j] = Math.pow(2, (j - 49) / 12) * AFreq;
}

function draw() {
  drawBackgroundPiano(220);

  for (let j = i; j > 0; j--)
    line(canvasW + j - i, canvasH - xa[j] / 5, canvasW + j - 1 - i, canvasH - xa[j - 1] / 5);
}

function drawBackgroundPiano() {
  background(255);
  let b=64;
  let w=192;
  for (let j = 1; j <= 108; j++) {
    switch (j % 12) {
      case 0:
        stroke(b);
        break;
      case 1: //A
        stroke(w);
        break;
      case 2:
        stroke(b);
        break;
      case 3: //B
        stroke(w);
        break;
      case 4: //C
        stroke(w);
        break;
      case 5:
        stroke(b);
        break;
      case 6: //D
        stroke(w);
        break;
      case 7:
        stroke(b);
        break;
      case 8: //E
        stroke(w);
        break;
      case 9: //F
        stroke(w);
        break;
      case 10:
        stroke(b);
        break;
      case 11: //G
        stroke(w);
        break;
      default:
      // code block
    }

    line(0, canvasH - freqNotes[j] / 5, canvasW, canvasH - freqNotes[j] / 5);
  }
}

function startPitch() {
  pitch = ml5.pitchDetection("./model/", audioContext, mic.stream, modelLoaded);
}

function modelLoaded() {
  select("#status").html("Model Loaded");
  getPitch();
}

function getPitch() {
  pitch.getPitch(function (err, frequency) {
    if (frequency>500) {
      select("#result").html(frequency);
      xa[i] = frequency;
      i++;
    } else {
      select("#result").html("No pitch detected");
    }
    getPitch();
  });
}

function mousePressed(){
  
  lastY=mouseY;
}

function mouseDragged(event) {
  AFreq = AFreq-(fromYtoFreq(lastY)-fromYtoFreq(mouseY));
  lastY=mouseY;
  calcFreqs();
}

function fromYtoFreq(y) {
  return (canvasH-y)*5;
}
Status = "";
LightBulb_image = "";

function preload(){
    LightBulb_image = loadImage("Light_Bulb.jpg");
}

function setup(){
    canvas = createCanvas(440,350);
    canvas.center();
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(LightBulb_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(LightBulb_image,0,0,440,350);
}
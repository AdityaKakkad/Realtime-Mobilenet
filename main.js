function setup() {
  canvas = createCanvas(640, 480);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('mobilenet',modelLoaded);
}

function draw() {
  image(video,0,0,640,480);
  classifier.classify(video,gotResult);
}

function modelLoaded() {
  console.log("IAmunkown006 says model is loaded");
}

function gotResult(error,results){
  if(error){
    console.error("There is a error noob fixit and the error is: ",error);
  }
  else{
    console.log("YaY ur a pro with working bits and all of the other things here are the results");
    console.log(results);
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
  }

}

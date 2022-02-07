camera = document.getElementById("camera");
Webcam.attach("#camera");

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="image_captured" src="'+data_uri+'"/>';
    });
};

console.log("ml5 Version : ",ml5.version);
classifier = ml5.ImageClassifier('https://teachablemachine.withgoogle.com/models/7BFnp35FG/',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded Succesfully")
};

function check() {
    img = document.getElementById("image_captured");
    classifier.classify(img, gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_of_objects").innerHTML = result[0].label;
        document.getElementById("result_of_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
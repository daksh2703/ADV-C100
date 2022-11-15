var speechrecognition = window.webkitSpeechRecognition;
var speechrecognition2 = new speechrecognition();
var imgid = "selfie1";

function start() {
    document.getElementById("output").innerHTML = '';
    speechrecognition2.start();
}

speechrecognition2.onresult = function (event) {
    console.log(event);
    var output = event.results[0][0].transcript;
    document.getElementById("output").innerHTML = output;
    if (output == "selfie" || "picture") {
        speak();
    }
}

function speak() {
    speech = window.speechSynthesis;
    texttospeech = "Clicking your pic in 5 seconds"
    audio = new SpeechSynthesisUtterance(texttospeech);
    speech.speak(audio);
    Webcam.attach("webcam");
    setTimeout(function () {
        take_snapshot();
    }, 5000);
    setTimeout(function () {
        imgid = "selfie2";
        take_snapshot();
    }, 10000);
    setTimeout(function () {
        imgid = "selfie3";
        take_snapshot();
    }, 15000);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jepg',
    jpeg_quality: 1000
});

function take_snapshot() {
    Webcam.snap(function (pic) {
        if (imgid == "selfie1") {
            document.getElementById("result1").innerHTML = '<img src="' + pic + '" id="selfie1">';
        }
        if (imgid == "selfie2") {
            document.getElementById("result2").innerHTML = '<img src="' + pic + '" id="selfie2">';
        }

        if (imgid == "selfie3") {
            document.getElementById("result3").innerHTML = '<img src="' + pic + '" id="selfie3">';
        }
    });
}

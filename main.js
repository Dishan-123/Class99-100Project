var speechrecognition = window.webkitSpeechRecognition;
var recognition = new speechrecognition();
var content;


function start()
{
    recognition.start();    
}
recognition.onresult = function(event)
{
    console.log(event);
    content = event.results[0][0].transcript.toLowerCase();
    console.log(content);
    if(content =="selfie")
    {
        console.log("selfie")
        speak();
    }    
}

camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: "jpeg",
    jpeg_quality: 90
});

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        img_id = "selfie1";
        take_selfie();
        speak_data = "taking the next selfie in 10 seconds";
        utterthis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    
    },5000);
    setTimeout(function(){
        img_id = "selfie2";
        take_selfie();
        speak_data = "taking the next selfie in 15 seconds";
        utterthis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    
    },10000);  
    setTimeout(function(){
        img_id = "selfie3";
        take_selfie();
        speak_data = "3 selfies taken. LOOK DOWN";
        utterthis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    
    },15000);
}

function take_selfie()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id == "selfie1")
        {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(img_id == "selfie2")
        {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(img_id == "selfie3")
        {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
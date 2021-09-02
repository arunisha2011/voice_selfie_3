var speechRecognition=window.webkitSpeechRecognition
var recognition=new speechRecognition()
function Start(){
document.getElementById("textbox").innerHTML=" "
recognition.start()
}
recognition.onresult=function Run(event){
console.log(event)
var text_content=event.results[0][0].transcript
console.log(text_content)
document.getElementById("textbox").innerHTML=text_content
if(text_content=="take my selfie"){
    Speak()
}

}
function Speak(){
    var synth=window.speechSynthesis
    var speak_data="taking your selfie in 5 seconds"
    var utterthis=new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterthis)
    console.log("it is working")
    Webcam.attach(camera)
    setTimeout(function(){
        take_snapshot();
        save()
    },5000)
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
})
var camera=document.getElementById("camera")

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">'

})
}
function save(){
    var link=document.getElementById("link")
    var picture=document.getElementById("selfie_image").src
    link.href=picture
    link.click()
}
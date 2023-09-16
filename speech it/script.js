let speech=new SpeechSynthesisUtterance();
let voices=[];
let voiceSelect=document.querySelector("select");
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();//this will provide all the voices available in the device
    speech.voice=voices[0];//means by default it will speak in the default language
voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)));
// now new voices have been added now time to let them speak while they are choosen to do so 


};
voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];//now it will change the speech type to the selected speech type from the dropdown list
})

document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
window.speechSynthesis.speak(speech);
});
let textArea = document.getElementById("text");
let speakButton = document.getElementById("speak-button");
let card = document.getElementById("card")
let cardhun = document.getElementById("card2")
let cardsad = document.getElementById("card3")
let cardhappy = document.getElementById("card4")
let cardfrus = document.getElementById("card5")
let cardsick = document.getElementById("card6")

speakButton.addEventListener("click", function() {
  let text = textArea.value;
  let utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  utterance.voice = window.speechSynthesis.getVoices()[0];
  window.speechSynthesis.speak(utterance);
});

card.addEventListener("click", function(){
  let utter = new SpeechSynthesisUtterance();
  utter.text=card.innerText;
  window.speechSynthesis.speak(utter)
})

cardhun.addEventListener("click", function(){
  let utter = new SpeechSynthesisUtterance();
  utter.text=cardhun.innerText;
  window.speechSynthesis.speak(utter)
})

cardsad.addEventListener("click", function(){
  let utter = new SpeechSynthesisUtterance();
  utter.text=cardsad.innerText;
  window.speechSynthesis.speak(utter)
})

cardhappy.addEventListener("click", function(){
  let utter = new SpeechSynthesisUtterance();
  utter.text=cardhappy.innerText;
  window.speechSynthesis.speak(utter)
})

cardfrus.addEventListener("click", function(){
  let utter = new SpeechSynthesisUtterance();
  utter.text=cardfrus.innerText;
  window.speechSynthesis.speak(utter)
})

cardsick.addEventListener("click", function(){
  let utter = new SpeechSynthesisUtterance();
  utter.text=cardsick.innerText;
  window.speechSynthesis.speak(utter)
})
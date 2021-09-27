window.addEventListener('keydown',function(e){
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
if(!audio) return;
let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
key.classList.add("playy");
audio.currentTime = 0;
audio.play();
});

function removeTransition(e){
 //   if(e.propertyName !== 'transform') return;
    console.log('working till here');
    this.classList.remove('playy');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));


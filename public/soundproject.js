var aud0;
var aud1;
var aud2;
var aud3;
var echoRouter;

function setSound( audio_id ){
   aud0 = document.getElementById( audio_id + '-0');
   aud1 = document.getElementById( audio_id + '-1');
   aud2 = document.getElementById( audio_id + '-2');
   aud3 = document.getElementById( audio_id + '-3');
   echoRouter = 0;
}

function playSound(){

   if( echoRouter == 0 ){
      console.log("zero actv");
      if( !aud0.ended ){
         aud0.load();
      }
      aud0.play();
      echoRouter++;
   } else if( echoRouter == 1){
      console.log( "one actv");
      if( !aud1.ended ){
         aud1.load();
      }
      aud1.play();
      echoRouter++;
   } else if( echoRouter == 2){
      console.log( "two actv");
      if( !aud2.ended ){
         aud2.load();
      }
      aud2.play();
      echoRouter++;
   } else if( echoRouter == 3){
      console.log( "three actv");
      if( !aud3.ended ){
         aud3.load();
      }
      aud3.play();
      echoRouter -= 3;
   }
   
}



var lastActive = "none";

document.addEventListener('keydown', (e) => {
   if (e.code === "KeyQ"){//1
         if( lastActive != 'KeyQ' ){
            setSound('audio1');  
            lastActive = 'KeyQ';
         }
         playSound();
         document.getElementById("piano1").style.border = "inset";
   } else if (e.code === "KeyW"){//2 
         if( lastActive != 'KeyW'){
            setSound('audio2');  
            lastActive = 'KeyW';
         }
         playSound();
         document.getElementById("piano2").style.border = "inset";
   } else if (e.code === "KeyE"){//3
         if( lastActive != 'KeyE'){
            setSound('audio3');  
            lastActive = 'KeyE';
         }
         playSound();
         document.getElementById("piano3").style.border = "inset";
   } else if (e.code === "KeyR"){//4
         if( lastActive != 'KeyR'){
            setSound('audio4');  
            lastActive = 'KeyR';
         }
         playSound();
         document.getElementById("piano4").style.border = "inset";
   } else if (e.code === "KeyT"){//5
         if( lastActive != 'KeyT'){
            setSound('audio5');  
            lastActive = 'KeyT';
         }
         playSound();
         document.getElementById("piano5").style.border = "inset";
   } else if (e.code === "KeyY"){//6
         if( lastActive != 'KeyY'){
            setSound('audio6');  
            lastActive = 'KeyY';
         }
         playSound();
         document.getElementById("piano6").style.border = "inset";
   } else if (e.code === "KeyU"){//7
         if( lastActive != 'KeyU'){
            setSound('audio7');  
            lastActive = 'KeyU';
         }
         playSound();
         document.getElementById("piano7").style.border = "inset";
   } else if (e.code === "KeyI"){//8
         if( lastActive != 'KeyI'){
            setSound('audio8');  
            lastActive = 'KeyI';
         }
         playSound();
         document.getElementById("piano8").style.border = "inset";
   } else if (e.code === "KeyO"){//9
         if( lastActive != 'KeyO'){
            setSound('audio9');  
            lastActive = 'KeyO';
         }
         playSound();
         document.getElementById("piano9").style.border = "inset";
   } else if (e.code === "KeyP"){//10
         if( lastActive != 'KeyP'){
            setSound('audio10'); 
            lastActive = 'KeyP';
         }
         playSound();
         document.getElementById("piano10").style.border = "inset";
   } else if (e.code === "BracketLeft"){//11
         if( lastActive != 'BracketLeft'){
            setSound('audio11'); 
            lastActive = 'BracketLeft';
         }
         playSound();
         document.getElementById("piano11").style.border = "inset";
   } else if (e.code === "BracketRight"){//11
         if( lastActive != 'BracketRight'){
            setSound('audio12'); 
            lastActive = 'BracketRight';
         }
         playSound();
         document.getElementById("piano12").style.border = "inset";
   }
});


document.addEventListener('keyup', (e) => {
   if (e.code === "KeyQ"){//1
         document.getElementById("piano1").style.border = "outset";
   } else if (e.code === "KeyW"){//2 
         document.getElementById("piano2").style.border = "outset";
   } else if (e.code === "KeyE"){//3
         document.getElementById("piano3").style.border = "outset";
   } else if (e.code === "KeyR"){//4
         document.getElementById("piano4").style.border = "outset";
   } else if (e.code === "KeyT"){//5
         document.getElementById("piano5").style.border = "outset";
   } else if (e.code === "KeyY"){//6
         document.getElementById("piano6").style.border = "outset";
   } else if (e.code === "KeyU"){//7
         document.getElementById("piano7").style.border = "outset";
   } else if (e.code === "KeyI"){//8
         document.getElementById("piano8").style.border = "outset";
   } else if (e.code === "KeyO"){//9
         document.getElementById("piano9").style.border = "outset";
   } else if (e.code === "KeyP"){//10
         document.getElementById("piano10").style.border = "outset";
   } else if (e.code === "BracketLeft"){//11
         document.getElementById("piano11").style.border = "outset";
   } else if (e.code === "BracketRight"){//11
         document.getElementById("piano12").style.border = "outset";
   }
});


var key1 = document.getElementById('piano1');
var key2 = document.getElementById('piano2');
var key3 = document.getElementById('piano3');
var key4 = document.getElementById('piano4');
var key5 = document.getElementById('piano5');
var key6 = document.getElementById('piano6');

var key7 = document.getElementById('piano7');
var key8 = document.getElementById('piano8');
var key9 = document.getElementById('piano9');
var key10 = document.getElementById('piano10');
var key11 = document.getElementById('piano11');
var key12 = document.getElementById('piano12');

key1.addEventListener('mousedown', (e) => {
   key1.style.border = "inset";
   if( lastActive != 'KeyQ' ){
         setSound('audio1');  
         lastActive = 'KeyQ';
      }
      playSound();
});

key2.addEventListener('mousedown', (e) => {
   key2.style.border = "inset";
   if( lastActive != 'KeyW' ){
         setSound('audio2');  
         lastActive = 'KeyW';
      }
      playSound();
});

key3.addEventListener('mousedown', (e) => {
   key3.style.border = "inset";
   if( lastActive != 'KeyE' ){
         setSound('audio3');  
         lastActive = 'KeyE';
      }
      playSound();
});

key4.addEventListener('mousedown', (e) => {
   key4.style.border = "inset";
   if( lastActive != 'KeyR' ){
         setSound('audio4');  
         lastActive = 'KeyR';
      }
      playSound();
});

key5.addEventListener('mousedown', (e) => {
   key5.style.border = "inset";
   if( lastActive != 'KeyT' ){
         setSound('audio5');  
         lastActive = 'KeyT';
      }
      playSound();
});

key6.addEventListener('mousedown', (e) => {
   key6.style.border = "inset";
   if( lastActive != 'KeyY' ){
         setSound('audio6');  
         lastActive = 'KeyY';
      }
      playSound();
});

key7.addEventListener('mousedown', (e) => {
   key7.style.border = "inset";
   if( lastActive != 'KeyU' ){
         setSound('audio7');  
         lastActive = 'KeyU';
      }
      playSound();
});

key8.addEventListener('mousedown', (e) => {
   key8.style.border = "inset";
   if( lastActive != 'KeyI' ){
         setSound('audio8');  
         lastActive = 'KeyI';
      }
      playSound();
});

key9.addEventListener('mousedown', (e) => {
   key9.style.border = "inset";
   if( lastActive != 'KeyO' ){
         setSound('audio9');  
         lastActive = 'KeyO';
      }
      playSound();
});

key10.addEventListener('mousedown', (e) => {
   key10.style.border = "inset";
   if( lastActive != 'KeyP' ){
         setSound('audio10'); 
         lastActive = 'KeyP';
      }
      playSound();
});

key11.addEventListener('mousedown', (e) => {
   key11.style.border = "inset";
   if( lastActive != 'BracketLeft' ){
         setSound('audio11'); 
         lastActive = 'BracketLeft';
      }
      playSound();
});

key12.addEventListener('mousedown', (e) => {
   key12.style.border = "inset";
   if( lastActive != 'BracketRight' ){
         setSound('audio12'); 
         lastActive = 'BracketRight';
      }
      playSound();
});

key1.addEventListener('mouseup', (e) => {
   key1.style.border = "outset";
   
});

key2.addEventListener('mouseup', (e) => {
   key2.style.border = "outset";
   
});

key3.addEventListener('mouseup', (e) => {
   key3.style.border = "outset";
   
});

key4.addEventListener('mouseup', (e) => {
   key4.style.border = "outset";
   
});

key5.addEventListener('mouseup', (e) => {
   key5.style.border = "outset";
   
});

key6.addEventListener('mouseup', (e) => {
   key6.style.border = "outset";
   
});

key7.addEventListener('mouseup', (e) => {
   key7.style.border = "outset";
   
});

key8.addEventListener('mouseup', (e) => {
   key8.style.border = "outset";
   
});

key9.addEventListener('mouseup', (e) => {
   key9.style.border = "outset";
   
});

key10.addEventListener('mouseup', (e) => {
   key10.style.border = "outset";
   
});

key11.addEventListener('mouseup', (e) => {
   key11.style.border = "outset";
   
});

key12.addEventListener('mouseup', (e) => {
   key12.style.border = "outset";
   
});
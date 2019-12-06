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


//current problem: a then d in quick succession leads to audible audio chop

var lastActive = "none";

document.addEventListener('keydown', (e) => {
   if (e.code === "KeyA"){
   		if( lastActive != 'KeyA'){
   			setSound('audio1');	
   			lastActive = 'KeyA';
   		}
   		playSound();
   } else if (e.code === "KeyD"){
   		if( lastActive != 'KeyD'){
   			setSound('audio2');	
   			lastActive = 'KeyD';
   		}
   		playSound();
   }
});
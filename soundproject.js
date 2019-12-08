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
   		if( lastActive != 'KeyQ'){
   			setSound('audio1');	
   			lastActive = 'KeyQ';
   		}
   		playSound();
   } else if (e.code === "KeyW"){//2 
   		if( lastActive != 'KeyW'){
   			setSound('audio2');	
   			lastActive = 'KeyW';
   		}
   		playSound();
   } else if (e.code === "KeyE"){//3
   		if( lastActive != 'KeyE'){
   			setSound('audio3');	
   			lastActive = 'KeyE';
   		}
   		playSound();
   } else if (e.code === "KeyR"){//4
   		if( lastActive != 'KeyR'){
   			setSound('audio4');	
   			lastActive = 'KeyR';
   		}
   		playSound();
   } else if (e.code === "KeyT"){//5
   		if( lastActive != 'KeyT'){
   			setSound('audio5');	
   			lastActive = 'KeyT';
   		}
   		playSound();
   } else if (e.code === "KeyY"){//6
   		if( lastActive != 'KeyY'){
   			setSound('audio6');	
   			lastActive = 'KeyY';
   		}
   		playSound();
   } else if (e.code === "KeyU"){//7
   		if( lastActive != 'KeyU'){
   			setSound('audio7');	
   			lastActive = 'KeyU';
   		}
   		playSound();
   } else if (e.code === "KeyI"){//8
   		if( lastActive != 'KeyI'){
   			setSound('audio8');	
   			lastActive = 'KeyI';
   		}
   		playSound();
   } else if (e.code === "KeyO"){//9
   		if( lastActive != 'KeyO'){
   			setSound('audio9');	
   			lastActive = 'KeyO';
   		}
   		playSound();
   } else if (e.code === "KeyP"){//10
   		if( lastActive != 'KeyP'){
   			setSound('audio10');	
   			lastActive = 'KeyP';
   		}
   		playSound();
   } else if (e.code === "BracketLeft"){//11
   		if( lastActive != 'BracketLeft'){
   			setSound('audio11');	
   			lastActive = 'BracketLeft';
   		}
   		playSound();
   } else if (e.code === "BracketRight"){//11
   		if( lastActive != 'BracketRight'){
   			setSound('audio12');	
   			lastActive = 'BracketRight';
   		}
   		playSound();
   }
});
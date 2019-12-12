if(document.getElementsByTagName("TITLE")[0].innerText == "Home")
{
	var searchText = document.getElementById("search-text");
	var instruments = document.getElementsByClassName("instrument-container");
	var searchButton = document.getElementById("filter-update-button");

	searchButton.addEventListener('click', filter);
}

function filter(event)
{
	for(var i=0; i < instruments.length; i++)
	{
		if(instruments[i].childNodes[3].childNodes[1].text.toLowerCase().indexOf(searchText.value.toLowerCase()) < 0)
		{
			instruments[i].style.display = 'none';
		}
		else
		{
			instruments[i].style.display= 'inline-block';
		}
	}
}

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


var recordedText = "";
var recordInstrument = document.getElementsByTagName("TITLE")[0].innerText;

var lastActive = "none";



var recButton = document.getElementById('record-button');
var isRecord = 1;

console.log("this section read");

recButton.addEventListener('mousedown', (e) => {
   console.log("isRecord is " + isRecord);
   if( isRecord == 1 ){
      recButton.innerText = "Stop Recording";
      recordedText = "";
   } else if( isRecord == 3){
      recButton.innerText = "Record";

      var stringArray = recordedText.split(" ");
      
      console.log(stringArray);
      
      for(var i = 0; i < stringArray.length - 1; i++){
         stringArray.splice(i,1);
      }
      stringArray.splice(stringArray.length, 1);
      recordedText = stringArray.join(" ");

      console.log( recordedText );

      var postRequest = new XMLHttpRequest();
      var requestURL = '/recordings.html/addRecording';
      postRequest.open('POST', requestURL);

      var requestBody = JSON.stringify({
        "recordingsText": recordedText,
        "instrumentName": recordInstrument
      });

      console.log("== requestBody:", requestBody);
      postRequest.setRequestHeader('Content-Type', 'application/json');

      postRequest.addEventListener('load', function (event) {
         if (event.target.status !== 200) {
           var responseBody = event.target.response;
           alert("Error saving recording on server side: " + responseBody);
         } else{
            console.log("sent to server");
         }
      });

      postRequest.send(requestBody);

   }
   isRecord += 1;
   if(isRecord == 5){
         isRecord = 1;
   }

});




document.addEventListener('keydown', (e) => {
   if (e.code === "KeyQ"){//1
         if( lastActive != 'KeyQ' ){
            setSound('audio1');
            lastActive = 'KeyQ';
         }
         playSound();
         document.getElementById("piano1").style.border = "inset";
         if( recordInstrument == "Piano" ){
            recordedText += "C ";
         } else if( recordInstrument == "Guitar" ){
            recordedText += "1 ";
         } else if( recordInstrument == "Seal" ){
            recordedText += "GEEEEOOWWWW BEEAABUUTU ";
         }
   } else if (e.code === "KeyW"){//2
         if( lastActive != 'KeyW'){
            setSound('audio2');
            lastActive = 'KeyW';
         }
         playSound();
         document.getElementById("piano2").style.border = "inset";
         if( recordInstrument == "Piano" ){
            recordedText += "C# ";
         } else if( recordInstrument == "Guitar" ){
            recordedText += "2 ";
         }
   } else if (e.code === "KeyE"){//3
         if( lastActive != 'KeyE'){
            setSound('audio3');
            lastActive = 'KeyE';
         }
         playSound();
         document.getElementById("piano3").style.border = "inset";
         if( recordInstrument == "Piano" ){
            recordedText += "D ";
         } else if( recordInstrument == "Guitar" ){
            recordedText += "3 ";
         }
   } else if (e.code === "KeyR"){//4
         if( lastActive != 'KeyR'){
            setSound('audio4');
            lastActive = 'KeyR';
         }
         playSound();
         document.getElementById("piano4").style.border = "inset";
         if( recordInstrument == "Piano" ){
            recordedText += "D# ";
         } else if( recordInstrument == "Guitar" ){
            recordedText += "4 ";
         }
   } else if (e.code === "KeyT"){//5
         if( lastActive != 'KeyT'){
            setSound('audio5');
            lastActive = 'KeyT';
         }
         playSound();
         document.getElementById("piano5").style.border = "inset";
         if( recordInstrument == "Piano" ){
            recordedText += "E ";
         }
   } else if (e.code === "KeyY"){//6
         if( lastActive != 'KeyY'){
            setSound('audio6');
            lastActive = 'KeyY';
         }
         playSound();
         document.getElementById("piano6").style.border = "inset";
         if( recordInstrument == "Piano" ){
            recordedText += "F ";
         }
   } else if (e.code === "KeyU"){//7
         if( lastActive != 'KeyU'){
            setSound('audio7');
            lastActive = 'KeyU';
         }
         playSound();
         document.getElementById("piano7").style.border = "inset";
         if( recordInstrument == "Piano" ){
            recordedText += "F# ";
         }
   } else if (e.code === "KeyI"){//8
         if( lastActive != 'KeyI'){
            setSound('audio8');
            lastActive = 'KeyI';
         }
         playSound();
         document.getElementById("piano8").style.border = "inset";
         if( recordInstrument == "Piano" ){
            recordedText += "G ";
         }
   } else if (e.code === "KeyO"){//9
         if( lastActive != 'KeyO'){
            setSound('audio9');
            lastActive = 'KeyO';
         }
         playSound();
         document.getElementById("piano9").style.border = "inset";
         if( recordInstrument == "Piano" ){
            recordedText += "G# ";
         }
   } else if (e.code === "KeyP"){//10
         if( lastActive != 'KeyP'){
            setSound('audio10');
            lastActive = 'KeyP';
         }
         playSound();
         document.getElementById("piano10").style.border = "inset";
         if( recordInstrument == "Piano" ){
            recordedText += "A ";
         }
   } else if (e.code === "BracketLeft"){//11
         if( lastActive != 'BracketLeft'){
            setSound('audio11');
            lastActive = 'BracketLeft';
         }
         playSound();
         document.getElementById("piano11").style.border = "inset";
         if( recordInstrument == "Piano" ){
            recordedText += "A# ";
         }
   } else if (e.code === "BracketRight"){//11
         if( lastActive != 'BracketRight'){
            setSound('audio12');
            lastActive = 'BracketRight';
         }
         playSound();
         document.getElementById("piano12").style.border = "inset";
         if( recordInstrument == "Piano" ){
            recordedText += "B ";
         }
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
   if( recordInstrument == "Piano" ){
      recordedText += "C ";
   } else if( recordInstrument == "Guitar" ){
      recordedText += "1 ";
   } else if( recordInstrument == "Seal" ){
      recordedText += "GEEEEOOWWWW BEEAABUUTU ";
   }
});

key2.addEventListener('mousedown', (e) => {
   key2.style.border = "inset";
   if( lastActive != 'KeyW' ){
      setSound('audio2');
      lastActive = 'KeyW';
   }
   playSound();
   if( recordInstrument == "Piano" ){
      recordedText += "C# ";
   } else if( recordInstrument == "Guitar" ){
      recordedText += "2 ";
   }
});

key3.addEventListener('mousedown', (e) => {
   key3.style.border = "inset";
   if( lastActive != 'KeyE' ){
      setSound('audio3');
      lastActive = 'KeyE';
   }
   playSound();
   if( recordInstrument == "Piano" ){
      recordedText += "D ";
   } else if( recordInstrument == "Guitar" ){
      recordedText += "3 ";
   }
});

key4.addEventListener('mousedown', (e) => {
   key4.style.border = "inset";
   if( lastActive != 'KeyR' ){
      setSound('audio4');
      lastActive = 'KeyR';
   }
   playSound();
   if( recordInstrument == "Piano" ){
      recordedText += "D# ";
   } else if( recordInstrument == "Guitar" ){
      recordedText += "4 ";
   }
});

key5.addEventListener('mousedown', (e) => {
   key5.style.border = "inset";
   if( lastActive != 'KeyT' ){
      setSound('audio5');
      lastActive = 'KeyT';
   }
   playSound();
   if( recordInstrument == "Piano" ){
      recordedText += "E ";
   }
});

key6.addEventListener('mousedown', (e) => {
   key6.style.border = "inset";
   if( lastActive != 'KeyY' ){
         setSound('audio6');
         lastActive = 'KeyY';
      }
   playSound();
   if( recordInstrument == "Piano" ){
      recordedText += "F ";
   }
});

key7.addEventListener('mousedown', (e) => {
   key7.style.border = "inset";
   if( lastActive != 'KeyU' ){
         setSound('audio7');
         lastActive = 'KeyU';
   }
   playSound();
   if( recordInstrument == "Piano" ){
      recordedText += "F# ";
   }
});

key8.addEventListener('mousedown', (e) => {
   key8.style.border = "inset";
   if( lastActive != 'KeyI' ){
         setSound('audio8');
         lastActive = 'KeyI';
   }
   playSound();
   if( recordInstrument == "Piano" ){
      recordedText += "G ";
   }
});

key9.addEventListener('mousedown', (e) => {
   key9.style.border = "inset";
   if( lastActive != 'KeyO' ){
         setSound('audio9');
         lastActive = 'KeyO';
   }
   playSound();
   if( recordInstrument == "Piano" ){
      recordedText += "G# ";
   }
});

key10.addEventListener('mousedown', (e) => {
   key10.style.border = "inset";
   if( lastActive != 'KeyP' ){
         setSound('audio10');
         lastActive = 'KeyP';
   }
   playSound();
   if( recordInstrument == "Piano" ){
      recordedText += "A ";
   }
});

key11.addEventListener('mousedown', (e) => {
   key11.style.border = "inset";
   if( lastActive != 'BracketLeft' ){
         setSound('audio11');
         lastActive = 'BracketLeft';
   }
   playSound();
   if( recordInstrument == "Piano" ){
      recordedText += "A# ";
   }
});

key12.addEventListener('mousedown', (e) => {
   key12.style.border = "inset";
   if( lastActive != 'BracketRight' ){
         setSound('audio12');
         lastActive = 'BracketRight';
   }
   playSound();
   if( recordInstrument == "Piano" ){
      recordedText += "B ";
   }
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



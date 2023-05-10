const unicodeKatakana = [12450, 12452, 12454, 12456, 12458, 12459, 12460, 12461, 12462, 12463, 12464, 12465, 12466, 12467, 12468, 12469, 12470, 12471, 12472, 12473, 12474, 12475, 12476, 12477, 12478, 12479, 12480, 12481, 12482 , 12484, 12485, 12486, 12487, 12488, 12489, 12490, 12491, 12492, 12493, 12494, 12495, 12496, 12497, 12498, 12499, 12500, 12501, 12502, 12503, 12504, 12505, 12506, 12507, 12508, 12509, 12510, 12511, 12512, 12513, 12514 , 12516, 12518 , 12520, 12521, 12522, 12523, 12524, 12525 , 12527, 12528, 12529, 12530, 12531, 12532 , 12535, 12536, 12537, 12538 ]
const answerKatakana = ["A", "I", "U", "E", "O", "KA", "GA", "KI", "GI", "KU", "GU", "KE", "GE", "KO", "GO", "SA", "ZA", "SI", "ZI", "SU", "ZU", "SE", "ZE", "SO", "ZO", "TA", "DA", "TI", "DI", "TU", "DU", "TE", "DE", "TO", "DO", "NA", "NI", "NU", "NE", "NO", "HA", "BA", "PA", "HI", "BI", "PI", "HU", "BU", "PU", "HE", "BE", "PE", "HO", "BO", "PO", "MA", "MI", "MU", "ME", "MO", "YA", "YU", "YO", "RA", "RI", "RU", "RE", "RO", "WA", "WI", "WE", "WO", "N", "VU", "VA", "VI", "VE", "VO"]

let randomNumber = 1
let numba = 0
let style = "Katakana"
let dataNumber = 0

//Create a random list from Katakana and the Solutions
let randomUnicodeKatakana = [12450, 12452, 12454, 12456, 12458, 12459, 12460, 12461, 12462, 12463, 12464, 12465, 12466, 12467, 12468, 12469, 12470, 12471, 12472, 12473, 12474, 12475, 12476, 12477, 12478, 12479, 12480, 12481, 12482 , 12484, 12485, 12486, 12487, 12488, 12489, 12490, 12491, 12492, 12493, 12494, 12495, 12496, 12497, 12498, 12499, 12500, 12501, 12502, 12503, 12504, 12505, 12506, 12507, 12508, 12509, 12510, 12511, 12512, 12513, 12514 , 12516, 12518 , 12520, 12521, 12522, 12523, 12524, 12525 , 12527, 12528, 12529, 12530, 12531, 12532 , 12535, 12536, 12537, 12538 ]
randomUnicodeKatakana.sort(() => Math.random() - 0.5);

function createAnswerList(randomUnicodeKatakana, answerKatakana, unicodeKatakana){
  var answerToRandomKatakana = [];
  for (var i = 0; i < randomUnicodeKatakana.length; i++) {
    var index = unicodeKatakana.indexOf(randomUnicodeKatakana[i]);
    answerToRandomKatakana[i] = answerKatakana[index];
  }
  return answerToRandomKatakana;
}

let answerToRandomKatakana = createAnswerList(randomUnicodeKatakana, answerKatakana, unicodeKatakana)




//create new symbol
function newSymbol(){
  if(numba<randomUnicodeKatakana.length){
    var div = document.createElement("div");
    div.id = numba;
    div.style.fontSize="11vh";
    div.style.textAlign="center";
    div.style.margin="2%";
    div.innerText =  String.fromCharCode(randomUnicodeKatakana[numba]);
    div.setAttribute("draggable", "true");
    div.setAttribute("ondragstart","drag(event)");
    document.getElementById("div5").appendChild(div);
    numba = numba +1;
  }
}

//Allow drop
function allowDrop(ev) {
    ev.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }

//Drag
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

//Drop
function drop(ev) {
  if(ev.target!=document.getElementById("div5")){
    console.log
    ev.preventDefault();
    //drag&drop element
    var data = ev.dataTransfer.getData("text");
    var copyDiv = document.getElementById(data);
    fromCenter = document.getElementById("div5").contains(copyDiv)
    copyDiv.style.fontSize="5vh";
    ev.target.appendChild(copyDiv); 

    if(fromCenter){
    newSymbol();
    }
  }
}

//Functions to change text to symbol or symbol to text
function changeStyle(){
  if(style == "Katakana"){
    symbolToText();
    style = "Text";
    document.getElementById("button").innerHTML = "To Katakana";
  }
  else{
    textToSymbol();
    style = "Katakana";
    document.getElementById("button").innerHTML = "To Text";
  }
}

function symbolToText(){
  for(var i = 0; i < numba; i++){
      divInnerText = document.getElementById(i).innerText
      index = randomUnicodeKatakana.indexOf(divInnerText.charCodeAt(0))
      document.getElementById(i).innerText = answerToRandomKatakana[index]
  }
}

function textToSymbol(){
  for(var i = 0; i < numba; i++){
      divInnerText = document.getElementById(i).innerHTML
      index = answerToRandomKatakana.indexOf(divInnerText)
      document.getElementById(i).innerText = String.fromCharCode(randomUnicodeKatakana[index])
  }
}

newSymbol();
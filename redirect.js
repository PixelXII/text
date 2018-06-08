var output = "<strong>text</strong> <br> <br> <br> <strong>visuals</strong>"
var inElement = document.getElementById('input');
var outElement = document.getElementById('out');
var out2 = document.getElementById('out2');
var command;
var noteElem = document.getElementById('note');
setInterval(printOut(output), 100)

function printOut(mess, mess2) {
  outElement.innerHTML = mess
  if(mess2 != null) {
	  out2.innerHTML = mess2;
  }
}

function doAction() {
	command = inElement.value;
	inElement.value = ''
	if(command == 'visuals' || command == 'visual') {
 	     location = './visuals/'
	} else if(command == 'text' || command == 'Text') {
		location = './text/'
	} 
}

inElement.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      doAction()
    }
});

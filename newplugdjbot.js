//------  PLUG.DJ BOT 2016+ -----//
//------ BY STEAM ID DEFENDERREWINDZ -----//
//-- To Do:
//-- Black List/White List
//-- Farm Mode
//-- Anti-Bot (Auto-Chatting/Humanizer type thing)

prevSong = "";
doEcho = true;
doWoot = true;
doGrab = false;

function createMenu(){
	list = $('#app').children()[3].children[1];
	
	wootButton = document.createElement('div');
	wootButton.setAttribute('class', 'item');
	wootButton.setAttribute('onclick', 'wootClick()');
	wootButton.innerHTML = '<span>Auto-Woot On</span>';
	
	echoButton = document.createElement('div');
	echoButton.setAttribute('class', 'item');
	echoButton.setAttribute('onclick', 'echoClick()');
	echoButton.innerHTML = '<span>Echoing On</span>';
	
	grabButton = document.createElement('div');
	grabButton.setAttribute('class', 'item');
	grabButton.setAttribute('onclick', 'grabClick()');
	grabButton.innerHTML = '<span>Auto-Grab Off</span>';
	
	list.appendChild(wootButton);
	list.appendChild(echoButton);
	list.appendChild(grabButton);
}

function wootClick(){
	doWoot = !doWoot;
	if(doWoot)wootButton.innerHTML = '<span> Auto-Woot On</span>';
	else wootButton.innerHTML = '<span> Auto-Woot Off</span>';
}

function echoClick(){
	doEcho = !doEcho;
	if(doEcho)echoButton.innerHTML = '<span>Echoing On</span>';
	else echoButton.innerHTML = '<span>Echoing Off</span>';
}

function grabClick(){
	doGrab = !doGrab;
	if(doGrab)grapButton.innerHTML = '<span>Auto-Grab On</span>';
	else grabButton.innerHTML = '<span>Auto-Grab Off</span>';
}

function wootCheck(){
	echo("Woot bot checking...");
	if(API.getMedia().cid != prevSong){
		if(!doWoot){
			echo("Auto-Woot disabled!");
		}else{
			echo("Song has changed wooting!");
			woot();
		}
		if(doGrab)grab();
		prevSong = API.getMedia().cid;
	}else{
		echo("Song detected as the same!");
	}
}

function echo(msg){
	if(!doEcho)return;
	console.log("REWINDZ PLUGDJ BOT: " + msg);
}

function grab(){
	
}

function woot(){
	$('#woot').click();
}

createMenu();

window.setInterval(wootCheck, 5000);
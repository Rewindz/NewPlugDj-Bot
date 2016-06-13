//------  PLUG.DJ BOT 2016+ -----//
//------ BY STEAM ID DEFENDERREWINDZ -----//
//-- To Do:
//-- Menu
//-- Black List/White List
//-- 

prevSong = "";
doEcho = true;
doWoot = true;

function createMenu(){
	list = $('.list')[2];
	
	wootButton = document.createElement('div');
	wootButton.setAttribute('class', 'item');
	wootButton.setAttribute('onclick', 'wootClick()');
	wootButton.innerHTML = '<span>Auto-Woot On</span>';
	
	echoButton = document.createElement('div');
	echoButton.setAttribute('class', 'item');
	echoButton.setAttribute('onclick', 'echoClick()');
	echoButton.innerHTML = '<span>Echoing On</span>';
	
	list.appendChild(wootButton);
	list.appendChild(echoButton);
}

function wootClick(){
	doWoot = !doWoot;
	if(doWoot)wootButton.innerHTML('<span> Auto-Woot On</span>');
	else wootButton.innerHTML('<span> Auto-Woot Off</span>');
}

function echoClick(){
	doEcho = !doEcho;
	if(doEcho)echoButton.innerHTML('<span>Echoing On</span>');
	else echoButton.innerHTML('<span>Echoing Off</span>');
}

function wootCheck(){
	echo("Woot bot checking...");
	if(!doWoot){
		echo("Auto-Woot disabled!");
	}
	if(API.getMedia().cid != prevSong){
		echo("Song has changed wooting!");
		woot();
		prevSong = API.getMedia().cid;
	}else{
		echo("Song detected as the same!");
	}
}

function echo(msg){
	if(!doEcho)return;
	console.log("REWINDZ PLUGDJ BOT: " + msg);
}

function woot(){
	$('#woot').click();
}

createMenu();

window.setInterval(wootCheck, 5000);
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
	wootButton.class = 'item';
	wootButton.onclick = 'wootClick';
	wootButton.innerHTML = '<span>Toggle Auto Woot</span>';
	
	echoButton = document.createElement('div');
	echoButton.class = 'item';
	echoButton.onclick = 'echoClick';
	echoButton.innerHTML = '<span>Toggle Echoing</span>';
	
	list.appendChild(wootButton);
	list.appendChild(echoButton);
}

function wootClick(){
	doWoot = !doWoot;
}

function echoClick(){
	doEcho = !doEcho;
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
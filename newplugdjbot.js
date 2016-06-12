//------  PLUG.DJ BOT 2016+ -----//
//------ BY STEAM ID DEFENDERREWINDZ -----//

prevSong = "";

function startBot(){
	echo("Woot bot checking...");
	if(API.getMedia().cid != prevSong){
		echo("Song has changed wooting!");
		woot();
		prevSong = API.getMedia().cid;
	}else{
		echo("Song detected as the same!");
	}
}

function echo(msg){
	console.log("REWINDZ PLUGDJ BOT: " + msg);
}

function woot(){
	$('#woot').click();
}

startBot();
window.setInterval(startBot, 5000);
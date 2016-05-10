function countWords(str) {
	var count= 0;
	str = str.replace(/^\s*|\s*$/g,'');
	str = str.replace(/\s+/g,' ');
	words = str.split(" ");
	for(i=0; i< words.length;i++){
		if(words[i] !="")
			count +=1;
	}
	//document.getElementById("word_count").innerHTML=count;
	$("#word_count").html(count);
	
	if(count>=100){
		$('#reward1').prop('disabled',false);
	}
	if(count>=200){
		$('#reward2').prop('disabled',false);
	}
	if(count>=500){
		$('#reward3').prop('disabled',false);
	}
	if(count>=800){
		$('#reward4').prop('disabled',false);
	}
	if(count>=1000){
		$('#reward5').prop('disabled',false);
	}
	if(count>=1667){
		$('#reward6').prop('disabled',false);
	}
};	

window.onload = function(){
	
	var trollcheckbox = document.getElementById("dancingtroll");
	var img = document.createElement("img");
	var textInput = document.getElementById("input");
	var timer;
	var audio = new Audio('Troll Song.mp3');
	var audio2 = new Audio('loser.mp3');
	var audio3 = new Audio('rainloop.wav');
	var audio4 = new Audio('thunderstormloop.wav');
	var audio5 = new Audio('frogloop.wav');
	var audio6 = new Audio('fireplaceloop.wav');
	var audio7 = new Audio('oceanloop.wav');
	var audio8 = new Audio('Zombie Hoodoo.mp3');

	var ran = Math.floor(Math.random() * 100) + 1;
	if(ran==1){
		var elem = document.getElementById('l').style.visibility = "visible";
		$('#l').fadeOut('slow');
	}
	
	function alertFunc(){
		if(trollcheckbox.checked){
		img.src = "awesomedance.gif";
		document.getElementById("imagearea").appendChild(img);
		var rand = Math.floor(Math.random() * 2) + 1;
		if(rand==1){
		audio.play();
		}
		else{audio2.play()};
		}
	}
	
	textInput.onkeyup = function myfunc2(){
		if(trollcheckbox.checked){
			if(timer) window.clearTimeout(timer);
			timer=window.setTimeout(function(){alertFunc();},5000);
		}
		
	}
	
	textInput.onkeypress = function myfunc(){
		if(timer) window.clearTimeout(timer);
		audio.pause();
		audio2.pause();
		document.getElementById("imagearea").removeChild(img);
	}
	
	$('#reward1').click(function(){
		if(this.checked){
			audio3.play();
			audio3.loop=true;
		}
		else{audio3.pause();}
	});
	$('#reward2').click(function(){
		if(this.checked){
			audio4.play();
			audio4.loop=true;
		}
		else{audio4.pause();}
	});
	$('#reward3').click(function(){
		if(this.checked){
			audio5.play();
			audio5.loop=true;
		}
		else{audio5.pause();}
	});
	$('#reward4').click(function(){
		if(this.checked){
			audio6.play();
			audio6.loop=true;
		}
		else{audio6.pause();}
	});
	$('#reward5').click(function(){
		if(this.checked){
			audio7.play();
			audio7.loop=true;
		}
		else{audio7.pause();}
	});
	$('#reward6').click(function(){
		if(this.checked){
			audio8.play();
			audio8.loop=true;
		}
		else{audio8.pause();}
	});
};


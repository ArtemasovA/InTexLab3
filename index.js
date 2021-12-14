let time = -1;
var random = 1;
$(document).ready(function(){
	$(".time-input").change(TimeChange);
	SetupBackgroundWithTime();
})

function TimeChange(){
	time = $(".time-input").val() * 1000;
	SetTimer();
	console.log("Time has been changed");
}

function SetupNewImage(){
	random ++;
	$("#rimage").attr("src", 'https://picsum.photos/800/600?random=' + random);

	if (time != -1){
		setTimeout(SetupNewImage,time);	
	}

}

function SetTimer(){
	setTimeout(SetupNewImage,time);	
}

function SetupBackgroundWithTime(){
	var currentTime = new Date();
	
	var r = currentTime.getHours();
	var g = currentTime.getMinutes();
	var b = currentTime.getSeconds();
	
	var rgb = 'rgb(' + r*2 + ',' + g*2 + ',' + b*2 + ');';
	
	if (currentTime.getHours() >= 4 && currentTime.getHours() < 6){
		$("body").css("background-color", "#1098F7");
	}
	
	if (currentTime.getHours() >= 6 && currentTime.getHours() < 8){
		$("body").css("background-color", "#B89E97");
	}
	
	if (currentTime.getHours() >= 8 && currentTime.getHours() < 10){
		$("body").css("background-color", "#DECCCC");
	}
	
	if (currentTime.getHours() >= 10 && currentTime.getHours() < 12){
		$("body").css("background-color", "#DCD6F7");
	}	
	
	if (currentTime.getHours() >= 12 && currentTime.getHours() < 14){
		$("body").css("background-color", "#A6B1E1");
	}
	
	if (currentTime.getHours() >= 14 && currentTime.getHours() < 16){
		$("body").css("background-color", "#CACFD6");
	}
	
	if (currentTime.getHours() >= 16 && currentTime.getHours() < 18){
		$("body").css("background-color", "#D6E5E3");
	}
	
	if (currentTime.getHours() >= 18 && currentTime.getHours() < 20){
		$("body").css("background-color", "#D2F1E4");
	}
	
	if (currentTime.getHours() >= 20 || currentTime.getHours() < 4){
		$("body").css("background-color", "#DAD2D8");
	}
}

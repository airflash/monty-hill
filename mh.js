var N = 3;
CHANGE = false;

function play() {
	var a = [0, 0, 0]	
	//generate prize
	rand = Math.floor(Math.random() * N);
	a[rand] = 1;
	//document.write(a);
	//document.write("<br>");
	

	//user choise
	rand = Math.floor(Math.random() * N);
	if (a[rand] == 1)
		return true;

	//reduce doors
	if (rand == 0) {
		if(a[1] == true) a[2] = -1;
		if(a[2] == true) a[1] = -1;
	}

	if (rand == 1) {
		if(a[0]== true) a[2] = -1;
		if(a[2]== true) a[0] = -1;
	}

	if (rand == 2) {
		if(a[0]== true) a[1] = -1;
		if(a[1]== true) a[0] = -1;
	}

	if (CHANGE) {
		if (rand == 0) {
			if(a[1] == -1) rand = 2;
			if(a[2] == -1) rand = 1;
		}
		if (rand == 1) {
			if(a[0] == -1) rand = 2;
			if(a[2] == -1) rand = 0;
		}
		if (rand == 2) {
			if(a[0] == -1) rand = 1;
			if(a[1] == -1) rand = 0;
		}
	}

	if (a[rand] == 1)
		return true;
	else 
		return false;	
}


wins = 0;
looses = 0;

for (var i = 0; i < 1000; i++) {
	play() ? wins++ : looses++;
}

document.write("WINS:" , wins);
document.write("<br>");
document.write("LOOSES:", looses);

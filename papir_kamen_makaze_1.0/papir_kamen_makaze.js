var korisnik = prompt("Izaberi papir, kamen ili makaze");
var racunar = Math.random();
	
	
	
	if (korisnik === "papir") {
		console.log ("David je izabrao papir");
	}

	else if (korisnik === "kamen") {
		console.log ("David je izabrao kamen");
	}

	else if (korisnik === "makaze") {
		console.log ("David je izabrao makaze");
	}

	else {
		korisnik = prompt("I'm sory Dave, I'm afraid I cant do that. \n Dave - What's the problem? \n HAL - I think you know what the problem is just as well as I do.. NEGO MORE IZABERI papir, kamen ILI makaze!");
	}

	if (racunar <= 0.33) {
		racunar = "papir";
		console.log("HAL je izabrao papir");
	} 

	else if (racunar<= 0.67) {
		racunar = "kamen";
		console.log("HAL je izabrao kamen");
	}

	else {
		racunar = "makaze";
		console.log("HAL je izabrao makaze");
	}

	if (korisnik === racunar) {
		console.log ("nereseno");
	}

	else if (korisnik === "papir") {
		if (racunar === "kamen") {
			console.log ("David je pobedio");
		}

		else {
			console.log ("HAL je pobedio");
		}
	}

	else if (korisnik === "makaze") {
		if (racunar === "papir") {
			console.log ("David je pobedio");
		}

		else {
			console.log ("HAL je pobedio");
		}
	}
	
	else {
		if (racunar === "papir") {
			console.log ("HAL je pobedio");
		}

		else {
			console.log ("David je pobedio");
		}
	}

	
	


	
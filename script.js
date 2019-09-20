//
// NOTES:
// Optimize by breaking down into if functions, similar to the pictures.
//
// CURRENT BUGS:
//
//
//Beento Variables
beentobedroom = true;
beentobathroom = false;
beenoutsidemroom = false;
beentowindow = false;
//
//Search Variable
searchtable = false;
searchwoman = false;
//
//Current Room
currentroom = "bedroom";
//
//Eating
eatwoman = false;
//
//Inventory
gun = false;
wallet = false;
jacket = false;
matches = false;
brush = false;
bible = false;
pen = false;
key = false;
bike = false;
chinesefood = false;
woman = false;
takewoman = false;
//
//
$(document).ready(function() {
	$("#console").fadeIn(3000);
	$("#message_start").fadeIn(3000);
	// $("#area_bedroom").fadeIn(3000);
	// $("#command_line").fadeIn(3000);
	// When button is clicked, stores HTML value attribute in input
	$("button").click(function() {
		var input = $(this).val();
		$("#start").fadeOut(500);
		//
		//help
		if (input.indexOf("help") > -1) {
			if (input == "help") {
				$("#message_help").clone().insertBefore("#placeholder").fadeIn(1000);
			}
		}
		//end help
		//

		//
		//start
		if (input.indexOf("start") > -1) {
			if (input == "start") {
				$("#area_bedroom").clone().insertBefore("#placeholder").fadeIn(1000);
				$("#choice_menu").fadeIn(3000);
			}
		}
		//end start
		//

		//
		// take
		else if (input.indexOf("take") > -1 || input.indexOf("read") > -1) {
			if (input == "take") {
				$('<p>Take what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//gun
			else if (input == "take gun") {
				if (currentroom == "bedroom" && gun == false) {
					gun = true;
					$('<p>You picked up the gun. It is a 9mm with 15 rounds in its chamber. Hmm. You might need this for later so you tuck it beneath your belt.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			// wallet
			else if (input == "take wallet") {
				if (currentroom == "bedroom" && wallet == false) {
					wallet = true;
					$('<p>You picked up the wallet and placed it into your pocket.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			// jacket
			else if (input == "take jacket") {
				if (currentroom == "bedroom" && jacket == false) {
					jacket = true;
					matches = true;
					$('<p>You picked up and put on the jacket. Inside the pockets, you find matches. Cool!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			// chinese take out
			else if (input == "take chinese take out" || input == "take chinese food" || input == "take chinese takeout"){
				if (currentroom == "bedroom" && chinesefood == false){
					chinesefood = true;
					$('<p>You picked up the Chinese take out. Hmmm. It still seems to be good!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			// woman
			else if (input == "take woman" || input == "take girl"){
				if (currentroom == "bedroom" && takewoman == false){
					takewoman = true;
					$('<p>You attempt to pick up the unconscious woman. Sadly, she\'s heavier than she looks. So you leave her be.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					$('<p>Stop trying to pick her up! She\'s too heavy!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			// brush
			else if (input == "take brush" || input == "take tooth brush" || input == "take toothbrush") {
				if (currentroom == "bathroom" && brush == false) {
					brush = true;
					$('<p>You pick up the brush and brush your teeth. <br />Brush . . . <br /> Brush . . . <br /> Brush . . . <br /> All Clean!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//
			else {
				$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//*

			// pen
			/*
			else if (input == "take pen") {
				if (currentroom == "bedroom" && pen == false) {
					pen = true;
					$('<p>You pick up the pen and put it in your pocket.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//
			else {
				$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			// Bible
			else if (input == "take bible") {
				if (currentroom == "bedroom" && bible == false) {
					bible = true;
					$('<p>You pick up the Bible. A key falls out into the drawer. You place the Bible into your pocket.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//
			else {
				$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			// key
			else if (input == "take key") {
				if (currentroom == "bedroom" && key == false) {
					key = true;
					$('<p>The key appears to be covered in dry blood. Maybe it will be useful later. You pocket it.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//
			else {
				$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			*/
		}
		//
		//end take
		//

		//
		//inventory
		else if (input.indexOf("inventory") > -1) {
			if (input == "inventory") {
				// gun
				if (gun == true) {
					g_wep = "Gun<br />";
				}
				else {
					g_wep = "";
				}
				//

				// wallet
				if (wallet == true) {
					wal = "Wallet<br />";
				}
				else {
					wal = "";
				}
				//

				// jacket
				if (jacket == true) {
					jack = "Jacket<br />";
				}
				else {
					jack = "";
				}
				//

				// matches
				if (matches == true) {
					match = "Matches<br />";
				}
				else {
					match = "";
				}

				//bible
				if (bible == true) {
					bib = "Bible<br />";
				}
				else {
					bib = "";
				}
				//

				//key
				if (key == true) {
					ky = "Key<br />";
				}
				else {
					ky = "";
				}
				//

				//pen
				if (pen == true) {
					pn = "Pen<br />";
				}
				else {
					pn = "";
				}
				//

				//chinese food
				if (chinesefood == true) {
					cf = "Chinese Takeout<br / >";
				}
				else {
					cf = "";
				}
				//

				// printing message
				if (g_wep == "" && wal == "" && jack == "" && match == "" && bib == "" && ky == "" && pn == "" && cf == "") {
					$('<p>Inventory:<br /><i>There is nothing in your inventory</i></p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					 $('<p>Inventory:<br />' + g_wep + wal + jack + match + bib + ky + pn + cf + '</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			else $('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder").fadeIn(1000);
		}
		//end inventory
		//


		//
		//eat
		else if (input.indexOf("eat") > -1) {

			if (input == "eat") {
				$('<p>Eat what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//Chinese Takeout
			else if (input == "eat chinese take out" || input == "eat chinese food" || input == "eat chinese takeout") {
				if (chinesefood == true) {
					$('<p>Omnomnomnom... Yum! You are now full and reek of Chinese take out.</p>').insertBefore("#placeholder").fadeIn(1000);
					chinesefood = "ate";
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//woman
			else if (input == "eat woman" || input == "eat girl"){
				if (currentroom == "bedroom" && eatwoman == false) {
					$('<p>WHAT ARE YOU DOING? Do not be a cannibal! Leave the poor woman alone.</p>').insertBefore("#placeholder").fadeIn(1000);
					eatwoman = true;
				}
				else {
					$('<p>Stop trying to eat her!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
		}
		//end eat
		//

		//
		//go
		else if (input.indexOf("go") > -1) {
			if (input == "go") {
				$('<p>Go in which direction?</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//go from bedroom
			else if (input == "go west" && currentroom == "bedroom") {
				if (beentobathroom == true) {
					if (brush == false) {
						tbrush = " The brush still sits on the edge of the sink.";
					}
					else {
						tbrush = "";
					}
					$('<p>You are back in the bathroom. To the left there is a bathtub. On the right there is a sink and toilet. ' + tbrush + '</p>').insertBefore("#placeholder").fadeIn(3000);
					currentroom = "bathroom";
					beentobathroom = true;
				}
				else {
					$("#area_bathroom").clone().insertBefore("#placeholder").fadeIn(3000);
					currentroom = "bathroom";
					beentobathroom = true;
				}
			}
			//

			//bathroom to bedroom
			else if (input == "go east" && currentroom == "bathroom") {
				if (beentobedroom == true) {
					if(gun == false) {
						bedgun = " The gun is still on the bedside table.";
					} else {
						bedgun = "";
					}
					if(wallet == false) {
						bedwal = " The wallet is still on the bedside table.";
					} else {
						bedwal = "";
					}
					if(jacket == false) {
						bedjack = " The jacket is still on the chair.";
					} else {
						bedjack = "";
					}
					$('<p>You are back in the bedroom. To the east is the door. To the west is the bathroom.' + bedgun + bedwal + bedjack + '</p>').insertBefore("#placeholder").fadeIn(3000);
					currentroom = "bedroom";
				}
				else {
					$("#area_bedroom").clone().insertBefore("#placeholder").fadeIn(3000);
					currentroom = "bedroom";
					beentobedroom = true;
				}
			}

			// step outside room
			else if (input == "go east" || input == "go outside" && currentroom == "bedroom") {
				if (beenoutsidemroom == false && gun == true) {
					$("#container").fadeOut(3000, function() {
						$("#doorlock").fadeIn(3000);
					});

				}
				// else if (beenoutsidemroom == false) {
				// 	if (bike == false) {
				// 		mbike = " A motorcycle sits near by.";
				// 	}
				// 	else {
				// 		mbike = "";
				// 	}
				// 	$('<p>You step outside of your motel room. The fresh cold air greets your face. You look around.' + mbike + '</p>').insertBefore("#placeholder").fadeIn(3000);
				// 	currentroom = "outside_room";
				// 	beenoutsidemroom = true;
				// }
				else {
					$("#area_outsideroom").clone().insertBefore("#placeholder").fadeIn(3000);
					currentroom = "outside_room";
					beenoutsidemroom = true;
				}
			}
			//

			//outside to bedroom
			else if (input == "go west" && currentroom == "outside_room") {
				if (beentobedroom == true) {
					if(gun == false) {
						bedgun = " The gun is still on the bedside table.";
					} else {
						bedgun = "";
					}
					if(wallet == false) {
						bedwal = " The wallet is still on the bedside table.";
					} else {
						bedwal = "";
					}
					if(jacket == false) {
						bedjack = " The jacket is still on the chair.";
					} else {
						bedjack = "";
					}
					$('<p>You are back in the bedroom. To the east is the door. To the west is the bathroom.' + bedgun + bedwal + bedjack + '</p>').insertBefore("#placeholder").fadeIn(3000);
					currentroom = "bedroom";
				}
				else {
					$("#area_bedroom").clone().insertBefore("#placeholder").fadeIn(3000);
					currentroom = "bedroom";
					beentobedroom = true;
				}
			}
			//

			//
			//outside the window
			// else if (input == "go north" && currentroom == "bedroom") {
			// 	if (gun == true) {
			// 			popo = "You hear the front door bust open  through the window, the chief of police yelling at his officers to search the area. You should probably get moving!";
			// 	}
			// 	else {
			// 			popo = "";
			// 	}
			// 	$('<p>You crawl out the window of your motel room. The fresh cold air greets your face. You look around.' + popo + '</p>').insertBefore("#placeholder").fadeIn(3000);
			// 	currentroom = "outside_window";
			// 	beentowindow = true;
			// }

			else {
				$('<p>You can\'t go there.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		}
		//
		//


		//
		//search
		else if (input.indexOf("search") > -1) {

			if (input == "search") {
				$('<p>Search what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//table
			else if (input == "search table" || input == "search bedside table" || input == "search bed side table") {
				if (currentroom == "bedroom" && searchtable == false) {
					searchtable = true;
					$('<p>There is a pen and Bible in the table.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			//woman
			else if (input == "search woman" || input == "search girl") {
				if (currentroom == "bedroom" && searchwoman == false) {
					searchwoman = true;
					$('<p>There is nothing on her but you cop a feel.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>Bro. What are you doing. Stop touching her, you pervert! Get moving!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
		}
		//end search
		//

		//
		//kill
		else if (input.indexOf("kill") > -1) {

			if (input == "kill") {
				$('<p>Kill what with what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else if (input == "kill woman" || input == "kill girl" && currentroom == "bedroom") {
				$('<p>Kill woman with what?</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//woman
			else if (input == "kill woman with gun" || input == "kill whore with gun" || input == "kill girl with gun") {
				if (currentroom == "bedroom" && gun == true) {
					$('<p>WHAT ARE YOU DOING? <br />Why would you want to kill some random woman that you woke up beside? Stop it!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}

			else if (input == "kill woman with pen" || input == "kill whore with pen" || input == "kill girl with pen") {
				if (currentroom == "bedroom" && pen == true) {
					$('<p>WHAT ARE YOU DOING? <br />Why would you want to kill some random woman that you woke up beside? Stop it!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}

			else if (input == "kill woman with bible" || input == "kill whore with bible" || input == "kill girl with bible") {
				if (currentroom == "bedroom" && pen == true) {
					$('<p>JEZZ. WHAT ON EARTH ARE YOU DOING? <br />Why would you want to kill some random woman that you woke up beside? <br />You should be reading the Bible to yourself!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			else $('<p>You can\'t do that!</p>').insertBefore("#placeholder").fadeIn(1000);
		}
		//end kill
		//

		//
		// don't understand
			else if (check == false) {
				$("<p>I do not understand " + input + ".</p>").hide().insertBefore("#placeholder").fadeIn(1000);
			}
		// don't understand
		//


		//reset text box
		$("#console").scrollTop($("#console")[0].scrollHeight);
		$("#command_line").val("");
	});
});

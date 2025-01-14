console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')
	// 1. create a section tag with an id of middle-earth
	let middle_earth = document.createElement("section");
	middle_earth.setAttribute("id", "middle-earth");
	
	
	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i = 0; i < lands.length; i++) {
		//   2a. creates an article tag (there should be one for each land when the loop is done)
		let land = document.createElement("article");
		//   2b. gives each land article an `id` tag of the corresponding land name
		land.setAttribute("id", lands[i]);
		//   2c. includes an h1 with the name of the land inside each land article
		let landHeader = document.createElement("h1");
		landHeader.innerHTML = lands[i];
		land.append(landHeader);
		//   2d. appends each land to the middle-earth section
		middle_earth.append(land);
	}
		// 3. append the section to the body of the DOM.	
	document.body.append(middle_earth);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire

	// give each hobbit a class of `hobbit`

	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id


	// get article with id of "The-shire"
	let The_Shire = document.getElementById("The-Shire");
	// create an ul element
	let list_Hobbits = document.createElement("ul");
	list_Hobbits.setAttribute("id","Hobbits");
	// append the ul element to the article with id "The-Shire"
	The_Shire.append(list_Hobbits);
	// create li elements for all hobbits on hobbits array and append them to the ul.
	for (let i = 0; i < hobbits.length; i++){
		let hobbit_li = document.createElement("li");
		hobbit_li.setAttribute("class", "hobbit");
		hobbit_li.innerHTML = hobbits[i];
		list_Hobbits.append(hobbit_li);
	}
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const the_ring =  document.createElement("div");
	the_ring.setAttribute("id", "the-ring");
	// give the div a class of `'magic-imbued-jewelry'`
	const magic_jewel = document.createElement("div");
	magic_jewel.setAttribute("id", "magic-imbued-jewelry");
	document.body.append(magic_jewel);
	// // add the ring as a child of `Frodo`
	let frodo = document.querySelector("#The-Shire ul li:nth-child(1)");
	frodo.append(the_ring);
	// console.log(frodo);

}	

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	
	// give each of the baddies a class of "baddy"
	
	// remember to append them to Mordor
	const mordor = document.getElementById("Mordor");
	let list_baddies = document.createElement("ul");
	list_baddies.setAttribute("id", "Baddies");
	baddies.forEach(badGuy => {
		let baddies_li = document.createElement("li");
		baddies_li.setAttribute("class", "baddy");
		baddies_li.innerHTML = badGuy;
		list_baddies.append(baddies_li);
	})
	mordor.append(list_baddies);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	const rivendell = document.getElementById("Rivendell");
	// create an `aside` tag
	let buddies_aside = document.createElement("aside");
	// put an `unordered list` of the `'buddies'` in the aside
	let buddies_ul = document.createElement("ul");
	buddies_ul.setAttribute("id", "buddies");
	buddies_ul.setAttribute("id","buddies");
	buddies_aside.append(buddies_ul);
	buddies.forEach(buddy => {
		let buddies_li = document.createElement("li");
		buddies_li.setAttribute("class", "buddy");
		buddies_li.innerHTML = buddy;
		buddies_ul.append(buddies_li);
	})
		// // insert your aside as a child element of `rivendell`
		rivendell.appendChild(buddies_aside)
}	

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	
	// assemble the `hobbits` and move them to `rivendell`
	const rivendell = document.getElementById("Rivendell");
	const The_Hobbits = document.getElementById("Hobbits");
	
	rivendell.append(The_Hobbits);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	// change the `'Strider'` text to `'Aragorn'`
	let strider = document.querySelector("#buddies li:nth-child(4)");
	strider.innerHTML = "Aragorn";
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// // create a new div called `'the-fellowship'` within `rivendell`
	let Rivendell = document.getElementById("Rivendell");
	let the_fellowship = document.createElement("div");
	the_fellowship.setAttribute("id", "the-fellowship");

	Rivendell.append(the_fellowship); // √

	let The_Hobbits = document.getElementsByClassName("hobbit");
	let The_Buddies = document.getElementsByClassName("buddy");

	// // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// // after each character is added make an alert that they // have joined your party
	// get elements using class, add to new un list in the-fellowship, delete old ul
	
	for (let i = 0; i < The_Buddies.length; i++) {
		let isJoining = document.querySelector(`#buddies > li`);
		the_fellowship.appendChild(isJoining);
		alert(`${isJoining.innerText} has joined your party!`)
	}
	for (let i = 0; i < The_Hobbits.length; i++) {
		let isJoining = document.querySelector(`#Hobbits > li`);
		the_fellowship.appendChild(isJoining);
		alert(`${isJoining.innerText} has joined your party!`)
	}
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	let gandolf = document.querySelector("#the-fellowship li:nth-child(1)");
	gandolf.setAttribute("class", "buddy white");
	gandolf.innerText = "Gandalf the White";
	// apply the following style to the element, make the // background 'white', add a grey border √
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert("The horn of Gondor has beem blown!")
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	let deadManWalking = document.querySelector("#the-fellowship li:nth-child(5)");
	deadManWalking.remove();
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	let Frodo = document.querySelector("#the-fellowship li:nth-child(5)");
	let Sam = document.querySelector("#the-fellowship li:nth-child(6)");
	let mordor = document.getElementById("Mordor");

	mordor.appendChild(Frodo);
	mordor.appendChild(Sam);
	// add a div with an id of `'mount-doom'` to `Mordor`
	let MountDoom = document.createElement("div");
	MountDoom.setAttribute("id", "mount-doom")
	mordor.append(MountDoom)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	let gollumDiv = document.createElement("div");
	gollumDiv.setAttribute("id", "gollum");
	let Mordor = document.getElementById("Mordor");
	
	Mordor.append(gollumDiv);
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	let The_Ring = document.getElementById("the-ring");
	gollumDiv.append(The_Ring);
	// Move Gollum into Mount Doom
	let MountDoom = document.getElementById("mount-doom");
	MountDoom.append(gollumDiv);
}	


// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	let gollum = document.getElementById("gollum");
	gollum.remove();
	// Move all the `hobbits` back to `the shire`
	let The_Hobbits = document.getElementsByClassName("hobbit");
	let The_Shire = document.getElementById("The-Shire");

	for (let i = 0; i < The_Hobbits.length; i++) {
		let backHome = document.querySelector(`#Mordor > .hobbit`);
		The_Shire.append(backHome);
	}
	for (let i = 0; i < The_Hobbits.length; i++) {
		let backHome = document.querySelector(`#Rivendell > div > .hobbit`);
		The_Shire.append(backHome);
	}
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})

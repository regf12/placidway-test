window.addEventListener('load', function() {
	console.log('Ready!!');

	TOGGLE_ACCORDIONS = true;
	const acordeon = document.getElementById('toggle-all-accordions');
	acordeon.addEventListener('click', function () {
		TOGGLE_ACCORDIONS = !TOGGLE_ACCORDIONS;
	
		const acordeons = document.getElementsByClassName('multi-collapse');
		const buttons = document.getElementsByClassName('accordion-button');
		
		for (i=0; i<acordeons.length; i++) {
			acordeons[i].classList[TOGGLE_ACCORDIONS ? 'add' : 'remove']('show');
		}
		for (i=0; i<buttons.length; i++) {
			buttons[i].classList[TOGGLE_ACCORDIONS ? 'remove' : 'add']('collapsed');
			buttons[i].setAttribute("aria-expanded", TOGGLE_ACCORDIONS);
		}
	
		acordeon.innerHTML = TOGGLE_ACCORDIONS ? 'Hide all' : 'Show all';
	});



});


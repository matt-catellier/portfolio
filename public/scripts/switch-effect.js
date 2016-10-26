// SWITCH FUNCTIONALITY

	var switchUp = $('.switch-up');
	var switchDown = $('.switch-down');

	var leftArea = $('.left-column');
	var rightArea = $('.right-column');

	// global variables to track the position
	step = 600;
	leftPos=0;
	rightPos=0;

	page = 1;
	pages = 2;
	
	switchUp.on('click', function() {
		console.log('up');
		if(page < pages) {
			console.log('page1')
			page += 1;
			leftPos = parseInt(leftPos) + step;
			rightPos = parseInt(rightPos) - step;
			leftArea.find('.project').transition({ y: leftPos });
			rightArea.find('.project').transition({ y: rightPos});
		}
	})

	switchDown.on('click', function() {
		console.log('down');
		if(page > 1) {
			console.log('page2')
			page -= 1;
			leftPos = parseInt(leftPos) - step
			rightPos = parseInt(rightPos) + step
			leftArea.find('.project').transition({ y: leftPos});
			rightArea.find('.project').transition({ y: rightPos });
		}
	})
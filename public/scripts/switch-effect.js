// SWITCH FUNCTIONALITY
	var switchUp = $('.switch-up');
	var switchDown = $('.switch-down');

	var leftArea = $('.left-column');
	var rightArea = $('.right-column');

	// global variables to track the position
	leftPos=0;
	rightPos=0;

	page = 1;
	pages = 3;

	var step = 0;
	var tallest;
	var firstRun= true;

	setTallestStep();
	$(window).resize(function() {
		setTallestStep();
    });

	switchUp.on('click', function() {
		if(page < pages) {
			// console.log('page1');
			page += 1;
			leftPos = parseInt(leftPos) + step;
			rightPos = parseInt(rightPos) - step;
			leftArea.find('.project').transition({ y: leftPos });
			rightArea.find('.project').transition({ y: rightPos});
		}
	});

	switchDown.on('click', function() {
		if(page > 1) {
			// console.log('page2');
			page -= 1;
			leftPos = parseInt(leftPos) - step;
			rightPos = parseInt(rightPos) + step;
			leftArea.find('.project').transition({ y: leftPos});
			rightArea.find('.project').transition({ y: rightPos });
		}
	});


	function setTallestStep() {
		if ($(window).width() <= 767) {
			var elementHeights = $('.write-up').map(function() {
				return $(this).outerHeight();
			}).get();
			tallest = Math.max.apply(Math, elementHeights);
			// for extra padding
			if(!firstRun) {
				step = - (tallest);
				tallest = tallest - 70;
				leftPos = (page - 1) * step;
				// rightPos = step;
			} else {
				step = - (tallest + 70);
			}
		} else {
			firstRun = true;
			step = 620;
			tallest = 620;
			leftPos = 0;
			rightPos = 0;
			leftArea.find('.project').transition({ y: leftPos });
			rightArea.find('.project').transition({ y: rightPos});
		}
		setHeights();
		//console.log(step);
	}


	function setHeights() {
		if($(window).width() >= 767) {
			$('.columns').height(tallest);
			// $('.write-up').height(step);
		} else {
			if(firstRun) {
				firstRun = false;
			}
			$('.columns').height(tallest + 120);
			$('.write-up').height(tallest);

		}
	}

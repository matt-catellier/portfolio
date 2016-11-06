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
			step = - (tallest + 70);
		} else {
			firstRun = true;
			step = 620;
			tallest = 620;
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
				$('.columns').height(tallest + 140);
				firstRun = false;
			} else {
				$('.columns').height(tallest);
			}
			$('.write-up').height(tallest);
		}
	}

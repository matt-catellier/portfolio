// SWITCH FUNCTIONALITY
	var switchUp = $('.switch-up');
	var switchDown = $('.switch-down');

	var leftArea = $('.left-column');
	var rightArea = $('.right-column');

	// global variables to track the position
	step = 620;
	leftPos=0;
	rightPos=0;

	page = 1;
	pages = 3;

	var step;
	var tallest;


	setTallestStep();
	console.log(step);
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
			console.log(elementHeights);
			tallest = Math.max.apply(Math, elementHeights);
			// console.log(tallest);
			$('.columns').height(tallest + 140); // 140 for switches
			$('.write-up').height(tallest);
			console.log(tallest);
			step = -(tallest + 60);
		} else {
			step = 620;
			tallest = 620;
			$('.columns').height(620);
		}
	}

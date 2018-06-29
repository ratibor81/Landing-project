let btn_prev = document.querySelector('.arr-prev');
let btn_next = document.querySelector('.arr-next');
let reviews = document.querySelectorAll('.review-block__card');
let counters = document.querySelectorAll('.review-block__page-counter span');

let review = 0;
let counter = 0;

const prevClickHandler = () => {
  goToReview(review - 1);
  goToCount(counter - 1);
}

const nextClickHandler = () => {
  goToReview(review + 1);
  goToCount(counter + 1);
}

const goToCount = (n) => {
	counters[counter].classList.remove('through');
	counter = (n + counters.length) % counters.length;
	counters[counter].classList.add('through');
};

const goToReview = (n) => {
	reviews[review].style.display = 'none';
	review = (n + reviews.length) % reviews.length;
	reviews[review].style.display = 'flex';
};

btn_prev.addEventListener('click', prevClickHandler);
btn_next.addEventListener('click', nextClickHandler);

// jQuery Burger-menu

(function($) {
	$(function() {
			$('.icon').on('click', function() {
					$(this).closest('.menu').toggleClass('menu-open');
			});
	});
})($);

/**
 * Reveal elements based on scroll position
 * Based on {@link https://codepen.io/kccnma/pen/MQeXPY | kccnma's Pen}
 *
 * @param {number} [srPoint=150]
 */
export const scrollReveal = (srPoint = 150) => {
	const srSelector = document.querySelectorAll(".scrollreveal");
	for (const element of srSelector) {
		const windowHeight = window.innerHeight;
		const srTop = element.getBoundingClientRect().top;
		if (srTop < windowHeight - srPoint) {
			element.classList.add("scrollreveal__active");
		}
	}
};

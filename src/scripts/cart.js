export const initCart = () => {
	const headerCartButton = document.querySelector('.header__cart-button');
	const cartClose = document.querySelector('.cart__close');
	const cart = document.querySelector('.cart');

	const toggleCart = () => {
		cart.classList.toggle('cart--open');

		if (cart.classList.contains('cart--open') && window.innerWidth > 1360) {
			cart.scrollIntoView({behavior: "smooth"});
		}
	};

	headerCartButton.addEventListener('click', toggleCart);

	cartClose.addEventListener('click', () => {
		cart.classList.remove('cart--open');
	});
}
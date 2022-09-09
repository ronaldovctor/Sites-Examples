const assets = require('./assets')

window.addEventListener('scroll', () => {
	const header = document.querySelector('header')
	header.classList.toggle('sticky', window.scrollY > 3)
	document
		.querySelector('.menuToggle')
		.classList.toggle(
			'sticky',
			header.classList.contains('sticky') && window.scrollY > 3
		)
})

function toggleMenu() {
	const menuToggle = document.querySelector('.menuToggle')
	const navigation = document.querySelector('.navigation')
	menuToggle.classList.toggle('active')
	navigation.classList.toggle('active')
}

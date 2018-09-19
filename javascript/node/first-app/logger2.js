function holdYourHorses () {

	var milliseconds = 15000 + new Date().getTime();
	while (new Date() < ms) {
		console.log('not yet');
	}
	console.log('okay, now let me help you out.');
}

document.addEventListener('click', function (e) {
	console.log('You clicked me!');
});

holdYourHorses();
console.log('hi I am code in the global context.');

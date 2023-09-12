// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
// function reverse(str) {
// 	const arr = str.split('');
// 	arr.reverse();
// 	return arr.join('');
// }

// Solution 2
// function reverse(str) {
// 	let reversed = '';

// 	for (let character of str) {
// 		reversed = character + reversed;
// 	}
// 	return reversed;
// }

// Solution 3
function reverse(str) {
	return str.split('').reduce((reversed, character) => {
		return character + reversed;
	}, '');
}

module.exports = reverse;

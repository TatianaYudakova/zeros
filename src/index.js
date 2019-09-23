module.exports = function zeros(str) {
  	str = str.replace(/\s+/g, '');
	let list = str.split('*');
	let twos = 0;
	let fives = 0;

	let addTwos = function(value) {
		while (value % 2 === 0) {
			twos++;
			value /= 2;
		}
	}

	let addFives = function(value) {
		while (value % 5 === 0) {
			fives++;
			value /= 5;
		}
	}
	for(let i = 0; i < list.length; i++) {
		let num;
		switch(true) {
			case /!{2}/.test(list[i]):
				num = parseInt(list[i].substring(0, list[i].length - 2));
				if (num % 2 === 0) {
					for (let i = 2; i <= num; i+=2) {
						addTwos(i);
						addFives(i); 
					}
				} else {
					for (let i = 1; i <= num; i+=2) {
						addFives(i); 
					}
				}
				break;
			case /!{1}/.test(list[i]):
				num = parseInt(list[i].substring(0, list[i].length - 1));
				for (let i = 1; i <= num; i++) {
					addTwos(i);
					addFives(i);
				}
				break;
		}
	}
	return twos < fives ? twos : fives;
}
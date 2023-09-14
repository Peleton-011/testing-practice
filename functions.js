export default {
	capitalize(input) {
		return input
			.split("")
			.reduce(
				(acc, curr) =>
					acc.length < 1 ? acc + curr.toUpperCase() : acc + curr,
				""
			);
	},
	reverseString(input) {
		return input.split("").reverse().join("");
	},
	calculator: {
		add(input) {
			return this._curateInput(input).reduce(
				(acc, curr) => acc + curr,
				0
			);
		},
		subtract(input) {
			return this._curateInput(input).reduce(
				(acc, curr, i) => (i > 0 ? acc - curr : acc + curr),
				0
			);
		},
		multiply(input) {
			return this._curateInput(input).reduce(
				(acc, curr) => acc * curr,
				1
			);
		},
		divide(input) {
			return this._curateInput(input).reduce(
				(acc, curr, i) =>
					i > 0 ? (curr === 0 ? acc / 1 : acc / curr) : acc + curr,
				0
			);
		},

		_curateInput(input) {
			return input
				.filter((e) => !isNaN(parseFloat(e)) && isFinite(e))
				.map((e) => Number(e));
		},
	},
	caesarCipher(input, offset) {
		const minLow = "a".charCodeAt(0);
		const maxLow = "z".charCodeAt(0);
		const minUpp = "A".charCodeAt(0);
		const maxUpp = "Z".charCodeAt(0);
		return input
			.split("")
			.map((char) => {
				let code = char.charCodeAt(0);
				if (code >= minUpp && code <= maxUpp) {
					code += offset;
					if (code > maxUpp) code -= 26;
					if (code < minUpp) code += 26;
				}
				if (code >= minLow && code <= maxLow) {
					code += offset;
					if (code > maxLow) code -= 26;
					if (code < minLow) code += 26;
				}
				return String.fromCharCode(code);
			})
			.join("");
	},
	analyzeArray(arr) {},
};

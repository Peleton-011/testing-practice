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
};

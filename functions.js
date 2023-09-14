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
		add(input) {},
		subtract(input) {},
		multiply(input) {},
		divide(input) {},

		_curateInput(input) {
			return input.map((e) => Number(e)).filter((e) => typeof e === "number");
		},
	},
};

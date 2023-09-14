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
};

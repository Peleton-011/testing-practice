import functions from "./functions";

//Should capitalize the first letter
it("Capitalize 1", () => {
	expect(functions.capitalize("asdf")).toBe("Asdf");
});

it("Capitalize 2", () => {
	expect(functions.capitalize("ASDF")).toBe("ASDF");
});

//Takes a string and returns it reversed
it("Reverse String 1", () => {
	expect(functions.reverseString("asdf")).toBe("fdsa");
});

it("Reverse String 2", () => {
	expect(functions.reverseString("ASDF")).toBe("FDSA");
});

//A calculator object

it("Calculator Curate Input", () => {
	expect(functions.calculator._curateInput(["a", 4, "5"])).toStrictEqual([4, 5]);
});

it("Calculator Add 1", () => {
	expect(functions.calculator.add([2, 4, 5])).toBe(11);
});

it("Calculator Add 2", () => {
	expect(functions.calculator.add([2, 4, "5"])).toBe(11);
});

it("Calculator Add 3", () => {
	expect(functions.calculator.add(["a", 4, "5"])).toBe(9);
});

it("Calculator Subtract 1", () => {
	expect(functions.calculator.subtract([10, 5])).toBe(5);
});

it("Calculator Subtract 2", () => {
	expect(functions.calculator.subtract([10, 5, 3])).toBe(2);
});

it("Calculator Multiply", () => {
	expect(functions.calculator.multiply([3, 4])).toBe(12);
});

it("Calculator Divide 1", () => {
	expect(functions.calculator.divide([12, 3, 2])).toBe(2);
});

it("Calculator Divide 2", () => {
	expect(functions.calculator.divide([3, 0])).toBe(3);
});

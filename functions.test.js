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
it("Calculator Add 1", () => {
	expect(functions.calculator.add("asdf")).toBe("fdsa");
});

it("Calculator Add 2", () => {
	expect(functions.calculator.add("ASDF")).toBe("FDSA");
});

it("Calculator Subtract", () => {
	expect(functions.calculator.subtract("asdf")).toBe("fdsa");
});

it("Calculator Multiply", () => {
	expect(functions.calculator.multiply("asdf")).toBe("fdsa");
});

it("Calculator Divide 1", () => {
	expect(functions.calculator.divide("ASDF")).toBe("FDSA");
});

it("Calculator Divide 2", () => {
	expect(functions.calculator.divide("ASDF")).toBe("FDSA");
});

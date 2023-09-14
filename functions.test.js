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

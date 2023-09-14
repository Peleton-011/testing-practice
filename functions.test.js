import functions from "./functions";

it("Capitalize 1", () => {
	expect(functions.capitalize("asdf")).toBe("Asdf");
});

it("Capitalize 2", () => {
	expect(functions.capitalize("ASDF")).toBe("ASDF");
});

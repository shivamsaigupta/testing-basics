const capitalize = require("./capitalize.js");

test("Capitalizes the first letter of a string", () => {
  expect(capitalize("house")).toEqual("House");
});

test("Capitalizes the first letter of a string with spaces", () => {
  expect(capitalize("a dog")).toEqual("A dog");
});

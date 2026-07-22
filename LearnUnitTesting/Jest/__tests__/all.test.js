const allData = require("../all");

test("Check If Array Contains 6 Elements 1st Method", () => {
  expect(allData.length).toBe(6);
});

test("Check If Array Contains 6 Elements 2nd Method", () => {
  expect(allData).toHaveLength(6);
});

test("Check If Array Contains 6 Elements 2nd Method", () => {
  expect(allData).not.toHaveLength(5);
});

test("Check If String Contains 6 Elements", () => {
  expect("Mustafa").toHaveLength(7);
});

test("Check If Array Contains Number 3", () => {
  expect(allData).toContain(3);
});

test("Check If Array Not Contains Number 7", () => {
  expect(allData).not.toContain(7);
});

test("Check If Array Not Contains Number Zero", () => {
  expect(allData).not.toContain(0);
});

test("Check If Array Contains Only Numbers 1st Mehtod", () => {
  for (let index = 0; index < allData.length; index++) {
    expect(isNaN(allData[index])).toBe(false);
  }
});

test("Check If Array Contains Only Numbers 2nd Mehtod", () => {
  for (let index = 0; index < allData.length; index++) {
    expect(isNaN(allData[index])).toBeFalsy();
  }
});

test("Check If Array Contains Only Numbers 3rd Mehtod", () => {
  for (let index = 0; index < allData.length; index++) {
    expect(isNaN(allData[index])).not.toBeTruthy();
  }
});

test("Check If Array Second Element Is Larger Than 1", () => {
  expect(allData[1]).toBeGreaterThan(1);
});

test("Check If Array First Element Is Larger Than or Equal 1", () => {
  expect(allData[0]).toBeGreaterThanOrEqual(1);
});

test("Check If Array First Element Is Is Less Than 5", () => {
  expect(allData[0]).toBeLessThan(5);
});

test("Check If Array First Element Is Is Less Than or Equal 5", () => {
  expect(allData[0]).toBeLessThanOrEqual(5);
});

test("Check For Undefined", () => {
  let a;
  expect(a).toBeUndefined();
});

test("Check For Substring Inside String By RegExp", () => {
  let myString = "I Love Elzero Web School";
  expect(myString).toMatch(/Elzero/);
});

test("Check For Property Age", () => {
  let myObject = {
    name: "Osama",
    age: 37,
  };
  expect(myObject).toHaveProperty('age');
});

test("Check For Property Age Value Is 37", () => {
  let myObject = {
    name: "Osama",
    age: 37,
  };
  expect(myObject).toHaveProperty('age', 37);
});

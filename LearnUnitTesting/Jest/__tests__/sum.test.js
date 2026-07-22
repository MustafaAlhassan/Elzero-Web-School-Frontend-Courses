const theSum = require("../sum");

// test(name, function, timeout)
// it(name, function, timeout)
// describe(name, function) // Not required but good for more optimazation

describe("Check The Numbers Sum Total", () => {
  describe.only("If No Numbers Or One Number Only", () => {
    test("Return 0 If No Number", () => {
      expect(theSum()).toBe(0);
    });

    test("Return The Number", () => {
      expect(theSum(10)).toBe(10);
    });
  });

  test("Return The Number1 + Number2", () => {
    expect(theSum(15, 25)).toBe(40);
  });

  test.only("Return The Number1 + Number2 + Number3", () => {
    expect(theSum(10, 20, 30)).toBe(60);
  });

  test("Return The Number1 + Number2 + Number3 + Number4", () => {
    expect(theSum(10, 20, 30, 10)).toBe(70);
  });

  test("Return The Sum Result Of All Numbers", () => {
    expect(theSum(1, 9, 30, 10, 100, 50)).toBe(200);
  });
});

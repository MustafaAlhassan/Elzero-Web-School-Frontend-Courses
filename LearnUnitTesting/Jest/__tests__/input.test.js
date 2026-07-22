const theFilter = require("../input");

describe("Validate The Input Field", () => {
  test("Check If Name Is Empty", () => {
    expect(theFilter()).toBe("Unknown");
  });
  test.skip("Check For Spaces (Start + End)", () => {
    expect(theFilter("  Mustafa  ")).toBe("Mustafa");
  });
  test("Check If Name Length > 10 Characters", () => {
    expect(theFilter("Mustafa_Musab_Alhassan")).toBe("Mustafa_Mu");
  });
  test("Check If Name Not Starts With Underscore", () => {
    expect(theFilter("__Mustafa")).toBe("Mustafa");
  });
});

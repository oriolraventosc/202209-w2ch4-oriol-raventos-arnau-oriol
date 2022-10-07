import { SkylabArray } from "./SkylabArray";

describe("Given the function CheckLength", () => {
  describe("When it receives [1, 2, 3, 4]", () => {
    test("It should return The length of the array is 4'", () => {
      const SkylabArrayContent = [1, 2, 3, 4];
      const expectedResponse = "The length of the array is 4";

      const checkTheLength = SkylabArray.checkLength(SkylabArrayContent);

      expect(checkTheLength).toBe(expectedResponse);
    });
  });
});

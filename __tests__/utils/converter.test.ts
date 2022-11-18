import { converter } from "../../utils/converter.utils";

describe("converter", () => {
  it("should return 'IV' if given number is 4", () => {
    expect(converter(4)).toEqual("IV");
  });

  it('should return expected result if the number is between 1 and 1000', () => {
    expect(converter(400)).toEqual("CD");
  });

  it('should return empty string if the number is  out of 1 and 1000 range', () => {
    expect(converter(4000)).toEqual("");
  });
});

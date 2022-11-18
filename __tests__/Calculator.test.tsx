import { fireEvent, render, screen } from "@testing-library/react";
import Calculator from "@/components/Calculator";

jest.mock(
  "utils/converter.utils",
  () => ({
    converter: () => "IV",
  }),
  { virtual: true }
);

describe("Calculator", () => {
  it("should have 'IV' if typed number is 4", async () => {
    render(<Calculator />);

    const input: HTMLFormElement = screen.getByTestId("numeric-input");

    fireEvent.change(input, { target: { value: 4 } });
    const romanNumeral = await screen.findByTestId("roman-numeral");

    expect(romanNumeral).toHaveTextContent("IV");
  });

  it("should show an error label if typed number out of 1 to 1000 range", async () => {
    render(<Calculator />);

    const input: HTMLFormElement = screen.getByTestId("numeric-input");

    fireEvent.change(input, { target: { value: 4000 } });
    const errorLabel = await screen.findByTestId("error-label");

    expect(errorLabel).toBeInTheDocument();
  });
});

import React, { useState } from "react";
import styled from "styled-components";

// Utils
import { converter } from "utils/converter.utils";

// Styled Components
const Container = styled.div`
  margin: 0 auto;
  background: #f8f8f8;
  padding: 15px;
  border-radius: 15px;
`;
const NumericInputLabel = styled.label`
  font-size: 20px;
  color: #161b22;
`;
const ErrorLabel = styled.small`
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
  color: #000;
`;
const NumericInput = styled.input`
  border: none;
  background: #161b22;
  color: #fff;
  border-radius: 5px;
  height: 60px;
  font-size: 28px;
  outline: 0;
  padding-left: 25px;
  width: calc(100% - 25px);
`;
const RomanNumeralsOutput = styled.div`
  font-size: 24px;
  color: #000;

  span {
    text-transform: uppercase;
  }
`;

export default function Calculator(): JSX.Element {
  const [numericValue, setNumericValue] = useState<number>(0);
  const [romanNumeral, setRomanNumeral] = useState<string|undefined>("");

  /**
   * Handle calculations based on user input
   * @param {ChangeEvent} e type event
   */
  const handleCalculation = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRomanNumeral(converter(parseInt(e.target.value)));
    setNumericValue(parseInt(e.target.value));
  };

  /**
   * Validate user input
   * @param {ChangeEvent} e type event
   */
  const validateUserInput = (e: React.KeyboardEvent): void => {
    if (e.key === 'e' || e.key === '.' || e.key === '+' || e.key === '-') {
      e.preventDefault();
    }
  };

  return (
    <Container>
      <NumericInputLabel htmlFor="numeric-input">
        Enter the number you want to convert
      </NumericInputLabel>
      <NumericInput
        id="numeric-input"
        type="number"
        data-testid="numeric-input"
        min={1}
        max={1000}
        onChange={handleCalculation}
        onKeyDown={validateUserInput}
        placeholder="e.g. 318"
      />
      {(numericValue < 1 || numericValue > 1000) &&
        <ErrorLabel data-testid="error-label">* The number you enter must be between 1 and 1000</ErrorLabel>
      }
      {romanNumeral && (
        <>
          <hr />
          <RomanNumeralsOutput data-testid="roman-numeral">
            <span>Result: </span>
            {romanNumeral}
          </RomanNumeralsOutput>
        </>
      )}
    </Container>
  );
}

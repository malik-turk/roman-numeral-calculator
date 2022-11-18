import styled from "styled-components";

// Styled Components
const Container = styled.div`
  margin: 0 auto;
  background: #f8f8f8;
  padding: 15px;
  border-radius: 15px;
`;
const NumericInput = styled.input`
  border: none;
  background: #161B22;
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
  padding-left: 25px;

  span {
    text-transform: uppercase;
  }
`;

export default function Calculator(): JSX.Element {
  return (
    <Container>
      <NumericInput placeholder="e.g. 318" />
      <hr />
      <RomanNumeralsOutput>
        <span>Result: </span>
        VI
      </RomanNumeralsOutput>
    </Container>
  )
}

import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;

  @media (max-width: 576px) {
    width: auto;
  }
`;

const MainWrapper = styled.main`
  background: #161B22;
  color: #fff;
  height: 100vh;
`;

export {
  Container,
  MainWrapper
}

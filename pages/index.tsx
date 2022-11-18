import styled from "styled-components";
import { Gideon_Roman } from '@next/font/google'
import Head from "next/head";

// Components
import { Container, MainWrapper } from "@/components/shared/Container.styled";
import Calculator from "@/components/Calculator";

// Fonts
const GideonRoman = Gideon_Roman({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

const Title = styled.h1`
  margin: 0 0 30px;
  padding-top: 70px;
  border-bottom: 1px dotted #fff;
`;

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Roman Numerals Converter</title>
      </Head>
      <MainWrapper className={GideonRoman.className}>
        <Container>
          <Title data-testid="calculator-title">Roman Numerals Converter</Title>
          <Calculator />
        </Container>
      </MainWrapper>
    </>
  )
}

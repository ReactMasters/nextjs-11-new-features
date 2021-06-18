import styled from "styled-components";
import Head from "next/head";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: Inter;
  font-size: 50px;
`;

export default function Page() {
  return (
    <Wrapper>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
      </Head>
      <h1>This Font is Inter~!~</h1>
    </Wrapper>
  );
}

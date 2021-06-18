import styled from "styled-components";
import Image from "next/image";
import WonSteinProfile from "../../public/images/wonstein.jpeg";

const Wrapper = styled.div`
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
  h2 {
    margin-top: 20px;
  }
`;

const length = 300;
export default function Page() {
  return (
    <Wrapper>
      <h1>Quality 속성에 따라</h1>
      <h2>10</h2>
      <Image
        src={WonSteinProfile}
        width={length}
        height={length}
        quality={10}
      />
      <h2>30</h2>
      <Image
        src={WonSteinProfile}
        width={length}
        height={length}
        quality={30}
      />
      <h2>50</h2>
      <Image
        src={WonSteinProfile}
        width={length}
        height={length}
        quality={50}
      />
      <h2>70</h2>
      <Image
        src={WonSteinProfile}
        width={length}
        height={length}
        quality={70}
      />
      <h2>90</h2>
      <Image
        src={WonSteinProfile}
        width={length}
        height={length}
        quality={90}
      />
      <h2>100</h2>
      <Image
        src={WonSteinProfile}
        width={length}
        height={length}
        quality={100}
      />
    </Wrapper>
  );
}

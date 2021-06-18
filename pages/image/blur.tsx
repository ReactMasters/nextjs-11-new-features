import styled from "styled-components";
import Image from "next/image";
import WonSteinProfile from "../../public/images/wonstein.jpeg";

const Wrapper = styled.div`
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  & > h1 {
    font-size: 20px;
    font-weight: bold;
  }
  & > h2 {
    margin-top: 20px;
  }
`;

export default function Page() {
  return (
    <Wrapper>
      <h1>placeholder 속성에 따라</h1>
      <h2>empty</h2>
      <Image src={WonSteinProfile} quality={100} />
      <h2>blur</h2>
      <Image src={WonSteinProfile} quality={100} placeholder="blur" />
    </Wrapper>
  );
}

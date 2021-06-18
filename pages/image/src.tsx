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

export default function Page() {
  return (
    <Wrapper>
      <h1>src 속성에 따라</h1>
      <h2>외부</h2>
      <Image
        src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
        width={500}
        height={500}
      />
      <h2>정적 파일</h2>
      <Image src={WonSteinProfile} width={500} height={500} />
    </Wrapper>
  );
}

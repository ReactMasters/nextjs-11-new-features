import styled from "styled-components";
import Image from "next/image";
import WonSteinProfile from "../public/images/wonstein.jpeg";
const Wrapper = styled.div`
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export default function Page() {
  return (
    <Wrapper>
      <p>Resize 해봅시다 👇</p>

      <Image
        src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
        width={500}
        height={500}
      />
      <Image src={WonSteinProfile} width={500} height={500} />
      <Image src={WonSteinProfile} placeholder="blur" />
    </Wrapper>
  );
}

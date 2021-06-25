import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export default function Page() {
  return (
    <Wrapper>
      <Link href="/image">
        <a>Image Component</a>
      </Link>
      <Link href="/script">
        <a>Script Component</a>
      </Link>
      <Link href="/font">
        <a>Font optimization</a>
      </Link>
    </Wrapper>
  );
}

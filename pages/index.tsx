import styled from "styled-components";
import Link from "next/link";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  & > .link-box {
    & > a {
      text-decoration: none;
      display: inline-block;
      padding: 12px 6px;
      border-radius: 6px;
      border: 1px solid blue;
    }
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <div className="link-box">
        <Link href="/image-component">
          <a>Image Component</a>
        </Link>
      </div>
    </Wrapper>
  );
}

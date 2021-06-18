import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  a {
    width: 200px;
    background-color: #eee;
    padding: 8px 12px;
    border-radius: 4px;
    margin: 8px;
    text-decoration: none;
  }
`;

export default function Page() {
  return (
    <Wrapper>
      <Link href="/image/src">
        <a>src</a>
      </Link>
      <Link href="/image/layout">
        <a>layout</a>
      </Link>
      <Link href="/image/quality">
        <a>quality</a>
      </Link>
      <Link href="/image/priority">
        <a>priority</a>
      </Link>
      <Link href="/image/blur">
        <a>blur</a>
      </Link>
    </Wrapper>
  );
}

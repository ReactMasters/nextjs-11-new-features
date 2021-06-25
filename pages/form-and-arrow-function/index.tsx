import { LinkButton } from "@app/components/atoms/Button";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  a {
    margin: 8px;
  }
`;

export default function Page() {
  return (
    <Wrapper>
      <LinkButton href="/form-and-arrow-function/basic">기본</LinkButton>
      <LinkButton href="/form-and-arrow-function/bad">
        😡 진짜 나쁜 거
      </LinkButton>
      <LinkButton href="/form-and-arrow-function/not-bad">
        🤫 들 나쁜 거
      </LinkButton>
      <LinkButton href="/form-and-arrow-function/good">😊 좋은 거</LinkButton>
    </Wrapper>
  );
}

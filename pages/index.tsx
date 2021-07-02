import { LinkButton } from "@app/components/atoms/Button";
import styles from "@app/styles";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  max-width: ${styles.sizes.mobileWidth}px;
  margin: 0 auto;
  a {
    width: 100%;
    justify-content: left;
    margin: 8px;
  }
`;

export default function Page() {
  return (
    <Wrapper>
      <LinkButton href="/next-js-11">🖤 next.js 11 new feature</LinkButton>
      <LinkButton href="/form-and-arrow-function">
        ➡️ form-and-arrow-function
      </LinkButton>
      <LinkButton href="/effect-and-deps">♻️ effect-and-deps</LinkButton>
    </Wrapper>
  );
}

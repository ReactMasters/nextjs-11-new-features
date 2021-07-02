import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Button from "@app/components/atoms/Button";
import styles from "@app/styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  max-width: ${styles.sizes.mobileWidth}px;
  margin: 0 auto;
  button {
    width: 100%;
    margin: 8px;
  }
`;

let globalCount = 0;
let globalObj = { n: 3 };
function initOther(initialOther?: number) {
  console.log("initOther executed...");
  return initialOther !== undefined ? initialOther + 1 : 0;
}
export default function Page({ initialOther }: { initialOther?: number }) {
  console.log("Page rendered...");
  const [count, setCount] = useState(0);
  const [other] = useState(() => initOther(initialOther));
  const [obj, setObj] = useState<any>({ n: 3 });
  useEffect(() => {
    console.log({ globalCount });
  }, [globalCount]);
  useEffect(() => {
    console.log({ globalObj });
  }, [globalObj]);
  useEffect(() => {
    console.log("globalObj.n", globalObj.n);
  }, [globalObj.n]);
  useEffect(() => {
    console.log({ count });
  }, [count]);
  useEffect(() => {
    console.log({ obj });
  }, [obj]);
  useEffect(() => {
    console.log("obj.n", obj.n);
  }, [obj.n]);
  return (
    <Wrapper>
      <p>other:{other}</p>
      <p>globalCount:{globalCount}</p>
      <p>count:{count}</p>
      <Button onClick={() => globalCount++}>globalCount 업데이트</Button>
      <Button onClick={() => globalObj.n++}>
        globalObj를 그대로 둔 채 property만 업데이트
      </Button>
      <Button
        onClick={() => {
          globalObj = { n: 3 };
        }}
      >
        globalObj를 새로 할당
      </Button>
      <Button onClick={() => setCount(count + 1)}>count + 1 업데이트</Button>
      <Button onClick={() => setCount(0)}>count 를 0으로 고정 업데이트</Button>
      <Button
        onClick={() => {
          obj.n += 1;
          setObj(obj);
        }}
      >
        obj는 그대로 둔 채 property만 업데이트
      </Button>
      <Button onClick={() => setObj({ n: 3 })}>obj를 새로 할당</Button>
    </Wrapper>
  );
}

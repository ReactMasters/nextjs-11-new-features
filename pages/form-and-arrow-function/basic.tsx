import Input from "@app/components/atoms/Input";
import { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const NotProps = () => {
  const count = useRef(0);
  console.log(`NotProps rendered ${count.current++} times`);
  return <div>NotProps</div>;
};
const WithProps = ({ name }: { name: string }) => {
  const count = useRef(0);
  console.log(`WithProps rendered ${count.current++} times`);
  return <div>{name}</div>;
};
export default function Page() {
  const [name, setName] = useState<string>("");
  return (
    <Wrapper>
      <Input
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <NotProps />
      <WithProps name={name} />
    </Wrapper>
  );
}

import Input from "@app/components/atoms/Input";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

interface ProfileDetail {
  hobby?: string;
  phone?: string;
  laptop?: string;
}

export default function Page() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [detail, setDetail] = useState<ProfileDetail>({
    hobby: "",
    phone: "",
    laptop: "",
  });
  console.log(detail);
  return (
    <Wrapper>
      <Input
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="나이"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <Input
        placeholder="phone"
        value={detail?.phone}
        onChange={(e) => setDetail({ ...detail, phone: e.target.value })}
      />
      <Input
        placeholder="hobby"
        value={detail?.hobby}
        onChange={(e) => setDetail({ ...detail, hobby: e.target.value })}
      />
      <Input
        placeholder="laptop"
        value={detail?.laptop}
        onChange={(e) => setDetail({ ...detail, laptop: e.target.value })}
      />
    </Wrapper>
  );
}

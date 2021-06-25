import Input from "@app/components/atoms/Input";
import { ChangeEventHandler, useState } from "react";
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
  const handleDetailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    // e.target.placeholder
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };
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
        name="phone"
        placeholder="phone"
        value={detail?.phone}
        onChange={handleDetailChange}
      />
      <Input
        name="hobby"
        placeholder="hobby"
        value={detail?.hobby}
        onChange={handleDetailChange}
      />
      <Input
        name="laptop"
        placeholder="laptop"
        value={detail?.laptop}
        onChange={handleDetailChange}
      />
    </Wrapper>
  );
}

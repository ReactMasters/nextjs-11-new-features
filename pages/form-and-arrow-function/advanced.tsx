import Input from "@app/components/atoms/Input";
import { ChangeEventHandler, useCallback, useState } from "react";
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

const defaultProfileDetail: ProfileDetail = {
  hobby: "",
  phone: "",
  laptop: "",
};

const detailKeys = Object.keys(defaultProfileDetail) as (keyof ProfileDetail)[];

export default function Page() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [detail, setDetail] = useState<ProfileDetail>(defaultProfileDetail);
  const handleDetailChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) =>
      setDetail((detail) => ({
        ...detail,
        [e.target.name]: e.target.value,
      })),
    []
  );
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
      {detailKeys.map((key) => (
        <Input
          key={key}
          name={key}
          placeholder={key}
          value={detail[key]}
          onChange={handleDetailChange}
        />
      ))}
    </Wrapper>
  );
}

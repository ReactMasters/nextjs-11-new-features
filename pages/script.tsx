import styled from "styled-components";
import Script from "next/script";
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
      <Script
        strategy="afterInteractive"
        src="https://sdk.amazonaws.com/js/aws-sdk-2.931.0.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="https://code.jquery.com/jquery-3.6.0.js"
      />
      <Script
        strategy="lazyOnload"
        src="https://unpkg.com/swiper/swiper-bundle.min.js"
      />
    </Wrapper>
  );
}

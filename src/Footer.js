import React from "react";

const Footer = () => {
  return (
    <footer>
      <img id="logo" src={`${process.env.PUBLIC_URL}/codestates-logo.png`} />
      Copyright @ 2022 Code States
    </footer>
  );
};
// TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 요소 footer가 포함되어야 합니다.

export default Footer;

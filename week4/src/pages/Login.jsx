import styled from "styled-components";
import Layout from "../components/Layout";
import { useState } from "react";
import { useNavigate } from "react-router";
import postLogin from "../api/postLogin";
import Buttons from "../components/Buttons";
import InputContainer from "../components/InputContainer";

// 로그인 컴포넌트 (페이지)
const Login = () => {
  const [ID, setId] = useState("");
  const [PW, setPw] = useState("");

  const navigate = useNavigate();

  const btnInfo = [
    {
      name: "로그인",
      clickAction: function () {
        postLogin(ID, PW, navigate);
      },
    },
    {
      name: "회원가입",
      clickAction: function () {
        navigate("/signup");
      },
    },
  ];

  return (
    <Layout title="Login" buttons={Buttons(btnInfo)}>
      <InputContainer name="ID" state={ID} setState={setId} />
      <InputContainer name="PASSWORD" state={PW} setState={setPw} />
    </Layout>
  );
};

export default Login;

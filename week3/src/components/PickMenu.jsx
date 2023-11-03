import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const PickMenu = () => {
  const CHOICE = [
    ["아우터", "상의", "하의", "세트", "백&슈즈"],
    ["여름", "봄/가을", "겨울"],
    ["무채색", "컬러풀"],
  ];

  // 선택 단계 state
  const [step, setStep] = useState(0);

  return (
    <>
      <Header>
        <h2>CATEGORY</h2>
      </Header>
      <PickMain>
        <ul>
          {CHOICE[step].map((el) => (
            <PickChoice key={el}>{el}</PickChoice>
          ))}
        </ul>
      </PickMain>
      <Buttons>
        <button type="button" disabled={step === 0}>
          이전으로
        </button>
        <button
          type="button"
          onClick={() => setStep(step + 1)}
          disabled={step === CHOICE.length - 1}>
          다음으로
        </button>
      </Buttons>
    </>
  );
};

export default PickMenu;

const Header = styled.header`
  position: absolute;
  top: 0;
  margin-top: 2rem;

  font-size: 1.3rem;
  font-weight: bold;
`;
const PickMain = styled.section`
  & > ul {
    display: flex;
    justify-content: center;

    gap: 1rem;
    flex-wrap: wrap;
  }
`;
const PickChoice = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7rem;
  height: 7rem;

  background-color: white;
  border: 0.1rem solid black;
  border-radius: 0.7rem;

  &:hover {
    background-color: #ffe1e6;
    border-width: 0.2rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  bottom: 0;
  margin-bottom: 2rem;

  & > button {
    width: 5rem;
    height: 1.5rem;

    border-radius: 0.5rem;
    border: 0;

    background-color: white;

    &:hover {
      border: 0.2rem solid black;
    }
    &:disabled {
      border: 0;
    }
  }
`;

import React from "react";
import styled from "styled-components";
const ModalStatus = () => {
  return (
    <Wrapper>
      <Card>
        <i className="bx bx-check-double text-[#4d7c0f] text-6xl"></i>
        <Text>El producto se añadió exitosamente</Text>
      </Card>
    </Wrapper>
  );
};

export default ModalStatus;

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999; // Asegura que esté en la parte superior
`;

const Card = styled.article`
  width: min(90%, 500px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: 1em;
  background-color: #ffffff;
  border-radius: 0.5em;
`;

const Text = styled.p`
  text-weight: medium;
  font-size: 1.3em;
  text-align: center;
`;

import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Unauthorized = ({ message, setOnModal, onModal }) => {
  console.log(message);
  return (
    <Wrapper>
      <Card>
        <ContainerImage>
          <Image
            width={500}
            height={500}
            src="/Images/401.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </ContainerImage>
        <Text>{message}</Text>
        <Btn onClick={() => setOnModal(!onModal)}>Reintentar</Btn>
      </Card>
    </Wrapper>
  );
};

export default Unauthorized;

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
  width: min(90%, 600px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: 1em;
  background-color: #ffffff;
  border-radius: 0.5em;
`;

const ContainerImage = styled.div`
  width: 250px;
  height: 200px;
`;

const Text = styled.p``;

const Btn = styled.button`
  padding: 0.3em 1em;
  border: none;
  background-color: #4d47c3;
  color: #fff;
  border-radius: 0.5em;
`;

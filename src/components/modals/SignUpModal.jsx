import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const SignUpModal = ({ setOnModal, onModal, status }) => {
  const router = useRouter();

  return (
    <Wrapper>
      <Card>
        <ContainerImage>
          {status === "failed" && (
            <Image
              width={500}
              height={500}
              src="/Images/alert.png"
              alt=""
              className="w-full h-full object-cover"
            />
          )}
          {status === "success" && (
            <Image
              width={500}
              height={500}
              src="/Images/success.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          )}
        </ContainerImage>
        <ContainerTextError>
          {status === "failed" && (
            <MessageError>
              UPS! Ocurrió un error inesperado, por favor, vuelve a intentar más
              tarde o ponte en contacto con nuestro equipo de atención al
              cliente.
            </MessageError>
          )}
          {status === "success" && (
            <MessageError>
              ¡Felicidades!
              <br /> <br />
              Has completado con éxito tu registro en ClosetWithoutGender,
              explora nuestra tienda en línea y descubre una moda que se adapta
              a ti, sin restricciones. Disfruta de tus compras y si necesitas
              ayuda, estamos aquí para ayudarte.
            </MessageError>
          )}
        </ContainerTextError>
        {status === "failed" && (
          <Btn onClick={() => setOnModal(!onModal)}>Reintentar</Btn>
        )}
        {status === "success" && (
          <Btn onClick={() => router.push("/auth/iniciar-sesion")}>
            Iniciar sesion
          </Btn>
        )}
      </Card>
    </Wrapper>
  );
};

export default SignUpModal;
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

const ContainerTextError = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const MessageError = styled.p``;

const Btn = styled.button`
  padding: 0.3em 1em;
  border: none;
  background-color: #4d47c3;
  color: #fff;
  border-radius: 0.5em;
`;

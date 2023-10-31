import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Image from "next/image";
import personLogIn from "../../../public/Images/Saly-14.svg";
import Unauthorized from "../modals/Unauthorized";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [onModal, setOnModal] = useState(false);
  const [onLoading, setOnLoading] = useState(false);
  const [messageModal, setMessageModal] = useState("");
  const showPassword = () => setPasswordVisible(!passwordVisible);

  const router = useRouter();

  return (
    <>
      {onModal && (
        <Unauthorized
          setOnModal={setOnModal}
          onModal={onModal}
          message={messageModal}
        />
      )}

      {onLoading && (
        <div className="w-full h-full fixed top-0 right-0 bottom-0 left-0 m-auto flex flex-col items-center justify-center gap-2 bg-bgOpacityTwo z-[999] text-white">
          <span className="loader"></span>
          <p>Espere por favor...</p>
        </div>
      )}

      <section className="pt-16 w-full h-full flex flex-col items-start lg:flex-row lg:justify-between lg:p-8">
        <article className="hidden lg:w-full lg:h-full lg:flex flex-col items-center mt-[5em]">
          <h2 className="text-black font-bold text-1xl">
            ¡Bienvenido de nuevo!
          </h2>
          <div className="w-full flex flex-col items-center">
            <p className="text-center text-xs text-darkSlateGray sm:w-4/5 sm:text-center lg:w-[60%] xlmy:text-base">
              Te pediremos que te autentiques con el fin de verificar tu
              identidad y que el procedimiento sea seguro entre las partes.
            </p>
          </div>
          <div className="w-full flex items-center justify-end mt-[-3em]">
            <figure className="w-[200px] h-[300px]">
              <Image src={personLogIn} alt="person" className="" />
            </figure>
          </div>
        </article>
        <article className="w-full flex flex-col items-center gap-2">
          <h2 className="text-center text-black font-bold text-1xl lg:hidden">
            ¡Bienvenido de nuevo!
          </h2>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Requerido";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Correo electrónico no válido";
              }
              if (!values.password) {
                errors.password = "Requerido";
              }

              return errors;
            }}
            onSubmit={(values) => {
              const URL = `${process.env.DOMAIN_PROD}/auth/iniciar-sesion`;
              axios
                .post(URL, values)
                .then((res) => {
                  if (res) {
                    Cookies.set("tokenUser", res.data.token, {
                      expires: 1,
                      secure: true,
                    });
                  }
                  setOnLoading(true);
                  router.push("/dashboard");
                })
                .catch((err) => {
                  console.log(err);
                  setOnModal(true);
                  if (err.response?.status === 401) {
                    setMessageModal("Credenciales Invalidas");
                  }
                });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form
                className="max-w-[450px] lg:w-[400px] p-5 rounded-xl flex flex-col gap-8 lg:gap-12"
                onSubmit={handleSubmit}
              >
                <h3 className="hidden lg:block text-start font-semibold text-black text-base mb-[-1.5em] lg:text-2xl">
                  Inicio de sesión
                </h3>
                <article className="w-full flex flex-col items-center lg:hidden">
                  <h3 className="text-center font-semibold text-black text-xl sm:text-1xl">
                    Inicio de sesión
                  </h3>
                  <p className="text-center text-xs text-darkSlateGray sm:w-4/5 sm:text-center">
                    Te pediremos que te autentiques con el fin de verificar tu
                    identidad y que el procedimiento sea seguro entre las
                    partes.
                  </p>
                </article>

                <div className="relative w-full flex flex-col gap-1 mt-2">
                  <label className="" htmlFor="email-user">
                    <input
                      className="
                w-full 
                outline-none 
                rounded-md 
                py-2
                ps-2
                bg-aliceBlueTwo 
                text-darkSlateGray
                colorPlace
                "
                      type="email"
                      name="email"
                      id="email-user"
                      placeholder="email@ejemplo.com"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </label>
                  {errors.email && touched.email && (
                    <p className="text-error text-xs">{errors.email}</p>
                  )}
                </div>

                <div className="relative w-full flex flex-col gap-1">
                  <label className="" htmlFor="password_user">
                    <input
                      className="
                  w-full 
                  relative
                  outline-none 
                  rounded-md 
                  py-2
                  ps-2
                  bg-aliceBlueTwo 
                  text-darkSlateGray
                  colorPlace
                  "
                      type={passwordVisible ? "text" : "password"}
                      name="password"
                      id="password_user"
                      placeholder="Contraña"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                  </label>
                  <div
                    className="absolute top-2 right-3 cursor-pointer text-1xl text-lightSlateBlue"
                    onClick={showPassword}
                  >
                    {passwordVisible ? (
                      <i className="bx bx-show"></i>
                    ) : (
                      <i className="bx bx-hide"></i>
                    )}
                  </div>

                  <div className="w-full flex relative">
                    {errors.password && touched.password && (
                      <p className="text-error text-xs text-start mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="block w-full p-2 text-center mt-8 text-white bg-slateBlue border-none rounded-md shadow shadow-custom font-semibold"
                >
                  Iniciar sesión
                </button>
              </form>
            )}
          </Formik>
        </article>
      </section>
    </>
  );
};

export default Login;

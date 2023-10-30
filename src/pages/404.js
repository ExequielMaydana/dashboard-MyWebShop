import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col items-center justify-center absolute top-[6em] right-0 bottom-0 left-0 m-auto lg:top-[6em]">
        <h3 className="text-center w-[90%] lg:text-xl">
          <span className="text-3xl text-darkGray lg:text-6xl">UPS! </span>
          <br /> Parece que te has perdido.
        </h3>
        <p className="text-center text-darkGray w-[90%] text-sm lg:text-base">
          Lo sentimos, la página que estás buscando no existe. Puedes explorar
          nuestros otros recursos y contenidos interesantes.
        </p>
        <Link
          className="border py-1 px-4 rounded-md bg-mediumPurple text-white"
          href="/"
        >
          Volver al inicio
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;

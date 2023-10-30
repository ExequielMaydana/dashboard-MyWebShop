import React from "react";
import styles from "@/styles/Home.module.css";
import NavBar from "./shared/navbar/NavBar";
import Footer from "./shared/footer/Footer";
import Head from "next/head";

const Layout = ({ children, subtitle }) => {
  return (
    <>
      <Head>
        <title>{subtitle}</title>
        <meta
          name="description"
          content="Descubre la tienda online de indumentaria sin género con la más amplia selección de zapatillas, pantalones, remeras, camperas, accesorios y mucho más. Encuentra tu estilo único con nuestra colección inclusiva y diversa. Únete a la revolución de la moda sin límites y encuentra prendas que se adaptan a tu personalidad. Explora ahora y viste como tú quieras en nuestra tienda de moda sin género."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Moda sin género, Indumentaria inclusiva, Zapatillas unisex, Pantalones sin género, Remeras neutras, Oversize, Ropa comoda, Ropa urbana"
        />
        <meta name="rating" content="general" />
        <meta name="generator" content="Next.js, Tailwind CSS" />
        <meta name="author" content="Exequiel Maydana" />
        <link rel="icon" href="" />
      </Head>
      <main className={styles.main}>
        <NavBar />
        <section className={styles.contentHome}>{children}</section>
        <Footer />
      </main>
    </>
  );
};

export default Layout;

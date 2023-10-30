import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SubMenusClothing from "./SubMenusClothing";
import SubMenuMarkets from "./SubMenuMarkets";
import SubMenuShoes from "./SubMenuShoes";
import SubMenuAccessories from "./SubMenuAccessories";
import Cookies from "js-cookie";
import Image from "next/image";
import SubMenuHelp from "./SubMenuHelp";

const Menu = ({
  isOpen,
  openMenu,
  dataUser,
  aTokenExists,
  setATokenExists,
}) => {
  const [openDropDownOne, setOpenDropDownOne] = useState(false);
  const [openDropDownMarket, setOpenDropDownMarket] = useState(false);
  const [openDropDownShoes, setOpenDropDownShoes] = useState(false);
  const [openDropDownAccesories, setOpenDropDownAccesories] = useState(false);
  const [openDropHelp, setOpenDropHelp] = useState(false);

  const router = useRouter();

  const logOut = () => {
    openMenu();
    Cookies.remove("tokenUser");
    setATokenExists(false);
    router.push("/");
  };

  return (
    <section className={isOpen ? `menu__open menu` : "menu"}>
      <nav
        className={
          isOpen ? "w-full relative opacity-100 flex flex-col gap-8" : "menu"
        }
      >
        <div className="flex items-center justify-between lg:hidden">
          {aTokenExists ? (
            <article className="flex items-start justify-center p-4 gap-4">
              <figure className="w-[70px] h-[70px] rounded-full">
                <Image
                  width={500}
                  height={500}
                  src={dataUser.profileImage?.imageUrl || ""}
                  alt="imagen de perfil"
                  className="w-full h-full object-cover rounded-full shadow-md shadow-mediumPurple"
                />
              </figure>
              <div className="flex flex-col pt-2">
                <p className="text-white font-medium">{dataUser.full_name}</p>
                <p className="text-dimGray font-medium">{dataUser.email}</p>
              </div>
            </article>
          ) : (
            <article className="p-4 flex items-start gap-2">
              <i className="bx bx-user cursor-pointer p-2 border border-darkGray rounded-full text-darkGray text-2xl"></i>
              <div className="flex flex-col">
                <p className="text-white">Ingresa a tu cuenta</p>
                <Link
                  href="/auth/iniciar-sesion"
                  className="text-white border border-darkGray rounded-lg bg-mediumPurple mt-2 flex items-center justify-center text-center"
                >
                  Ingresar
                </Link>
              </div>
            </article>
          )}
          <i
            className="bx bx-arrow-back text-end p-4 cursor-pointer text-lg text-white s:text-xl lg:hidden"
            onClick={openMenu}
          ></i>
        </div>

        <ul className="w-full flex flex-col pl-3 gap-5 mb-1 text-white text-sm s:text-base lg:flex-row lg:gap-3">
          <li className="relative cursor-pointer">
            <Link href="/" className="flex gap-1 lg:text-sm" onClick={openMenu}>
              Inicio
            </Link>
          </li>
          <li
            className="relative cursor-pointer overflow-hidden"
            onClick={() => setOpenDropDownOne(!openDropDownOne)}
          >
            <div className="flex items-center gap-1">
              <span className="lg:text-sm"> Indumentaria</span>
              <article
                className={openDropDownOne ? "icon__row-active" : "icon__row"}
              >
                <i className="bx bx-chevron-right"></i>
              </article>
            </div>

            <SubMenusClothing openDropDownOne={openDropDownOne} />
          </li>
          <li
            className="relative cursor-pointer"
            onClick={() => setOpenDropDownShoes(!openDropDownShoes)}
          >
            <div className="flex items-center gap-1">
              <span className="lg:text-sm">Calzado</span>

              <article
                className={openDropDownShoes ? "icon__row-active" : "icon__row"}
              >
                <i className="bx bx-chevron-right"></i>
              </article>
            </div>

            <SubMenuShoes openDropDownShoes={openDropDownShoes} />
          </li>
          <li
            className="relative cursor-pointer"
            onClick={() => setOpenDropDownAccesories(!openDropDownAccesories)}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="lg:text-sm "> Accesorios</span>
              <article
                className={
                  openDropDownAccesories ? "icon__row-active" : "icon__row"
                }
              >
                <i className="bx bx-chevron-right"></i>
              </article>
            </div>

            <SubMenuAccessories
              openDropDownAccesories={openDropDownAccesories}
            />
          </li>
          <li
            className="relative cursor-pointer"
            onClick={() => setOpenDropDownMarket(!openDropDownMarket)}
          >
            <div className="flex items-center gap-1">
              <span className="lg:text-sm">Marcas</span>
              <article
                className={
                  openDropDownMarket ? "icon__row-active" : "icon__row"
                }
              >
                <i className="bx bx-chevron-right"></i>
              </article>
            </div>

            <SubMenuMarkets openDropDownMarket={openDropDownMarket} />
          </li>
        </ul>
        <hr className="w-4/5 border-solid	border-slateGray opacity-25 lg:hidden" />
      </nav>

      <ul className="w-full flex flex-col items-start pl-3 gap-2 pb-1 z-10 text-white font-light text-sm s:text-base lg:absolute top-0 right-0 lg:w-auto lg:flex-row lg:justify-center lg:text-sm">
        <li
          className="relative cursor-pointer lg:hidden"
          onClick={() => setOpenDropHelp(!openDropHelp)}
        >
          <div className="flex items-center gap-1">
            <i className="bx bx-help-circle"></i>

            <span className="lg:text-sm">Ayuda</span>
            <article
              className={openDropHelp ? "icon__row-active" : "icon__row"}
            >
              <i className="bx bx-chevron-right text-lg"></i>
            </article>
          </div>

          <SubMenuHelp openDropHelp={openDropHelp} />
        </li>
        <li>
          <Link
            href="/sobrenosotros"
            className="flex gap-1 items-center justify-center"
            onClick={openMenu}
          >
            <i className="bx bx-info-circle text-lg"></i>
            Sobre nosotros
          </Link>
        </li>
        {aTokenExists && (
          <li
            onClick={openMenu}
            className="flex gap-1 items-center justify-center cursor-pointer lg:hidden"
          >
            <i className="bx bx-user-circle text-lg"></i>
            Mi cuenta
          </li>
        )}
        {aTokenExists && (
          <li
            onClick={logOut}
            className="flex gap-1 items-center justify-center cursor-pointer lg:hidden"
          >
            <i className="bx bx-log-out-circle text-lg"></i>
            Cerrar sesion
          </li>
        )}
        <li className="hidden lg:flex">
          <p className="flex pl-3 gap-1 items-center justify-center"></p>
          <Link
            href="/preguntas-frecuentes"
            className="flex gap-1 items-center justify-center"
            onClick={openMenu}
          >
            <i className="bx bx-help-circle"></i>
            Ayuda
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Menu;

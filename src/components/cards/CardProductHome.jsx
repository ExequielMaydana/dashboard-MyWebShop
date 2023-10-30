import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardProductHome = ({ id, img, name, price_sale }) => {
  return (
    <Link href={`/product/${id}`} className="flex items-center justify-center">
      <article className="min-w-[250px] max-w-[250px] h-[300px] relative flex flex-col items-center p-4 gap-8 shadow-lg border border-slateGray rounded-md">
        <figure className="w-[200px] h-[200px]">
          <Image
            width={800}
            height={800}
            src={img ? img : ""}
            alt="imagen producto"
            className="w-full h-full object-contain"
          />
        </figure>
        <div className="absolute bottom-4 left-4 max-w-full flex flex-col gap-2">
          <p className="uppercase">{name}</p>
          <span>
            <b>${price_sale}</b>
          </span>
        </div>

        <span className="absolute top-2 right-2 px-2 uppercase rounded-md bg-black text-white">
          NUEVO
        </span>
      </article>
    </Link>
  );
};

export default CardProductHome;

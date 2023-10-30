import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardBrand = ({ img }) => {
  return (
    <Link href="#">
      <article className="flex items-center justify-center py-4 min-w-[180px] h-[80px] shadow-lg border border-slateGray rounded-md">
        <figure>
          <Image
            width={500}
            height={500}
            src={img || ""}
            alt="image brand"
            className="w-[70px]"
          />
        </figure>
      </article>
    </Link>
  );
};

export default CardBrand;

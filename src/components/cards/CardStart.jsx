import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardStart = ({ img, title }) => {
  return (
    <Link href={`/${title}`}>
      <article className="shadow shadow-lg cursor-pointer transform transition-scaleTr duration-400 ease-in-out hover:scale-103 hover:shadow-mediumPurple">
        <figure className="w-full h-full">
          <Image
            width={900}
            height={900}
            src={img || ""}
            alt="img"
            className="min-w-[100px] max-w-[300px] rounded-md shadow shadow-lg"
          />
        </figure>
      </article>
    </Link>
  );
};

export default CardStart;

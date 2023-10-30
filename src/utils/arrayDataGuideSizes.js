export const dataGuideSizesShoes = [
  {
    id: 0,
    title: "Calzado",
    description:
      "Tomá las medidas de tus pies antes de elegir tus zapatillas, ojotas o calzado en general. Acordate de hacerlo al final de la jornada, ya que con el paso del día los pies pueden hincharse y así aumentar su tamaño. Distribuí el peso por igual en ambos pies y ponete unas medias que uses regularmente. Recordá medirte ambos pies. La medida entre ellos puede variar y tené en cuenta que siempre se toma como referencia el pie que tenga el mayor tamaño.",
    steps: [
      {
        id: 0,
        title: "Paso 1",
        description:
          "Tomá un papel blanco y apoyalo en una superficie dura, perpendicular a la pared. Pegalo con cinta en los extremos para asegurarte de que no se mueva. Parate derecho y apoyá el talón contra el zócalo, sin que quede aire entre ambos.",
      },
      {
        id: 1,
        title: "Paso 2",
        description:
          "Con un lápiz o lapicera marcá sobre el papel el contorno entero del pie, el cual debe estar relajado, sin contraer los dedos. Acordate de repetir el proceso con el otro pie.",
      },
      {
        id: 2,
        title: "Paso 3",
        description:
          "Tomá la cinta métrica y medí la longitud que va desde el talón hasta dedo más largo que tengas. Repetí este paso con el otro pie. La medida más extensa, será el tamaño de referencia en centímetros.",
      },
    ],
    images: [
      {
        id: 0,
        imgUrl: "/guide_sizes/tallespie1.jpg",
      },
      {
        id: 1,
        imgUrl: "/guide_sizes/tallespie2.jpg",
      },
      {
        id: 2,
        imgUrl: "/guide_sizes/tallespie3.jpg",
      },
    ],
  },
];

export const arrayGuideSizesClothing = [
  {
    id: 0,
    title: "Indumentaria",
    topSide: [
      {
        id: 0,
        title: "Partes de arriba:",
        description:
          "A continuación te indicaremos cómo tomar las medidas de tu busto y cintura para que puedas elegir mejor tu parte de arriba. A lo largo del proceso, asegurate de que la cinta no quede ni demasiado floja ni demasiado apretada. Comodidad ante todo.",
        images: [
          {
            id: 0,
            imgUrl: "/guide_sizes/tallestorsoM.jpg",
          },
          {
            id: 1,
            imgUrl: "/guide_sizes/tallestorsoF.jpg",
          },
        ],
        steps: [
          {
            id: 0,
            title: "Busto",
            description:
              "Colocate delante de un espejo para confirmar que lo estés haciendo bien. Ponete la cinta métrica flexible por la espalda a la altura del contorno en posición horizontal, pasala por debajo de los brazos y cubrí toda la parte de adelante que tenga mayor superficie. Continuá hasta que los dedos que sostienen una punta de la cinta se encuentren con los que sostienen la otra. Esa va a ser tu medida.",
          },
          {
            id: 1,
            title: "Cintura",
            description:
              "Ponete la cinta métrica de forma horizontal por la espalda y medí el contorno de la cintura, justo encima de las caderas. Por lo general, la parte más estrecha coincide con la región lumbar y los músculos laterales. Cuando unos dedos se encuentren con los otros, esa va a ser tu medida.",
          },
        ],
      },
    ],
    bottomSide: [
      {
        id: 0,
        title: "Partes de abajo:",
        description:
          "A continuación te indicaremos cómo tomar las medidas de tu cintura, cadera y tiro de entrepierna para que puedas elegir mejor tu parte de abajo. A lo largo del proceso, asegurate de que la cinta no quede ni demasiado floja ni demasiado apretada, para que, una vez que tengas la prenda puesta, puedas moverte con comodidad.",
        images: [
          {
            id: 0,
            imgUrl: "/guide_sizes/tallespiernasF.jpg",
          },
          {
            id: 1,
            imgUrl: "/guide_sizes/tallespiernasM.jpg",
          },
        ],
        steps: [
          {
            id: 0,
            title: "Cintura",
            description:
              "Ponete la cinta métrica de forma horizontal por la espalda y medí el contorno de la cintura, justo encima de las caderas. Por lo general, la parte más estrecha coincide con la región lumbar y los músculos laterales. Cuando unos dedos se encuentren con los otros, esa va a ser tu medida.",
          },
          {
            id: 1,
            title: "Cadera",
            description:
              "Con los pies juntos, medí alrededor de la parte más ancha de las caderas manteniendo la cinta en horizontal. Cuando unos dedos se encuentren con los otros, esa va a ser tu medida.",
          },
          {
            id: 2,
            title: "Tiro de la entrepierna",
            description:
              "En este caso, nos referimos al largo de la prenda, desde la costura de la entrepierna hasta el dobladillo. Para calcularlo, tomá la medida desde tu entrepierna hasta el talón interno con la cinta en posición vertical.",
          },
        ],
      },
    ],
  },
];

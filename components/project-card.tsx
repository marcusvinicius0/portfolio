"use client";

import { useState } from "react";
import Image from "next/image";

import blogApresImage from "@/assets/blogexp.png";
import devNationApresImage from "@/assets/devnationexp.png";
import restaurantApresImage from "@/assets/restexp.png";

export default function ProjectCard() {
  const [cardHidden, setCardHidden] = useState<boolean>(false);

  const bestProjects = [
    {
      img: (
        <Image
          src={blogApresImage}
          width={230}
          height={250}
          alt="NextBlog imagem de apresentação"
          className="object-contain"
        />
      ),
      title: "NextBlog",
      keyWords: [
        {
          id: 1,
          title: "Next13",
        },
        {
          id: 2,
          title: "Javascript",
        },
        {
          id: 3,
          title: "Tailwind",
        },
      ],
      description:
        "Next Blog é uma aplicação fullstack onde podemos criar uma conta e se conectar, ver a listagem dos blogs, procurar e salvar os que nos interessarem. Como administrador você pode criar, editar e deletar os blogs.",
      link: "https://github.com/marcusvinicius0/Next-Blog",
    },
    {
      img: (
        <Image
          src={devNationApresImage}
          width={230}
          height={250}
          alt="Devnation imagem de apresentação"
          className="object-contain"
        />
      ),
      title: "Devnation",
      keyWords: [
        {
          id: 1,
          title: "ReactJS",
        },
        {
          id: 2,
          title: "Javascript",
        },
        {
          id: 3,
          title: "Firebase",
        },
      ],
      description:
        "DevNation é uma rede social voltada para desenvolvedores, sendo possível: criar uma conta, editar o perfil, criar publicações, encontrar repositórios do github através de sua API, salvar publicações, entre várias outras funcionalidades. Foi projetado e desenvolvido através de pair programming.",
      link: "https://github.com/marcusvinicius0/devNation",
    },
    {
      img: (
        <Image
          src={restaurantApresImage}
          width={230}
          height={250}
          alt="NextBlog imagem de apresentação"
          className="object-contain"
        />
      ),
      title: "Sistema para restaurantes",
      keyWords: [
        {
          id: 1,
          title: "Next12",
        },
        {
          id: 2,
          title: "Typescript",
        },
        {
          id: 3,
          title: "Node",
        },
      ],
      description:
        "Sistema de restaurantes é uma aplicação fullstack onde ajudamos estabelecimentos de comida, permitindo-os criar, controlar monitorar seus pedidos. O garçom chega com o aplicativo onde abre uma mesa e anota todos os pedidos do cliente. Após a confirmação, o pedido é enviado para a cozinha, onde podem acompanhar e editar através de um dashboard. Além disso, na versão web o administrador pode criar categorias e produtos para essas categorias.",
      link: "https://github.com/marcusvinicius0/restaurantsystem",
    },
  ];

  const handleCardHidden = (index: number) => {
    setCardHidden(!cardHidden);
  };

  return (
    <article className="flex flex-col justify-center items-center">
      <h2 className="font-semibold text-lg">✨ Melhores projetos</h2>

      {bestProjects.map((project, index) => {
        return (
          <div
            key={project.title}
            className="flex flex-col justify-center items-center mt-6 border w-11/12 space-y-4"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              {project.img}
            </a>
            <main className="p-2 space-y-4">
              <h3 className="font-bold">{project.title}</h3>
              <div className="flex gap-2">
                {project.keyWords.map((item) => {
                  return (
                    <span
                      key={item.title}
                      className="bg-blue-500 p-1.5 flex text-white rounded-md text-xs"
                    >
                      {item.title}
                    </span>
                  );
                })}
              </div>
              <hr />
              <p className={`text-sm ${!cardHidden && "text-ellipsis overflow-hidden whitespace-pre-wrap max-h-[160px]"}`}>{project.description}</p>
              {project.description.length > 290 && (
                <p className="text-sm cursor-pointer bg-blue-500/10 p-1  w-fit" onClick={() => handleCardHidden(index)}>
                  {cardHidden ? "ver menos..." : "ver mais..."}
                </p>
              )}
            </main>
          </div>
        );
      })}
    </article>
  );
}

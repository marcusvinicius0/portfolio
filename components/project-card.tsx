"use client";
import Image from "next/image";

import devNationApresGIF from "@/assets/previewsocialdev.gif";
import restaurantSystApresGIF from "@/assets/sistemas-pizzaria.gif";
import nextBlogApresGIF from "@/assets/nextblogapresentation.gif";

import { PlusCircle } from "lucide-react";

export default function ProjectCard() {
  const bestProjects = [
    {
      img: (
        <Image
          src={devNationApresGIF}
          alt="Devnation gif de apresentação"
          className="object-contain rounded-lg shadow-lg"
        />
      ),
      title: "Devnation",
      keyWords: [
        {
          title: "ReactJS",
        },
        {
          title: "Javascript",
        },
        {
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
          src={restaurantSystApresGIF}
          alt="Sistema para restaurantes gif de apresentação"
          className="object-contain rounded-lg shadow-lg"
        />
      ),
      title: "Sistema para restaurantes",
      keyWords: [
        {
          title: "Next12",
        },
        {
          title: "Typescript",
        },
        {
          title: "Node",
        },
      ],
      description:
        "Sistema de restaurantes é uma aplicação fullstack onde ajudamos estabelecimentos de comida, permitindo-os criar, controlar monitorar seus pedidos. O garçom chega com o aplicativo onde abre uma mesa e anota todos os pedidos do cliente. Após a confirmação, o pedido é enviado para a cozinha, onde podem acompanhar e editar através de um dashboard. Além disso, na versão web o administrador pode criar categorias e produtos para essas categorias.",
      link: "https://github.com/marcusvinicius0/restaurantsystem",
    },
    {
      img: (
        <Image
          src={nextBlogApresGIF}
          alt="NextBlog gif de apresentação"
          className="object-contain rounded-lg shadow-lg"
        />
      ),
      title: "NextBlog",
      keyWords: [
        {
          title: "Next13",
        },
        {
          title: "Javascript",
        },
        {
          title: "Tailwind",
        },
      ],
      description:
        "Next Blog é uma aplicação fullstack onde podemos criar uma conta e se conectar, ver a listagem dos blogs, procurar e salvar os que nos interessarem. Como administrador você pode criar, editar e deletar os blogs.",
      link: "https://github.com/marcusvinicius0/Next-Blog",
    },
  ];

  return (
    <section className="flex flex-col space-y-4 justify-center items-center w-full h-fit">
      <h2 className="font-semibold">✨ Melhores projetos</h2>

      {bestProjects.map((project) => {
        return (
          <div
            key={project.title}
            className="flex flex-col gap-4 p-1.5 max-w-[28.5rem] border border-gray-200 rounded-lg"
          >
            <span>{project.img}</span>
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <span className="flex gap-2 items-center">
              {project.keyWords.map((keyword: any) => {
                return (
                  <div
                    key={keyword.title}
                    className="bg-[#D6E4FF] px-1.5 py-1 rounded-full text-[#5A85FF] text-sm font-semibold"
                  >
                    {keyword.title}
                  </div>
                );
              })}
              <a href={project.link} target="_blank" rel="noopener noreferrer" title={`Ver repositório de ${project.title}`}>
                <PlusCircle className="text-[#5A85FF] w-[1.25rem] h-[1.25rem] hover:animate-pulse text-bold" />
              </a>
            </span>
            <p className="text-sm leading-6">{project.description}</p>
          </div>
        );
      })}
    </section>
  );
}

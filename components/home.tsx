import Image from "next/image";
import { BadgeCheck, XOctagon } from "lucide-react";

import blogApresImage from "@/assets/blogexp.png";
import devNationApresImage from "@/assets/devnationexp.png";
import restaurantApresImage from "@/assets/restexp.png";

interface HeroProps {
  img: JSX.Element;
  name: string;
  role: string;
  about: string;
  availableForWork: boolean;
}

export default function Home() {
  const heroSection: HeroProps[] = [
    {
      img: (
        <Image
          src="https://github.com/marcusvinicius0.png"
          width={80}
          height={80}
          alt="Marcus Vinícius Avatar"
          className="rounded-full object-contain"
        />
      ),
      name: "Marcus Vinícius Begheli",
      role: "Desenvolvedor Frontend",
      about:
        "Apaixonado por tecnologia, resolução de problemas e entusiasta da arquitetura de software. Proficiente em projetar e desenvolver soluções e layouts para desenvolvimento web. Experiência em desenvolvimento de sistemas completos de diferentes nichos, como blogs, rede social, sistema para restaurantes e indicação de leads.",
      availableForWork: true,
    },
  ];

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

  return (
    <main className="w-full mt-16 space-y-20">
      {heroSection.map((hero) => {
        return (
          <section
            key={hero.name}
            className="flex flex-col justify-center items-center p-3 space-y-6"
          >
            <div className="relative">
              {hero.img}
              <span className="absolute bottom-0">
                {hero.availableForWork ? (
                  <span title="Available for work">
                    <BadgeCheck
                      size={20}
                      className="text-green-600 bg-green-300 rounded-full"
                    />
                  </span>
                ) : (
                  <span title="Unavailable for work">
                    <XOctagon
                      size={20}
                      className="text-red-600 bg-red-300 rounded-full"
                    />
                  </span>
                )}
              </span>
            </div>
            <h1 className="font-semibold tracking-[4px]">{hero.name}</h1>
            <h5 className="font-medium tracking-[2px]">{hero.role}</h5>
            <p className="text-sm text-center leading-6 text-gray-600">
              {hero.about}
            </p>
          </section>
        );
      })}

      <article className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-lg">✨ Melhores projetos</h2>

        {bestProjects.map((project) => {
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
                <p className="text-sm">{project.description}</p>
              </main>
            </div>
          );
        })}
      </article>
    </main>
  );
}

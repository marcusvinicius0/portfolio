import Image from "next/image";
import { BadgeCheck, XOctagon } from "lucide-react";

import githubLogo from "@/assets/github.svg";
import inLogo from "@/assets/linkedin.svg";
import igLogo from "@/assets/instagram.svg";
import ProjectCard from "./project-card";

// @ts-ignore
import resume from "@/assets/marcusbeghelicv.pdf";
import IdeasCard from "./ideas-card";

interface AboutProps {
  intro: string;
  main: string;
  final?: string;
}
interface HeroProps {
  img: JSX.Element;
  name: string;
  role: string;
  about: AboutProps;
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
      about: {
        intro:
          "Olá, meu nome é Marcus Vinícius, já participei de vários projetos como desenvolvedor fullstack, com uma abrangência maior de conhecimento no lado cliente. Já trabalhei em projetos de nichos variados como restaurantes, indicação de leads, rede social, blogs, metaverso..",
        main: "💡 No meu tempo livre gosto de estar me atualizando com o mercado, estudando coisas novas, trabalhando em projetos pessoais, tendo novas ideias...",
        final: "Quer saber mais sobre minha experiência profissional?",
      },
      availableForWork: false,
    },
  ];

  const contactLinks = [
    {
      img: (
        <Image
          src={githubLogo}
          width={40}
          height={40}
          alt="Github Logo"
          className="object-contain"
        />
      ),
      name: "Github",
      autor: "marcusvinicius0",
      link: "https://github.com/marcusvinicius0",
    },
    {
      img: (
        <Image
          src={inLogo}
          width={40}
          height={40}
          alt="Linkedin Logo"
          className="object-contain"
        />
      ),
      name: "Linkedin",
      autor: "marcusvinicius",
      link: "https://www.linkedin.com/in/marcusviniciusbeghelisantos/",
    },
    {
      img: (
        <Image
          src={igLogo}
          width={40}
          height={40}
          alt="Instagram Logo"
          className="object-contain"
        />
      ),
      name: "Instagram",
      autor: "marcusbegh",
      link: "https://www.instagram.com/marcusbegheli/",
    },
  ];

  return (
    <>
      <main className="w-full mt-16 space-y-20 xl:space-y-0 xl:flex xl:flex-row xl:justify-center xl:gap-10">
        <section className="xl:sticky xl:top-28 xl:h-[250px]">
          {heroSection.map((hero) => {
            return (
              <div
                key={hero.name}
                className="flex flex-col justify-center items-center p-3 xl:p-0"
              >
                <div className="flex flex-col justify-center items-center xl:justify-start xl:items-start space-y-6 max-w-[450px]">
                  <div className="relative">
                    {hero.img}
                    <span className="absolute bottom-0">
                      {hero.availableForWork ? (
                        <span title="Disponível para projetos">
                          <BadgeCheck
                            size={20}
                            className="text-green-600 bg-green-300 rounded-full"
                          />
                        </span>
                      ) : (
                        <span title="Indisponível para projetos">
                          <XOctagon
                            size={20}
                            className="text-red-600 bg-red-300 rounded-full"
                          />
                        </span>
                      )}
                    </span>
                  </div>
                  <h1 className="font-semibold text-lg">{hero.name}</h1>
                  <h5 className="font-medium tracking-[1px] bg-[#D6E4FF]/10 p-1.5 rounded-lg text-[#5A85FF] uppercase text-sm">
                    {hero.role}
                  </h5>
                  <p className="text-sm text-center xl:text-left leading-6">
                    {hero.about.intro}
                  </p>
                  <p className="text-sm text-center xl:text-left leading-6">
                    {hero.about.main}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        <section className="space-y-10">
          <ProjectCard />
          <article className="xl:flex xl:justify-start">
            <IdeasCard />
          </article>
        </section>
      </main>

      <footer className="mt-32" id="links">
        <section className="flex flex-col justify-center items-center space-y-4">
          <h2 className="font-semibold">🔗 Links de contato</h2>
          <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            {contactLinks.map((link) => {
              return (
                <a
                  key={link.name}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <div className="border border-gray-100/90 dark:border-none dark:bg-white/90 w-44 rounded-lg p-1 flex flex-col items-center space-y-1">
                    <span>{link.img}</span>
                    <h4 className="font-semibold text-sm dark:text-black">{link.name}</h4>
                    <small className="dark:text-black">{link.autor}</small>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </footer>
    </>
  );
}

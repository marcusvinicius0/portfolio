import Image from "next/image";
import { BadgeCheck, XOctagon } from "lucide-react";
import ProjectList from "./project-list";

import githubLogo from "@/assets/github.svg";
import inLogo from "@/assets/linkedin.svg";
import igLogo from "@/assets/instagram.svg";

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

      <ProjectList />

      <section className="w-full space-y-6 flex flex-col justify-center items-center">
        <h2>🔗 Links de contato</h2>
        {contactLinks.map((link) => {
          return (
            <a
              key={link.name}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200/10 w-8/12 rounded-lg p-1.5 shadow-sm hover:bg-gray-200/5"
            >
              <div key={link.name}>
                <span className="flex items-center space-x-2">
                  <span>{link.img}</span>
                  <h4 className="font-semibold">{link.name}</h4>
                </span>
                <small>{link.autor}</small>
              </div>
            </a>
          );
        })}
      </section>
    </main>
  );
}

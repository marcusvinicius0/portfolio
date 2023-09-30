import Image from "next/image";

import nextLogo from "@/assets/next-js-seeklogo.com.svg";

export default function IdeasCard() {
  const ideas = [
    {
      img: (
        <Image
          src={nextLogo}
          alt="Logo do nextjs"
          width={40}
          height={40}
          className="object-contain"
        />
      ),
      title: "Daharo Fastfood",
      date: "15/09/2023",
      repository: "https://github.com/marcusvinicius0/daharo-fastfood",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <h2 className="font-semibold">💡 Algumas idéias...</h2>
      <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        {ideas.map((idea) => {
          return (
            <a
              key={idea.title}
              href={idea.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <div
                key={idea.title}
                className="border border-gray-100/90 w-44 rounded-lg p-1 flex flex-col items-center"
              >
                <span>{idea.img}</span>
                <h4 className="font-semibold text-sm">{idea.title}</h4>
                <time>{idea.date}</time>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

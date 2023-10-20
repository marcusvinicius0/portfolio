import ThemeSwitcher from "./themeSwitcher";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <>
      <hr className="border-gray-300/90 dark:border-white/50 mt-20" />
      <footer className="w-full h-fit p-2">
        <div className="space-y-2 flex flex-col justify-center items-center">
          <p className="font-normal text-sm tracking-wide text-gray-500 dark:text-white text-center w-fit">
            Feito com 💖 por{" "}
            <a
              href="https://github.com/marcusvinicius0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold"
            >
              Marcus Vinícius
            </a>
          </p>
          <p className="font-normal text-sm tracking-wide text-gray-500 dark:text-white text-center w-fit">
            © {currentYear}
          </p>
        </div>

        <div>
          <ThemeSwitcher />
        </div>
      </footer>
    </>
  );
}

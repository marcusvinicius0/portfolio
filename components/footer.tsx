export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <>
      <hr className="border-gray-300/90 mt-6" />
      <footer className="w-full h-fit p-2 space-y-2 flex flex-col justify-center items-center">
        <p className="font-normal text-sm tracking-wide text-gray-500 text-center w-fit">
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
        <p className="font-normal text-sm tracking-wide text-gray-500 text-center w-fit">
          © {currentYear}
        </p>
      </footer>
    </>
  );
}

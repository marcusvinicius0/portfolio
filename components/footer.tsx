export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="w-full h-fit mt-8 p-2 space-y-2">
      <hr />
      <p className="font-normal text-sm tracking-wide text-gray-500 text-center">
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
      <p className="font-normal text-sm tracking-wide text-gray-500 text-center">
        © {currentYear} - Todos os direitos reservados
      </p>
    </footer>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col text-sm items-center justify-between text-center bg-dark-blue px-40 py-10 gap-10 lg:h-64 lg:flex-row lg:text-base lg:text-left lg:gap-36">
        <div className="flex flex-col gap-3 h-full">
          <span className="font-medium" style={{ color: "#2594EA" }}>
            STARTUPS GLOBAL LINK
          </span>
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} por Startups Global Link
          </p>
        </div>
        <div className="flex justify-center flex-col gap-3 h-full">
          <span className="font-medium text-purple-500">Suporte</span>
          <ul className="flex flex-col text-gray-300">
            <li className="mb-4 font-semibold">
              <Link href="#">Termos e Condições</Link>
            </li>
            <li className="mb-4 font-semibold">
              <Link href="#">Política de Privacidade</Link>
            </li>
            <li className="mb-4 font-semibold">
              <Link href="#">
                Política de Entrega e Prazos para Produtos Digitais
              </Link>
            </li>
            <li className="mb-4 font-semibold">
              <Link href="#">
                Política de Troca, Devolução e Reembolso para Produtos Digitais
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 h-full">
          <span className="font-medium text-purple-500">Redes Sociais</span>
          <ul className="text-gray-300">
            <li className="mb-4 font-semibold">
              <Link href="#">Linkedin</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

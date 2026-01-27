import { Button } from "../../../../components/ui/button";
import { ArrowRight, Store } from "lucide-react";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <section className="relative bg-gradient-to-b from-cyan-950/20 to-gray-700 py-24">
      <div className="absolute inset-0 hidden md:block bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="relative container">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-sans text-center text-balance text-gray-100 text-heading-xl">
            Crie sua loja online e inicie suas vendas ainda hoje
          </h2>
          <Button variant="primary" className="mt-6" asChild>
            <Link href="/criar-loja">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute p-4 bg-cyan-300 w-fit rounded-full top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-lg shadow-cyan-300/50">
        <Store className="text-cyan-100" />
      </div>
    </section>
  );
};

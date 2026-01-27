import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";

export const SupportSection = () => {
  return (
    <section className="relative bg-gray-700 pb-8 md:py-10">
      <div className="absolute inset-0 hidden md:block bg-[url('/background-features.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className=" relative container flex flex-col items-center gap-12">
        <h2 className="font-sans text-center text-balance text-gray-100 text-heading-xl">
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex size-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <PaintbrushVertical className="size-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Personalize o seu site
            </strong>
            <p className="text-body-sm text-gray-100">
              Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com
              a sua cara.
            </p>
          </div>

          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-cyan-300">
            <div className="flex size-12 items-center justify-center rounded-lg bg-cyan-200 mb-4">
              <Store className="size-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Venda de qualquer loja
            </strong>
            <p className="text-body-sm text-gray-100">
              Não importa a loja, o Site.Set permite que você insira qualquer
              link de afiliado.
            </p>
          </div>

          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex size-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <HeartHandshake className="size-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Receba suporte amigável
            </strong>
            <p className="text-body-sm text-gray-100">
              Nossa equipe estará sempre pronta para te atender para ajudar no
              que for preciso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

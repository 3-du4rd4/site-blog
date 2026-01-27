import Image from "next/image";

const customerStory = [
  {
    content:
      "Criar minha loja com o site.net foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.",
    author: {
      name: "Annette Bones",
      role: "CEO na Anne Corp",
      avatar: "/customer-01.png",
    },
  },
  {
    content:
      "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
    author: {
      name: "Jacob Jones",
      role: "CEO na JJ Org",
      avatar: "/customer-02.png",
    },
  },
];

export const CustomerStorySection = () => {
  return (
    <section className="container bg-gray-700 py-8 md:py-20">
      <div className="flex flex-col items-center gap-12">
        <h2 className="font-sans text-center text-balance text-gray-100 text-heading-xl">
          Quem utiliza, aprova!
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {customerStory.map((story, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 bg-gray-500 p-6 rounded-lg md:p-12"
            >
              <p className="text-balance text-gray-200 italic">
                {story.content}
              </p>

              <div className="flex items-center gap-3">
                <div className="relative size-10 overflow-hidden rounded-full">
                  <Image
                    src={story.author.avatar}
                    alt={story.author.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <strong className="text-gray-200 text-sm">
                    {story.author.name}
                  </strong>
                  <span className="text-gray-300 text-xs">
                    {story.author.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

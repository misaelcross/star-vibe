"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "client-1.jpg",
    name: "J. S.",
    userName: "Modelo e Criadora de Conteúdo",
    comment:
      "Incrível como a plataforma mudou minha vida! Em apenas 3 meses, minha renda triplicou e tenho total controle sobre meu conteúdo. A proteção contra vazamentos me dá muita segurança.",
    rating: 5.0,
  },
  {
    image: "client-2.jpg",
    name: "C. S.",
    userName: "Modelo e Criadora de Conteúdo",
    comment:
      "A melhor decisão que tomei foi migrar para cá. Zero taxas abusivas, pagamentos sempre em dia e uma comunidade incrível. Minha base de fãs cresceu 200% desde que comecei!",
    rating: 4.9,
  },
  {
    image: "client-3.jpg",
    name: "A. O.",
    userName: "Modelo e Criadora de Conteúdo",
    comment:
      "Finalmente uma plataforma que realmente se importa com os criadores. O suporte é excepcional, e as ferramentas de monetização são perfeitas. Consigo focar 100% no meu conteúdo.",
    rating: 5.0,
  },
  {
    image: "client-4.jpg",
    name: "P. C.",
    userName: "Modelo e Criadora de Conteúdo",
    comment:
      "Como fotógrafo, a qualidade da entrega das imagens é fundamental. A plataforma mantém a resolução original e ainda protege contra downloads não autorizados. Simplesmente perfeito!",
    rating: 5.0,
  },
  {
    image: "client-5.jpg",
    name: "M. L.",
    userName: "Modelo e Criadora de Conteúdo",
    comment:
      "O sistema de mensagens privadas e a facilidade para postar conteúdo exclusivo são imbatíveis. Minha interação com os fãs aumentou muito, e a renda é bem maior que em outras plataformas.",
    rating: 5.0,
  },
  {
    image: "client-6.jpg",
    name: "L. S.",
    userName: "Modelo e Criadora de Conteúdo",
    comment:
      "A plataforma oferece todas as ferramentas que eu precisava para monetizar minha arte. O sistema de assinaturas é transparente, e o suporte técnico está sempre disponível para ajudar.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Depoimentos
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Depoimentos de quem já usa a plataforma
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={review.image}
                        alt={review.name}
                        className="object-cover"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

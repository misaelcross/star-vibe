import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  title: string;
  description: string;
}

const testimonialsList = [
  {
    name: "Julia Santos",
    title: "Criadora de Conteúdo",
    description:
      "A plataforma mudou minha vida! Com as ferramentas de proteção de conteúdo, posso criar com tranquilidade. Minha renda triplicou em 3 meses.",
  },
  {
    name: "Carlos Silva",
    title: "Influenciador Digital",
    description:
      "O sistema de monetização direta é incrível. Sem taxas abusivas e com pagamentos pontuais. Minha comunidade cresceu 200% desde que comecei.",
  },
  {
    name: "Ana Oliveira",
    title: "Modelo e Criadora",
    description:
      "A privacidade e segurança são excepcionais. O suporte 24/7 sempre me ajuda quando preciso. Melhor plataforma que já usei!",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Depoimentos
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Histórias de Sucesso
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Veja como nossos criadores estão transformando suas carreiras e alcançando independência financeira!
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsList.map((testimonial) => (
          <Card key={testimonial.name} className="bg-muted/60 dark:bg-card relative">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <Avatar>
                <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <h4 className="text-lg font-bold">{testimonial.name}</h4>
                <p className="text-muted-foreground">{testimonial.title}</p>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {testimonial.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Gratuito",
    popular: 0,
    price: 0,
    description:
      "Comece a vender seu conteúdo sem custos iniciais. Ideal para novos criadores.",
    buttonText: "Começar Agora",
    benefitList: [
      "Até 100 imagens",
      "5 vendas por mês",
      "Suporte por email",
      "Pagamentos seguros",
      "Proteção de conteúdo",
    ],
  },
  {
    title: "Profissional",
    popular: 1,
    price: 49.90,
    description:
      "Tudo que você precisa para crescer como criador de conteúdo.",
    buttonText: "Começar Agora",
    benefitList: [
      "Imagens ilimitadas",
      "Vendas ilimitadas",
      "Suporte prioritário",
      "Assinatura mensal de clientes",
      "Estatísticas avançadas",
    ],
  },
  {
    title: "Premium",
    popular: 0,
    price: 89.90,
    description:
      "Recursos avançados para criadores que querem máxima interação.",
    buttonText: "Começar Agora",
    benefitList: [
      "Imagens e vídeos ilimitados",
      "Vendas ilimitadas",
      "Suporte prioritário 24/7",
      "Chat com clientes",
      "Assinatura mensal de clientes",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Planos
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Escolha o plano ideal para você
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Comece gratuitamente e aumente seus ganhos com nossos planos premium.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">R$ {price.toFixed(2).replace(".", ",")}</span>
                  <span className="text-muted-foreground"> /mês</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

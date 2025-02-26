import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { RegisterModal } from "../register-modal";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Wallet",
    title: "Comissão Zero",
    description:
      "Mantenha 100% dos seus ganhos, pagando apenas as taxas de processamento de pagamento. Sem comissões abusivas.",
  },
  {
    icon: "Zap",
    title: "Pagamentos Rápidos",
    description:
      "Receba seus pagamentos de forma rápida e segura. Sistema automatizado de pagamentos com total transparência.",
  },
  {
    icon: "Shield",
    title: "Privacidade Garantida",
    description:
      "Proteção total do seu conteúdo com sistema avançado de segurança. Você tem controle total sobre quem acessa seu conteúdo.",
  },
  {
    icon: "Sparkle",
    title: "Suporte Dedicado",
    description:
      "Conte com nossa equipe de suporte especializada para ajudar você em todas as etapas do seu sucesso na plataforma.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div className="justify-start items-start flex flex-col">
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefícios</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por Que Nos Escolher?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Descubra as vantagens de fazer parte da nossa plataforma e como
            podemos ajudar você a monetizar seu conteúdo de forma eficiente
            e segura.
          </p>
          <div className="mt-4 text-left">
            <RegisterModal
              buttonText="Quero me cadastrar"
              triggerClassName="px-6 font-bold group/arrow flex items-center justify-center mx-auto bg-gradient-to-r from-[#D247BF] to-primary text-white hover:opacity-90"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

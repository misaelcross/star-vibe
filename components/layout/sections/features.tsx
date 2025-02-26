import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { ArrowRight } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Users",
    title: "Gestão de Assinantes",
    description:
      "Ferramentas completas para gerenciar seus assinantes, incluindo níveis de acesso, mensagens em massa e relatórios detalhados.",
  },
  {
    icon: "Image",
    title: "Conteúdo Exclusivo",
    description:
      "Compartilhe fotos, vídeos e lives exclusivas com seus assinantes. Defina preços e restrições de acesso facilmente.",
  },
  {
    icon: "CreditCard",
    title: "Pagamentos Seguros",
    description:
      "Sistema de pagamento integrado com as principais bandeiras e processadores. Receba seus pagamentos com segurança e rapidez.",
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Destaques
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Recursos Poderosos
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Tudo que você precisa para gerenciar e crescer seu negócio digital
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

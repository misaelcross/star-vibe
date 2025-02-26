import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { ArrowRight } from "lucide-react";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Monetização Direta",
    description:
      "Receba pagamentos diretamente dos seus fãs através de assinaturas mensais e conteúdo exclusivo.",
    pro: 0,
  },
  {
    title: "Proteção de Conteúdo",
    description:
      "Sistema avançado de proteção contra downloads e compartilhamentos não autorizados.",
    pro: 0,
  },
  {
    title: "Chat Privativo",
    description: "Comunicação direta e segura com seus assinantes.",
    pro: 0,
  },
  {
    title: "Análise Avançada",
    description: "Métricas detalhadas sobre seu desempenho e engajamento dos fãs.",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Serviços
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Potencialize Sua Carreira
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Oferecemos todas as ferramentas necessárias para você monetizar seu conteúdo
        com segurança e liberdade criativa.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

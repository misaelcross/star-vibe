import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Como funciona a monetização na plataforma?",
    answer: "Você pode monetizar seu conteúdo através de assinaturas mensais, conteúdo exclusivo e mensagens privadas. Mantemos uma política de comissão zero, onde você só paga as taxas de processamento de pagamento.",
    value: "item-1",
  },
  {
    question: "Como meu conteúdo é protegido?",
    answer: "Utilizamos tecnologia avançada de proteção contra downloads não autorizados e sistemas de marca d'água. Você tem controle total sobre quem pode acessar seu conteúdo.",
    value: "item-2",
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos as principais bandeiras de cartão de crédito, PIX e transferência bancária. Os pagamentos são processados de forma segura e você recebe seus ganhos regularmente em sua conta bancária.",
    value: "item-3",
  },
  {
    question: "Como começar a criar conteúdo na plataforma?",
    answer: "Basta se cadastrar, verificar sua identidade, configurar seu perfil e começar a publicar seu conteúdo. Nossa equipe de suporte está disponível para ajudar em todas as etapas do processo.",
    value: "item-4",
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Perguntas Frequentes
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

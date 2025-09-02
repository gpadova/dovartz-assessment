import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MessageCircle } from "lucide-react";
import { Testimonials } from "./testimonials";
import { FAQSection } from "./faq-section";
import { QUESTIONNAIRE_STEPS, WHATSAPP_NUMBER } from "@/lib/constants";

interface CompletionPageProps {
  answers: string[];
}

export function CompletionPage({ answers }: CompletionPageProps) {
  const handleWhatsAppContact = () => {
    // Create a summary of the client's answers
    const answersSummary = QUESTIONNAIRE_STEPS.map((step, index) => {
      return `${step.question}\n→ ${answers[index]}`;
    }).join("\n\n");

    const message = encodeURIComponent(
      `Olá! Acabei de completar o questionário de automação residencial. Gostaria de saber mais sobre as soluções para minha casa.

📋 Minhas respostas:

${answersSummary}

  Aguardo contato para agendarmos a visita técnica gratuita!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background px-4 mt-8">
      <div className="w-full max-w-4xl mx-auto">
        <Card className="bg-card border-border shadow-lg mb-8">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Questionário Concluído!
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Obrigado por compartilhar suas preferências. Com base nas suas
                respostas, podemos criar a solução de automação perfeita para
                sua casa.
              </p>
              <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-primary mb-2">
                  Oferta Especial!
                </h2>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Visita Técnica Gratuita
                </h3>
                <p className="text-foreground mb-4">
                  Avaliação completa e projeto personalizado sem custo para sua
                  casa + 10% de desconto no seu orçamento
                </p>
                <p className="text-sm text-muted-foreground">
                  Oferta válida por tempo limitado para novos clientes
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6 mb-8 text-left">
              <h3 className="font-semibold text-foreground mb-4">
                Suas Respostas:
              </h3>
              {QUESTIONNAIRE_STEPS.map((step, index) => (
                <div key={index} className="mb-3 last:mb-0">
                  <p className="text-sm text-muted-foreground mb-1">
                    {step.question}
                  </p>
                  <p className="font-medium text-foreground">
                    {answers[index]}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={handleWhatsAppContact}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Sim, quero agora
              </Button>

              <Button
                onClick={handleWhatsAppContact}
                variant="outline"
                className="px-8 py-3 text-lg bg-transparent border-primary text-primary hover:bg-primary/10"
              >
                Quero saber mais
              </Button>
            </div>
          </CardContent>
        </Card>

        <Testimonials />
        <FAQSection />
      </div>
    </div>
  );
}

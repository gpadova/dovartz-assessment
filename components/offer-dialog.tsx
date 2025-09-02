"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import Lottie, { LottieOptions } from "lottie-react";
import { Gift } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface OfferDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContinue: () => void;
}

export function OfferDialog({
  open,
  onOpenChange,
  onContinue,
}: OfferDialogProps) {
  const handleWhatsAppContact = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="sr-only">Oferta Especial</DialogTitle>
        </DialogHeader>
        <div className="text-center p-6">
          <div className="mb-0 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-foreground mb-0">
              Oferta Especial!
            </h1>
            {/* <div className="max-w-72 flex justify-center">
              <Lottie animationData={giftAnimation} loop={true} size={100} />
            </div> */}
            <Gift className="w-16 h-16 text-primary mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Por estar interessado em automação residencial, você ganhou uma
            </p>
            <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-primary mb-2">
                Visita Técnica Gratuita
              </h2>
              <p className="text-foreground">
                Avaliação completa e projeto personalizado sem custo para sua
                casa + 10% de desconto no seu orçamento
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Oferta válida por tempo limitado para novos clientes
            </p>
          </div>
          <div className="flex gap-4 justify-center mt-2">
            <Button
              onClick={onContinue}
              className="bg-transparent hover:bg-primary/90 hover:text-primary-foreground text-primary border-primary border px-8 py-3 text-lg"
            >
              Continuar
            </Button>
            <Button
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            >
              <FaWhatsapp className="w-5 h-5" />
              Aproveitar oferta
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationControlsProps {
  currentStep: number;
  totalSteps: number;
  selectedOption: string;
  onPrevious: () => void;
  onNext: () => void;
}

export function NavigationControls({
  currentStep,
  totalSteps,
  selectedOption,
  onPrevious,
  onNext,
}: NavigationControlsProps) {
  return (
    <div className="flex justify-between items-center">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={currentStep === 0}
        className="flex items-center gap-2 px-6 py-3 bg-transparent"
      >
        <ChevronLeft className="w-4 h-4" />
        Anterior
      </Button>

      <Button
        onClick={onNext}
        disabled={!selectedOption}
        className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        {currentStep === totalSteps - 1 ? "Finalizar" : "Próxima"}
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}

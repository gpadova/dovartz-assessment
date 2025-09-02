import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-muted-foreground">
          Pergunta {currentStep + 1} de {totalSteps}
        </span>
        <span className="text-sm text-muted-foreground">
          {Math.round(progress)}% concluído
        </span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}

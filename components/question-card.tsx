import { Card, CardContent } from "@/components/ui/card";

interface QuestionCardProps {
  question: string;
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
}

export function QuestionCard({
  question,
  options,
  selectedOption,
  onOptionSelect,
}: QuestionCardProps) {
  return (
    <Card className="bg-card border-border shadow-lg mb-8">
      <CardContent className="p-8">
        <h2 className="text-xl font-semibold text-foreground mb-8 text-center leading-relaxed">
          {question}
        </h2>

        <div className="space-y-3">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => onOptionSelect(option)}
              className={`w-full cursor-pointer p-4 text-left rounded-lg border-2 transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 ${
                selectedOption === option
                  ? "border-primary bg-primary/10 text-foreground"
                  : "border-border bg-background text-foreground"
              }`}
            >
              <span className="text-lg">{option}</span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

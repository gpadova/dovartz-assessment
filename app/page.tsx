"use client";

import { useState } from "react";
import { OfferDialog } from "@/components/offer-dialog";
import { QuestionnaireHeader } from "@/components/questionnaire-header";
import { ProgressBar } from "@/components/progress-bar";
import { QuestionCard } from "@/components/question-card";
import { NavigationControls } from "@/components/navigation-controls";
import { CompletionPage } from "@/components/completion-page";
import { QUESTIONNAIRE_STEPS } from "@/lib/constants";

export default function HomeAutomationQuestionnaire() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [showOffer, setShowOffer] = useState(false);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      const newAnswers = [...answers];
      newAnswers[currentStep] = selectedOption;
      setAnswers(newAnswers);

      if (currentStep === 1 && !showOffer) {
        setShowOffer(true);
        return;
      }

      if (currentStep < QUESTIONNAIRE_STEPS.length - 1) {
        setCurrentStep(currentStep + 1);
        setSelectedOption(newAnswers[currentStep + 1] || "");
      } else {
        setIsCompleted(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedOption(answers[currentStep - 1] || "");
    }
  };

  const handleContinueFromOffer = () => {
    setShowOffer(false);
    if (currentStep < QUESTIONNAIRE_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(answers[currentStep + 1] || "");
    } else {
      setIsCompleted(true);
    }
  };

  if (isCompleted) {
    return <CompletionPage answers={answers} />;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        <QuestionnaireHeader />

        <OfferDialog
          open={showOffer}
          onOpenChange={setShowOffer}
          onContinue={handleContinueFromOffer}
        />

        <ProgressBar
          currentStep={currentStep}
          totalSteps={QUESTIONNAIRE_STEPS.length}
        />

        <QuestionCard
          question={QUESTIONNAIRE_STEPS[currentStep].question}
          options={QUESTIONNAIRE_STEPS[currentStep].options}
          selectedOption={selectedOption}
          onOptionSelect={handleOptionSelect}
        />

        <NavigationControls
          currentStep={currentStep}
          totalSteps={QUESTIONNAIRE_STEPS.length}
          selectedOption={selectedOption}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}

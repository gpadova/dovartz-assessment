import Image from "next/image";

export function QuestionnaireHeader() {
  return (
    <div className="text-center flex flex-col items-center mb-4">
      <Image
        src="/dovartz-logo.png"
        alt="Dovartz Logo"
        width={300}
        height={300}
      />
      <p className="text-muted-foreground">
        Descubra a solução perfeita para sua casa inteligente
      </p>
    </div>
  );
}

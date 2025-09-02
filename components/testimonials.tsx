import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <Card className="bg-card border-border shadow-lg mb-8">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <Star className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground">
            Experiências reais de quem já transformou sua casa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-muted rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-foreground mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

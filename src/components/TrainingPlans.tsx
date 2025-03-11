
import { Check } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    id: 1,
    name: "Plan Básico",
    price: "$49.99",
    description: "Ideal para principiantes que buscan introducirse al entrenamiento estructurado.",
    features: [
      "Plan de entrenamiento de 4 semanas",
      "Rutinas de 3 días por semana",
      "Guía básica de nutrición",
      "Soporte por correo electrónico"
    ],
    highlighted: false
  },
  {
    id: 2,
    name: "Plan Premium",
    price: "$89.99",
    description: "Para personas comprometidas que buscan resultados consistentes y duraderos.",
    features: [
      "Plan de entrenamiento de 8 semanas",
      "Rutinas de 4-5 días por semana",
      "Plan nutricional personalizado",
      "Seguimiento semanal por WhatsApp",
      "Ajustes durante el programa"
    ],
    highlighted: true
  },
  {
    id: 3,
    name: "Plan Elite",
    price: "$149.99",
    description: "Máxima personalización y atención para quienes buscan transformaciones significativas.",
    features: [
      "Plan de entrenamiento de 12 semanas",
      "Rutinas 5-6 días por semana",
      "Plan nutricional detallado con alternativas",
      "Videollamadas quincenales",
      "Acceso a biblioteca de ejercicios en video",
      "Ajustes ilimitados durante el programa"
    ],
    highlighted: false
  }
];

const TrainingPlans = () => {
  return (
    <section id="plans" className="section bg-fitness-light">
      <h2 className="section-title">Planes de Entrenamiento</h2>
      <p className="text-center text-fitness-muted max-w-3xl mx-auto mb-12">
        Elige el plan que mejor se adapte a tus objetivos y nivel actual. Todos los planes incluyen atención personalizada para asegurar que logres tus metas.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card 
            key={plan.id} 
            className={`flex flex-col h-full transition-all duration-300 hover:shadow-lg ${
              plan.highlighted ? 'border-fitness-accent border-2 shadow-md' : ''
            }`}
          >
            <CardHeader>
              <CardTitle className="text-xl font-bold text-fitness-primary">
                {plan.name}
              </CardTitle>
              <CardDescription className="text-lg font-bold text-fitness-dark mt-2">
                {plan.price}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex-grow">
              <p className="text-fitness-muted mb-4">{plan.description}</p>
              
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-fitness-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter className="pt-4">
              <WhatsAppButton 
                planName={plan.name} 
                className={plan.highlighted ? "w-full" : "w-full bg-fitness-primary"} 
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TrainingPlans;

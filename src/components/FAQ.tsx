
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué ocurre después de contratar un plan?",
    answer: "Después de realizar tu contratación, recibirás un formulario detallado para evaluar tu nivel actual, objetivos y preferencias. Con esta información, crearé tu plan personalizado que recibirás en un plazo de 48-72 horas."
  },
  {
    question: "¿Necesito experiencia previa en entrenamiento?",
    answer: "No, mis planes se adaptan a todos los niveles, desde principiantes absolutos hasta atletas avanzados. Cada plan se personaliza según tu experiencia y nivel actual."
  },
  {
    question: "¿Qué ocurre si no tengo acceso a un gimnasio?",
    answer: "No hay problema. Puedo adaptar los planes para entrenar en casa con equipamiento mínimo o incluso sin equipamiento. Simplemente indícalo en tu formulario inicial."
  },
  {
    question: "¿Cuánto tiempo tardará en verse resultados?",
    answer: "Los resultados varían según factores como consistencia, genética y punto de partida. Generalmente, las primeras mejoras en fuerza y resistencia se perciben en 2-3 semanas, mientras que los cambios físicos visibles suelen aparecer entre 4-8 semanas de entrenamiento constante."
  },
  {
    question: "¿Cómo se realiza el seguimiento durante el plan?",
    answer: "Dependiendo del plan elegido, el seguimiento puede ser por correo electrónico, WhatsApp o videollamadas. Te pediré actualizaciones periódicas y fotos de progreso para realizar los ajustes necesarios."
  },
  {
    question: "¿Qué pasa si no puedo seguir el plan exactamente como está diseñado?",
    answer: "La vida puede ser impredecible. Si enfrentas dificultades para seguir el plan, comunícate conmigo y haremos los ajustes necesarios. La flexibilidad es parte del proceso para asegurar resultados a largo plazo."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section bg-white">
      <h2 className="section-title">Preguntas Frecuentes</h2>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium text-fitness-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-fitness-muted">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

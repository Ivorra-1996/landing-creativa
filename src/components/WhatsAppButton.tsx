
import { MessageSquare } from "lucide-react";

interface WhatsAppButtonProps {
  planName?: string;
  className?: string;
}

const WhatsAppButton = ({ planName, className = "" }: WhatsAppButtonProps) => {
  const baseMessage = "Hola, estoy interesado en obtener más información";
  const message = planName 
    ? `${baseMessage} sobre el plan de entrenamiento "${planName}".` 
    : baseMessage;
  
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "12345678"; // Reemplazar con tu número de WhatsApp real
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`btn-primary ${className}`}
    >
      <MessageSquare className="mr-2 h-5 w-5" />
      Contactar por WhatsApp
    </a>
  );
};

export default WhatsAppButton;

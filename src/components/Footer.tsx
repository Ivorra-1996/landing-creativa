
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const Footer = () => {
  return (
    <footer id="contact" className="bg-fitness-dark text-white">
      <div className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-fitness-accent">EntrenadorPRO</h3>
            <p className="text-gray-300 mb-4">
              Transformando vidas a través del entrenamiento personalizado de alta calidad y planes nutricionales efectivos.
            </p>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-fitness-accent">Contacto</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-fitness-accent" />
                <span>+123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-fitness-accent" />
                <a href="mailto:contacto@entrenadorpro.com" className="hover:text-fitness-accent transition-colors">
                  contacto@entrenadorpro.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-fitness-accent" />
                <span>Ciudad, País</span>
              </li>
            </ul>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-fitness-accent">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-fitness-accent transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-fitness-accent transition-colors">Planes</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-fitness-accent transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#about" className="hover:text-fitness-accent transition-colors">Sobre Mí</a>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-fitness-accent">Conecta</h3>
            <div className="mb-4">
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-fitness-accent transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                <span>@entrenadorpro</span>
              </a>
            </div>
            <WhatsAppButton className="w-full" />
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} EntrenadorPRO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

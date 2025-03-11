
import { Award, BookOpen, Users } from "lucide-react";

const achievements = [
  {
    icon: <Award className="h-8 w-8 text-fitness-accent" />,
    title: "Certificación Internacional",
    description: "Certificado en entrenamiento personal por organizaciones reconocidas globalmente."
  },
  {
    icon: <Users className="h-8 w-8 text-fitness-accent" />,
    title: "+500 Clientes Satisfechos",
    description: "He ayudado a más de 500 personas a alcanzar sus objetivos fitness."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-fitness-accent" />,
    title: "Formación Continua",
    description: "Constantemente actualizo mis conocimientos para ofrecer los métodos más efectivos."
  }
];

const AboutMe = () => {
  return (
    <section id="about" className="section bg-fitness-primary text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-white">Sobre Mí</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-fitness-accent">
              {/* Replace with your actual profile picture */}
              <img 
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Entrenador Personal" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Biography */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-fitness-accent">Nombre del Entrenador</h3>
            <p className="text-gray-200 mb-6">
              Soy un entrenador personal apasionado por ayudar a las personas a transformar sus vidas a través del fitness. 
              Con más de 8 años de experiencia, he desarrollado un enfoque que combina entrenamiento efectivo, nutrición 
              adecuada y mentalidad positiva para lograr resultados duraderos.
            </p>
            <p className="text-gray-200 mb-6">
              Mi filosofía se basa en crear planes personalizados que se adapten a tu estilo de vida y necesidades únicas, 
              no en soluciones genéricas que funcionan para pocos. Creo firmemente que cada persona tiene el potencial para 
              lograr su mejor versión física y mental.
            </p>
          </div>
        </div>
        
        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-fitness-primary/50 p-6 rounded-lg border border-fitness-accent/30 text-center">
              <div className="flex justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

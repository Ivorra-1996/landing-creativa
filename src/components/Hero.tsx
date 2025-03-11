
import WhatsAppButton from "./WhatsAppButton";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-fitness-primary text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-fitness-primary to-fitness-primary/80 z-10"></div>
      
      {/* Hero background - Replace with your own image URL */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      
      <div className="section relative z-20 flex flex-col items-center justify-center min-h-[90vh] text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Transforma Tu Cuerpo<br />
          <span className="text-fitness-accent">Alcanza Tus Metas</span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mb-10 text-gray-100">
          Planes de entrenamiento personalizados diseñados para ayudarte a conseguir 
          el mejor estado físico de tu vida, sin importar tu nivel actual.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#plans" 
            className="btn-primary bg-fitness-accent min-w-[200px]"
          >
            Ver Planes
          </a>
          
          <WhatsAppButton className="bg-white text-fitness-primary hover:bg-gray-100 min-w-[200px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

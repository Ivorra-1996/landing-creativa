
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrainingPlans from "@/components/TrainingPlans";
import FAQ from "@/components/FAQ";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main>
        <Hero />
        <TrainingPlans />
        <FAQ />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

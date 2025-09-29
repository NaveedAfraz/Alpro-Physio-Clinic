import Header from "../components/home/header";
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Services from "../components/home/services";
import OnlineConsultation from "../components/home/onlineConsultation";
import WhyChoose from "../components/home/whyChoose";
import Testimonials from "../components/home/testimonials";
import Contact from "../components/home/contact";
import Footer from "../components/home/footer";
import { TeamSection } from "@/components/home/ourTeam";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <OnlineConsultation />
      <WhyChoose />
      <TeamSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

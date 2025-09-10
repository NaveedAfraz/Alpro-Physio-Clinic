import Header from "../components/home/header";
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Services from "../components/home/services";
import WhyChoose from "../components/home/whyChoose";
import Testimonials from "../components/home/testimonials";
import Contact from "../components/home/contact";
import Footer from "../components/home/footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

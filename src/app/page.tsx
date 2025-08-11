import { HeroHighlight } from "@/components/ui/hero-highlight";
  import AboutSection from "./components/About";
  import Highlights from "./components/High";
  import Works from "./components/Works";
  import ContactSection from "./components/Form";
  import Footer from "./components/Footer";
  import { RainbowButton } from "@/components/ui/rainbow-button";
  import Particles from "@/components/ui/Particles";

  export default function Home() {
    return (
      <div className="overflow-x-hidden">
        <div style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor: 'black' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={500}
            particleSpread={8}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
          <div
            id="hero"
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 py-10 max-w-7xl mx-auto"
          >
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient">
              We Build. You Grow.
            </h1>

            {/* Sub-heading */}
            <p className="text-base sm:text-lg md:text-2xl text-white/90 max-w-md sm:max-w-3xl mb-4 sm:mb-6 leading-relaxed">
              Your all-in-one digital partner — crafting stunning websites, powerful mobile apps, smart SEO strategies, and engaging video content that grows your brand and connects with your audience.
            </p>

            {/* Feature Bullets */}
          

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
              <a href="#contact">
                <RainbowButton>
                  Get Started Today
                </RainbowButton>
              </a>
              <a href="#contact">
                <RainbowButton>
                  Learn More
                </RainbowButton>
              </a>
            </div>
          </div>
        </div>

        <AboutSection />
        <Highlights />
        <Works />
        <ContactSection />
        <Footer />
      </div>
    );
  }

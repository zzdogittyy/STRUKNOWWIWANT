import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-[#c4c4c4]">
      <div className="absolute inset-0 opacity-100">
        <img
          src="/high-resolution-concrete-wall-textured-background-38968053.webp"
          alt="Concrete Texture"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/70 z-10"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      <div className="absolute inset-0 blueprint-overlay opacity-5 z-20" />

      <div className="absolute inset-0 grid-overlay opacity-3 z-20" />

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-30" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-30" />
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent z-30" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent z-30" />

      <div className="relative z-30 h-full flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="floating-particles mb-8">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gray-300" />
            <span className="text-gray-200 tracking-[0.3em] text-sm font-light uppercase">Est. 2017</span>
            <div className="h-px w-12 bg-gray-300" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-tight text-white">
            <span className="block text-reveal" style={{ animationDelay: '0.2s' }}>
              BUILDING THE
            </span>
            <span className="block text-reveal bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent" style={{ animationDelay: '0.4s' }}>
              FUTURE
            </span>
            <span className="block text-gray-300 text-reveal" style={{ animationDelay: '0.6s' }}>
              WITH PRECISION
            </span>
          </h1>

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8" />

          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto mb-12 font-light leading-relaxed fade-in" style={{ animationDelay: '0.8s' }}>
            Jothom Construction delivers world-class structures engineered with integrity and innovation.
          </p>

          <button className="group relative px-12 py-5 bg-transparent border-2 border-gray-300 text-white font-medium tracking-wider uppercase overflow-hidden transition-all duration-500 hover:text-gray-900 fade-in" style={{ animationDelay: '1s' }}>
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <div className="absolute inset-0 border border-gray-300 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
          </button>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-300" />
          </div>
        </div>
      </div>

      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-40 flex justify-center">
        <div className="w-48 h-32 flex items-center justify-center">
          <img
            src="/Jothomconlogo.PNG"
            alt="Jothom Construction Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

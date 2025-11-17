import { useState, useRef, useEffect } from 'react';

const projects = [
  {
    title: 'JOTHOM HOUSE',
    location: 'South Africa',
    category: 'Residential',
    height: 'N/A',
    duration: '12 months',
    image: '/jothomhouse.jpg',
  },
  {
    title: 'JOTHOM RESIDENCE',
    location: 'South Africa',
    category: 'Residential',
    height: 'N/A',
    duration: '14 months',
    image: '/jothhomhouse2.jpg',
  },
  {
    title: 'CONSTRUCTION PROJECT',
    location: 'South Africa',
    category: 'Infrastructure',
    height: 'N/A',
    duration: '18 months',
    image: '/jothom3.jpg',
  },
  {
    title: 'MODERN BUILD',
    location: 'South Africa',
    category: 'Commercial',
    height: 'N/A',
    duration: '20 months',
    image: '/466938309_9064512360234137_7180213118681690382_n.jpg',
  },
];

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="featured-projects" className="relative py-32 px-6 bg-gray-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#e2e8f0_1px,transparent_1px)] bg-[length:50px_50px] opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-slate-400" />
            <span className="text-slate-600 tracking-[0.3em] text-sm uppercase font-light">Case Studies</span>
            <div className="w-12 h-px bg-slate-400" />
          </div>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4 text-gray-900">
            FEATURED <span className="text-slate-600">PROJECTS</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transforming architectural visions into iconic structures
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden bg-white border border-gray-200 transition-all duration-700 hover:border-slate-400 flex-shrink-0 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${idx * 150}ms`, width: '350px' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                />
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

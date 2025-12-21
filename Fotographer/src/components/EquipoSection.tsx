
import { useState, useEffect } from 'react';

const EquipoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('equipo');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "LAUTARO J. SARNI",
      role: "Productor",
      image: "https://i.ibb.co/4gd2KRH2",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "CAMILA VERDÚN LOMBA",
      role: "Directora",
      image: "https://i.ibb.co/Pvzp6zqq",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "FACUNDO J. HERNANDEZ",
      role: "Director de Fotografía",
      image: "https://i.ibb.co/FqjQ2RDc",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <section id="equipo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Title */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-12 bg-[#8B4513]"></div>
              <h2 className="font-bebas text-5xl md:text-6xl text-[#8B4513] font-bold tracking-wide">
                PERFILES DE INTERÉS
              </h2>
            </div>
          </div>

          {/* Profiles Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="relative bg-[#F5F5DC] rounded-sm shadow-lg p-6 border border-[#D3D3D3]"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)',
                  backgroundSize: '20px 20px'
                }}
              >
                {/* Pin */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full shadow-md flex items-center justify-center z-10">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <div className="flex gap-4 mb-4">
                    {/* Image */}
                    <div className="w-24 h-24 bg-gray-200 rounded-sm flex-shrink-0 border border-gray-300 overflow-hidden">
                      {member.image && (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      )}
                    </div>

                    {/* Name */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight">
                        {member.name}
                      </h3>
                      {/* Role Box */}
                      <div className="bg-black text-white px-3 py-1 inline-block text-xs font-semibold">
                        {member.role}
                      </div>
                    </div>
                  </div>

                  {/* Notes Section */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-1">NOTAS:</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {member.notes}
                    </p>
                  </div>

                  {/* Bottom Placeholder */}
                  <div className="h-8 bg-gray-200 rounded-sm border border-gray-300 mt-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipoSection;

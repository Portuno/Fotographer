
import { useState, useEffect } from 'react';

// Componente actualizado - Perfiles de Interés 2024
const EquipoSection = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('equipo');
    if (section) {
      observer.observe(section);
      // Fallback: make visible if section exists
      setIsVisible(true);
    }

    return () => observer.disconnect();
  }, []);

  // PERFILES DE INTERÉS - Actualizado 2024 - Build v3 - FORCE UPDATE
  const teamMembers = [
    {
      name: "LAUTARO J. SARNI",
      role: "Productor",
      image: "https://i.ibb.co/R4yNYTqN/j-UITa-Sd6-400x400.jpg",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "CAMILA VERDÚN LOMBA",
      role: "Directora",
      image: "https://i.ibb.co/1tJVmJFF/1765026872722.png",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "FACUNDO J. HERNANDEZ",
      role: "Director de Fotografía",
      image: "https://i.ibb.co/5xfQmbRC/1765332390951.jpg",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  // Debug: Log para verificar que se está usando el código correcto
  if (typeof window !== 'undefined') {
    console.log('EquipoSection - teamMembers actualizados:', teamMembers);
  }

  return (
    <section id="equipo" className="py-20 bg-[#3E2723]">
      <div className="container mx-auto px-4">
        <div className="opacity-100">
          {/* Title */}
          <div className="mb-12">
            <div className="flex items-center gap-3">
              <div className="w-1 h-14 bg-[#8B4513]"></div>
              <h2 className="font-bold text-4xl md:text-5xl text-[#8B4513] tracking-wide uppercase" style={{ fontFamily: 'sans-serif' }}>
                PERFILES DE INTERÉS
              </h2>
            </div>
          </div>

          {/* Profiles Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="relative bg-[#F5F5DC] rounded-sm shadow-lg p-5 border border-[#D3D3D3]"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
                }}
              >
                {/* Pin */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-blue-500 rounded-full shadow-lg flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="mt-3">
                  <div className="flex gap-3 mb-3">
                    {/* Image */}
                    <div className="w-20 h-20 bg-gray-200 rounded-sm flex-shrink-0 border border-gray-300 overflow-hidden flex items-center justify-center relative">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs font-light pointer-events-none opacity-0">
                        {member.name.split(' ')[0]}
                      </div>
                    </div>

                    {/* Name and Role */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm text-gray-900 mb-1.5 leading-tight uppercase" style={{ fontFamily: 'sans-serif' }}>
                        {member.name}
                      </h3>
                      {/* Role Box */}
                      <div className="bg-black text-white px-2 py-0.5 inline-block text-[10px] font-semibold uppercase" style={{ fontFamily: 'sans-serif' }}>
                        {member.role}
                      </div>
                    </div>
                  </div>

                  {/* Notes Section */}
                  <div className="mb-3">
                    <p className="text-[10px] font-semibold text-gray-800 mb-1 uppercase" style={{ fontFamily: 'sans-serif' }}>NOTAS:</p>
                    <p className="text-[10px] text-gray-600 leading-relaxed" style={{ fontFamily: 'monospace' }}>
                      {member.notes}
                    </p>
                  </div>

                  {/* Bottom Placeholder - VER EXPEDIENTE */}
                  <div className="h-7 bg-gray-200 rounded-sm border border-gray-300 mt-2 flex items-center justify-center">
                    <span className="text-[10px] text-gray-400 font-light uppercase" style={{ fontFamily: 'sans-serif' }}>VER EXPEDIENTE</span>
                  </div>
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

import React, { useEffect, useState, useRef } from 'react';
import { PushPin, Polaroid, TypedNote, ScotchTape } from './components/VisualElements';
import { CAST_DATA, EVIDENCE_GALLERY } from './constants';
import { CastMember, EvidenceItem } from './types';

// Icons
const CameraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
);
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeFile, setActiveFile] = useState<CastMember | null>(null);
  const [activeEvidence, setActiveEvidence] = useState<EvidenceItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for parallax and flashlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax Calculation
  const calculateParallax = (factor: number) => {
    const x = (mousePos.x - window.innerWidth / 2) * factor;
    const y = (mousePos.y - window.innerHeight / 2) * factor;
    return { transform: `translate(${x}px, ${y}px)` };
  };

  return (
    <div className="relative min-h-screen bg-cork overflow-hidden font-typewriter selection:bg-red-900 selection:text-white">
      {/* Dynamic Lighting / Vignette "Watcher" Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 mix-blend-multiply opacity-80"
        style={{
          background: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0,0,0,0.85) 100%)`
        }}
      />
      
      {/* Noise Texture */}
      <div className="noise-overlay" />

      {/* Main Board Container */}
      <main ref={containerRef} className="relative w-full max-w-7xl mx-auto p-4 md:p-12 pb-32 space-y-24 md:space-y-32">
        
        {/* Header Section: The Case File */}
        <header className="relative flex flex-col items-center justify-center pt-12 md:pt-20">
            <div className="relative bg-[#d3d3d3] p-8 md:p-12 shadow-2xl rotate-1 max-w-2xl w-full border border-gray-400">
               <div className="absolute top-4 right-4 border-4 border-red-800 text-red-800 font-bold px-4 py-1 font-marker text-xl opacity-70 transform rotate-12 mask-ink">
                  CONFIDENCIAL
               </div>
               <PushPin color="silver" className="top-2 left-1/2" />
               <h1 className="text-4xl md:text-6xl font-elite text-black mb-2 tracking-tighter uppercase border-b-2 border-black pb-2">
                 El Fotógrafo
               </h1>
               <div className="flex justify-between text-xs md:text-sm text-gray-700 font-bold uppercase mt-2">
                  <span>Caso #: 8920-X</span>
                  <span>Estado: ABIERTO</span>
               </div>
               <p className="mt-6 text-gray-800 leading-relaxed text-sm md:text-base">
                 El sujeto se mueve en las sombras. Captura momentos que no deberían existir. 
                 Si estás leyendo esto, ya eres parte de la investigación. 
                 <span className="bg-yellow-200 px-1 ml-1">Mira con cuidado.</span>
               </p>
            </div>
            
            {/* Visual String Line connecting Header to next section */}
            <div className="absolute bottom-0 left-1/2 w-0.5 h-24 bg-red-800 z-0"></div>
        </header>

        {/* Synopsis & Hook Section */}
        <section className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left side: Synopsis Sticky Note */}
            <div className="md:col-span-5 relative" style={calculateParallax(0.02)}>
               <TypedNote rotation={-2} className="w-full md:w-5/6 mx-auto">
                 <h2 className="font-bold text-lg mb-2 underline decoration-red-500 decoration-wavy">SINOPSIS</h2>
                 <p>
                   Tras años de silencio, la figura mítica de un artista urbano furtivo vuelve a aparecer en las calles de Valencia. Una periodista y un psicólogo investigan si se trata de su retorno o de un imitador que conoce demasiado bien su obra.
                 </p>
                 <br/>
                 <p className="font-marker text-red-700 text-xl text-right transform -rotate-2">¿Quién vigila?</p>
               </TypedNote>
            </div>

            {/* Right side: Visual Evidence Cluster */}
            <div className="md:col-span-7 relative h-64 md:h-auto" style={calculateParallax(0.01)}>
               <div className="absolute top-0 right-10 z-10">
                 <Polaroid 
                    src="https://picsum.photos/300/200?grayscale&blur=2" 
                    caption="Escena 1 - Reflejo" 
                    rotation={4} 
                    className="max-w-[200px] md:max-w-[240px]" 
                  />
               </div>
               <div className="absolute top-20 left-10 z-0">
                  <Polaroid 
                    src="https://picsum.photos/300/300?grayscale" 
                    caption="Sujeto desconocido" 
                    rotation={-5} 
                    className="max-w-[180px] md:max-w-[220px]" 
                  />
               </div>
               {/* Red string connecting photos */}
               <svg className="absolute inset-0 pointer-events-none z-20 w-full h-full">
                  <path d="M 100 150 Q 200 200 300 80" stroke="#7f1d1d" strokeWidth="2" fill="none" strokeDasharray="4,2" className="drop-shadow-sm opacity-80"/>
               </svg>
            </div>
        </section>

        {/* Gallery / Evidence Wall */}
        <section className="relative py-10">
          <div className="absolute -top-10 left-0 bg-black text-white px-4 py-1 font-elite text-2xl transform -rotate-1 z-10 shadow-lg">
             EVIDENCIA VISUAL
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8">
            {EVIDENCE_GALLERY.map((item, index) => (
              <div key={item.id} className="relative group perspective-1000" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="group-hover:scale-105 transition-transform duration-500">
                   <Polaroid 
                     src={item.url} 
                     caption={item.title} 
                     rotation={item.rotation + (index % 2 === 0 ? 2 : -2)}
                     className="w-full"
                     onClick={() => setActiveEvidence(item)}
                     isVideo={item.type === 'video'}
                   />
                </div>
              </div>
            ))}
            
            {/* Video Tape Placeholder - Keeping the aesthetic element as decor, or could be functional */}
            <div className="relative bg-black p-4 rounded shadow-2xl transform rotate-2 w-full flex flex-col items-center justify-center border-t-4 border-gray-800">
               <div className="w-full bg-gray-900 h-32 flex items-center justify-center border border-gray-700 mb-2 relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 animate-pulse"></div>
                  <div className="text-white/50 font-mono text-xs absolute top-2 right-2">REC ●</div>
                  <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:bg-red-900/50 transition-colors">
                     <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
               </div>
               <div className="bg-white w-full h-8 flex items-center justify-center font-marker text-black transform skew-x-[-10deg]">
                 CINTA #4 (DAÑADA)
               </div>
            </div>
          </div>
        </section>

        {/* Suspects / Cast Section */}
        <section className="relative">
           <div className="flex items-center mb-8">
              <h3 className="text-3xl font-elite text-red-700 bg-black/10 px-4 py-1 inline-block backdrop-blur-sm border-l-4 border-red-700">
                PERFILES DE INTERÉS
              </h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CAST_DATA.map((member) => (
                <div key={member.id} className="relative bg-[#f0f0f0] p-1 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                   <PushPin color="blue" className="-top-2" />
                   <div className="border-2 border-gray-300 p-4 h-full flex flex-col bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')]">
                      <div className="flex gap-4 mb-4">
                        <img src={member.imageUrl} alt={member.name} className="w-20 h-24 object-cover border border-gray-400 shadow-sm" />
                        <div className="flex flex-col justify-end">
                           <h4 className="font-bold text-xl font-elite text-black uppercase">{member.name}</h4>
                           <span className="text-xs bg-black text-white px-1 inline-block w-max font-mono">{member.role}</span>
                        </div>
                      </div>
                      <div className="border-t border-gray-400 pt-2 mt-auto">
                         <p className="text-xs text-gray-800 font-typewriter leading-tight mb-2">
                           <span className="font-bold">NOTAS:</span> {member.description}
                         </p>
                         <button 
                           onClick={() => setActiveFile(member)}
                           className="w-full bg-gray-200 hover:bg-red-900 hover:text-white border border-gray-400 text-xs py-1 uppercase tracking-widest transition-colors"
                         >
                           Ver Expediente
                         </button>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Interactive Forms Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            
            {/* Photo Upload (Evidence Drop) */}
            <div className="relative group">
               <div className="absolute inset-0 bg-yellow-900/40 transform rotate-1 rounded-sm shadow-2xl"></div>
               <div className="relative bg-[#e8dcc0] p-6 md:p-8 border-t-8 border-yellow-700 shadow-xl" 
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg, #e8dcc0 0, #e8dcc0 10px, #e0d4b8 10px, #e0d4b8 20px)' }}>
                  <div className="flex items-center justify-between mb-4 border-b-2 border-black/20 pb-2">
                     <h4 className="font-elite text-2xl text-black">BUZÓN ANÓNIMO</h4>
                     <CameraIcon />
                  </div>
                  <p className="text-sm text-gray-800 mb-6 font-bold opacity-70">
                    ¿Has visto algo? Sube tus fotos. No se rastreará tu IP.
                  </p>
                  
                  <div className="border-2 border-dashed border-gray-500 rounded bg-white/50 p-8 text-center cursor-pointer hover:bg-white/80 transition-colors group-hover:border-red-800">
                     <div className="mx-auto w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                       <span className="text-2xl text-gray-600">+</span>
                     </div>
                     <span className="text-sm uppercase font-bold text-gray-600">Arrastrar evidencia aquí</span>
                     <input type="file" className="hidden" />
                  </div>
                  <div className="mt-4 text-right">
                     <button className="bg-red-800 text-white font-elite px-6 py-2 shadow-lg hover:bg-red-900 transform active:scale-95 transition-transform">
                       ENVIAR
                     </button>
                  </div>
               </div>
            </div>

            {/* Volunteer/Recruitment Form */}
            <div className="relative">
               <div className="bg-white p-8 shadow-2xl transform -rotate-1 border border-gray-300 relative">
                  <div className="absolute top-0 left-0 w-full h-2 bg-black"></div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-0.5 text-xs font-bold uppercase tracking-widest">
                     Reclutamiento
                  </div>
                  
                  <h4 className="font-bold text-lg text-black mb-4 uppercase text-center border-b border-gray-300 pb-2">
                    Únete a la Investigación
                  </h4>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nombre Clave</label>
                      <input type="text" className="w-full bg-gray-100 border-b-2 border-gray-300 focus:border-red-800 outline-none p-2 font-mono text-black transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Contacto (Email)</label>
                      <input type="email" className="w-full bg-gray-100 border-b-2 border-gray-300 focus:border-red-800 outline-none p-2 font-mono text-black transition-colors" />
                    </div>
                    <div className="pt-2">
                      <button type="button" className="w-full border-2 border-black py-2 font-bold text-black hover:bg-black hover:text-white transition-colors uppercase text-sm">
                        Firmar Acuerdo
                      </button>
                    </div>
                  </form>
                  <div className="absolute bottom-2 right-2 opacity-50">
                    <img src="https://picsum.photos/50/50?grayscale" className="w-12 h-12 mix-blend-multiply opacity-50" alt="stamp" />
                  </div>
               </div>
            </div>

        </section>

        {/* Footer / Contact */}
        <footer className="relative mt-20 text-center pb-20">
           <div className="inline-block relative">
              <div className="absolute inset-0 bg-red-900 transform rotate-1 blur-sm opacity-50"></div>
              <div className="relative bg-black text-white px-8 py-4 font-elite text-xl border-2 border-white/20">
                 CONTACTO CONFIDENCIAL
              </div>
           </div>
           
           {/* Production Credit */}
           <div className="mt-8 mb-4">
              <p className="font-typewriter text-sm text-gray-400">
                Una producción de <br/>
                <a href="https://www.versaproducciones.com" target="_blank" rel="noopener noreferrer" className="font-elite text-lg text-red-800 hover:text-red-600 hover:underline tracking-widest uppercase">
                   VERSA PRODUCCIONES
                </a>
              </p>
           </div>

           <div className="flex justify-center gap-6 items-center">
              <a href="mailto:lautaro.sarni@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors font-mono text-sm underline">
                lautaro.sarni@gmail.com
              </a>
              <span className="text-gray-600">|</span>
              <a href="https://www.instagram.com/el_fotographer/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
           </div>
           <p className="mt-8 text-xs text-gray-600 font-mono">
             © 2024 Versa Producciones. Todos los derechos reservados. <br/>
             <span className="italic opacity-50">Te estamos observando.</span>
           </p>
        </footer>

      </main>

      {/* Modal for Cast Details */}
      {activeFile && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setActiveFile(null)}>
           <div className="bg-[#fcf5e5] max-w-lg w-full p-2 shadow-2xl transform rotate-1 cursor-auto" onClick={(e) => e.stopPropagation()}>
              <div className="border border-gray-300 p-6 md:p-8 relative">
                 <div className="absolute top-4 right-4 text-red-700 font-bold border-2 border-red-700 px-2 py-1 transform -rotate-12 opacity-80 font-marker text-lg">
                    {activeFile.status.toUpperCase()}
                 </div>
                 
                 <h2 className="text-2xl md:text-3xl font-elite text-black mb-1">{activeFile.name}</h2>
                 <p className="font-mono text-sm text-gray-600 mb-6 uppercase tracking-widest">{activeFile.role}</p>
                 
                 <div className="flex gap-6 mb-6">
                    <div className="shrink-0 relative">
                       <img src={activeFile.imageUrl} className="w-32 h-40 object-cover filter grayscale contrast-125 shadow-md" alt="mugshot" />
                       <ScotchTape className="-top-2 left-1/2 -translate-x-1/2" />
                    </div>
                    <div className="font-typewriter text-sm text-gray-800 leading-relaxed">
                       <p className="mb-2"><span className="font-bold">ID:</span> {activeFile.id}</p>
                       <p className="mb-2"><span className="font-bold">OBSERVACIONES:</span></p>
                       <p>{activeFile.description}</p>
                       <p className="mt-4 text-red-800 italic text-xs">
                          "Se recomienda extrema precaución al interactuar con el sujeto."
                       </p>
                    </div>
                 </div>
                 
                 <button 
                    onClick={() => setActiveFile(null)}
                    className="w-full bg-black text-white py-2 font-mono uppercase text-sm hover:bg-red-900 transition-colors"
                 >
                    Cerrar Expediente
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* Modal for Evidence (Video/Image) */}
      {activeEvidence && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4" onClick={() => setActiveEvidence(null)}>
          <button 
            className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors z-50"
            onClick={() => setActiveEvidence(null)}
          >
            <CloseIcon />
          </button>
          
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center p-2" onClick={(e) => e.stopPropagation()}>
             {activeEvidence.type === 'video' && activeEvidence.videoUrl ? (
                <div className="relative w-full pt-[56.25%] bg-black shadow-2xl border border-gray-800">
                  <iframe 
                    src={`${activeEvidence.videoUrl}?autoplay=1`} 
                    title={activeEvidence.title}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
             ) : (
                <div className="relative bg-white p-2 md:p-4 shadow-2xl transform rotate-1 max-h-[85vh] overflow-hidden">
                   <img 
                     src={activeEvidence.url} 
                     alt={activeEvidence.title} 
                     className="max-h-[75vh] object-contain filter grayscale contrast-125"
                   />
                   <div className="mt-4 font-typewriter text-black text-center border-t border-gray-300 pt-2">
                      <p className="text-lg font-bold">{activeEvidence.title}</p>
                      <p className="text-sm text-gray-600">{activeEvidence.description}</p>
                   </div>
                </div>
             )}
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
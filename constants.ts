import { CastMember, EvidenceItem } from './types';

export const CAST_DATA: CastMember[] = [
  {
    id: 'c1',
    name: 'Julian V.',
    role: 'El Fotógrafo',
    description: 'Obsesivo. Rara vez visto sin su cámara. Visto por última vez cerca del muelle.',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop&sat=-100', // Man portrait B&W
    status: 'suspect',
  },
  {
    id: 'c2',
    name: 'Elena R.',
    role: 'La Periodista',
    description: 'Investigando desapariciones locales. Archivos confidenciales encontrados en su apartamento.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop&sat=-100', // Woman portrait B&W
    status: 'witness',
  },
  {
    id: 'c3',
    name: 'Det. Marcos',
    role: 'Investigador Jefe',
    description: 'Historial de casos sin resolver. Se sospecha corrupción interna.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop&sat=-100', // Detective portrait B&W
    status: 'unknown',
  },
];

// Elementos destacados para la sección de Sinopsis
export const INTRO_VIDEO: EvidenceItem = {
  id: 'intro-vid',
  type: 'video',
  title: 'Intro',
  description: 'Grabación de seguridad recuperada.',
  url: 'https://img.youtube.com/vi/ur9ThNgVrhU/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/embed/ur9ThNgVrhU',
  rotation: -3,
};

export const MAIN_PHOTO: EvidenceItem = {
  id: 'main-photo',
  type: 'photo',
  title: 'El Fotógrapher',
  description: 'Sujetos de interés.',
  // Placeholder: Noir couple smoking
  url: 'https://images.unsplash.com/photo-1445462506450-64a2b150f688?q=80&w=600&auto=format&fit=crop&sat=-100',
  rotation: 4,
};

// Galería de evidencia (Parte inferior)
export const EVIDENCE_GALLERY: EvidenceItem[] = [
  {
    id: 'e3',
    type: 'photo',
    title: 'Propaganda',
    description: 'Cartel en vía pública.',
    // Placeholder: Old poster on wall
    url: 'https://images.unsplash.com/photo-1572511443689-d961e89542a1?q=80&w=600&auto=format&fit=crop&sat=-100',
    rotation: -1,
  },
  {
    id: 'e4',
    type: 'photo',
    title: 'La Marca',
    description: 'Sticker identificado.',
    // Placeholder: Sticker/Graffiti
    url: 'https://images.unsplash.com/photo-1533158388470-9a56699990c6?q=80&w=600&auto=format&fit=crop&sat=-100',
    rotation: 2,
  },
  {
    id: 'e5',
    type: 'photo',
    title: 'Intervención',
    description: 'Arte callejero.',
    // Placeholder: Red spray paint / poster
    url: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=600&auto=format&fit=crop&sat=-100',
    rotation: -3,
  },
  {
    id: 'e6',
    type: 'photo',
    title: 'El Testigo',
    description: 'Silueta en muro.',
    // Placeholder: Shadow/Silhouette
    url: 'https://images.unsplash.com/photo-1494236536165-dab4d859818b?q=80&w=600&auto=format&fit=crop&sat=-100',
    rotation: 1,
  },
  {
    id: 'e7',
    type: 'photo',
    title: 'Origen',
    description: 'Graffiti.',
    // Placeholder: Urban texture / graffiti
    url: 'https://images.unsplash.com/photo-1533106958155-d2d68525f389?q=80&w=600&auto=format&fit=crop&sat=-100',
    rotation: 4,
  },
  {
    id: 'e8',
    type: 'photo',
    title: 'Vigilancia',
    description: 'Objetivos en el puente.',
    // Placeholder: Couple on bridge
    url: 'https://images.unsplash.com/photo-1516575150278-77136aed6920?q=80&w=600&auto=format&fit=crop&sat=-100',
    rotation: -2,
  },
  {
    id: 'e9',
    type: 'photo',
    title: 'Seguimiento',
    description: 'Parque central.',
    // Placeholder: Sitting on grass
    url: 'https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?q=80&w=600&auto=format&fit=crop&sat=-100',
    rotation: 3,
  },
  {
    id: 'e10',
    type: 'photo',
    title: 'Contacto',
    description: 'Encuentro nocturno.',
    // Placeholder: Night scene / wall
    url: 'https://images.unsplash.com/photo-1504810647361-26c792138a0c?q=80&w=600&auto=format&fit=crop&sat=-100',
    rotation: -1,
  },
];
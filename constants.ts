import { CastMember, EvidenceItem } from './types';

export const CAST_DATA: CastMember[] = [
  {
    id: 'c1',
    name: 'Julian V.',
    role: 'El Fotógrafo',
    description: 'Obsesivo. Rara vez visto sin su cámara. Visto por última vez cerca del muelle.',
    // Imagen local: Subir a public/images/julian.jpg
    imageUrl: '/images/julian.jpg',
    status: 'suspect',
  },
  {
    id: 'c2',
    name: 'Elena R.',
    role: 'La Periodista',
    description: 'Investigando desapariciones locales. Archivos confidenciales encontrados en su apartamento.',
    // Imagen local: Subir a public/images/elena.jpg
    imageUrl: '/images/elena.jpg',
    status: 'witness',
  },
  {
    id: 'c3',
    name: 'Det. Marcos',
    role: 'Investigador Jefe',
    description: 'Historial de casos sin resolver. Se sospecha corrupción interna.',
    // Imagen local: Subir a public/images/marcos.jpg
    imageUrl: '/images/marcos.jpg',
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
  // Imagen local: public/images/fotographer.png
  url: '/images/fotographer.png',
  rotation: 4,
};

// Galería de evidencia (Parte inferior)
// Todas las imágenes están en public/images/Evidencia Visual/
export const EVIDENCE_GALLERY: EvidenceItem[] = [
  {
    id: 'e1',
    type: 'photo',
    title: 'Evidencia #1',
    description: 'Documentación visual.',
    url: '/images/Evidencia Visual/52764591513_8ebf512857_4k-2048x1152.jpg',
    rotation: -1,
  },
  {
    id: 'e2',
    type: 'photo',
    title: 'Evidencia #2',
    description: 'Documentación visual.',
    url: '/images/Evidencia Visual/52959918273_f46c6d3228_6k-1024x1536.jpg',
    rotation: 2,
  },
  {
    id: 'e3',
    type: 'photo',
    title: 'Evidencia #3',
    description: 'Documentación visual.',
    url: '/images/Evidencia Visual/52995370206_d305189218_k-1116x1488.jpg',
    rotation: -3,
  },
  {
    id: 'e4',
    type: 'photo',
    title: 'Evidencia #4',
    description: 'Documentación visual.',
    url: '/images/Evidencia Visual/53064817501_9f883b3f85_4k-768x1365.jpg',
    rotation: 1,
  },
  {
    id: 'e5',
    type: 'photo',
    title: 'Evidencia #5',
    description: 'Documentación visual.',
    url: '/images/Evidencia Visual/53122975094_1d9303a6b8_3k-1024x1024.jpg',
    rotation: 4,
  },
  {
    id: 'e6',
    type: 'photo',
    title: 'Evidencia #6',
    description: 'Documentación visual.',
    url: '/images/Evidencia Visual/53138695211_6c0dd7aae9_k-768x1365.jpg',
    rotation: -2,
  },
  {
    id: 'e7',
    type: 'photo',
    title: 'Evidencia #7',
    description: 'Documentación visual.',
    url: '/images/Evidencia Visual/555fcf81-c049-4b52-83f3-3259ab45b681.jpg',
    rotation: 3,
  },
  {
    id: 'e8',
    type: 'photo',
    title: 'Evidencia #8',
    description: 'Documentación visual.',
    url: '/images/Evidencia Visual/aee7c873-411b-4669-9ac5-f10a0ccb52f3.jpg',
    rotation: -1,
  },
  {
    id: 'e9',
    type: 'photo',
    title: 'Evidencia #9',
    description: 'Documentación visual.',
    url: '/images/Evidencia Visual/brooklyn-street-art-the-photographer-lluis-olive-bulbena-valencia-09-21-web-2.jpg',
    rotation: 2,
  },
  {
    id: 'e10',
    type: 'photo',
    title: 'Evidencia #10',
    description: 'Documentación visual.',
    url: '/images/Evidencia Visual/e52aaaaf-50d5-43e9-b0fa-335b842e1fec.png',
    rotation: -3,
  },
  {
    id: 'e11',
    type: 'photo',
    title: 'Evidencia #11',
    description: 'Documentación visual.',
    url: '/images/Evidencia Visual/f705e2e5-98af-4e34-88a9-7654379d691c.jpg',
    rotation: 1,
  },
  {
    id: 'e12',
    type: 'photo',
    title: 'Evidencia #12',
    description: 'Documentación visual.',
    url: '/images/Evidencia Visual/Photographer-REe3AluKrG7HcFRN2FoIr6N-1248x770@Las Provincias.webp',
    rotation: 4,
  },
  {
    id: 'e13',
    type: 'photo',
    title: 'Evidencia #13',
    description: 'Documentación visual.',
    url: '/images/Evidencia Visual/thumbnail__VA_2772_NoticiaAmpliada.jpg',
    rotation: -2,
  },
  {
    id: 'e14',
    type: 'photo',
    title: 'Evidencia #14',
    description: 'Documentación visual.',
    url: '/images/Evidencia Visual/unnamed (2).jpg',
    rotation: 3,
  },
];
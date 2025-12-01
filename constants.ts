import { CastMember, EvidenceItem } from './types';

export const CAST_DATA: CastMember[] = [
  {
    id: 'c1',
    name: 'Julian V.',
    role: 'El Fotógrafo',
    description: 'Obsesivo. Rara vez visto sin su cámara. Visto por última vez cerca del muelle.',
    imageUrl: 'https://picsum.photos/200/300?grayscale',
    status: 'suspect',
  },
  {
    id: 'c2',
    name: 'Elena R.',
    role: 'La Periodista',
    description: 'Investigando desapariciones locales. Archivos confidenciales encontrados en su apartamento.',
    imageUrl: 'https://picsum.photos/201/301?grayscale',
    status: 'witness',
  },
  {
    id: 'c3',
    name: 'Det. Marcos',
    role: 'Investigador Jefe',
    description: 'Historial de casos sin resolver. Se sospecha corrupción interna.',
    imageUrl: 'https://picsum.photos/202/302?grayscale',
    status: 'unknown',
  },
];

export const EVIDENCE_GALLERY: EvidenceItem[] = [
  {
    id: 'e1',
    type: 'video',
    title: 'Grabación 01',
    description: 'Cámara de seguridad.',
    // YouTube Thumbnail
    url: 'https://img.youtube.com/vi/ur9ThNgVrhU/hqdefault.jpg',
    // YouTube Embed URL
    videoUrl: 'https://www.youtube.com/embed/ur9ThNgVrhU',
    rotation: -2,
  },
  {
    id: 'e2',
    type: 'photo',
    title: 'Encuentro Nocturno',
    description: 'Sujetos identificados en callejón.',
    // NOTE: Replace this URL with the actual path to your uploaded image
    url: 'https://images.unsplash.com/photo-1517992768962-436f5e359286?q=80&w=600&auto=format&fit=crop&grayscale', 
    rotation: 3,
  },
  {
    id: 'e3',
    type: 'document',
    title: 'Informe Forense',
    description: 'Huellas parciales encontradas en la lente.',
    url: 'https://picsum.photos/300/400?grayscale',
    rotation: -1,
  },
  {
    id: 'e4',
    type: 'photo',
    title: 'Ubicación',
    description: 'Mapa de la zona.',
    url: 'https://picsum.photos/401/301?grayscale&blur=1',
    rotation: 2,
  },
];
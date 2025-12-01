export interface CastMember {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  status: 'suspect' | 'victim' | 'witness' | 'unknown';
}

export interface EvidenceItem {
  id: string;
  type: 'photo' | 'document' | 'object' | 'video';
  title: string;
  description: string;
  url: string; // Used for thumbnail in videos, or full image in photos
  videoUrl?: string; // YouTube embed URL
  rotation: number;
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'file';
  placeholder?: string;
}
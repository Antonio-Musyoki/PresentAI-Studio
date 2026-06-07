/**
 * Shared types and interfaces for PresentAI Studio
 */

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  createdAt: Date;
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  VIEWER = 'viewer',
}

export interface Presentation {
  id: string;
  title: string;
  description?: string;
  userId: string;
  slides: Slide[];
  theme: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Slide {
  id: string;
  presentationId: string;
  order: number;
  layout: string;
  content: Record<string, any>;
  notes?: string;
}

export enum ExportFormat {
  PPTX = 'pptx',
  PDF = 'pdf',
  IMAGE = 'image',
  VIDEO = 'video',
}

import type { ImageMetadata } from 'astro';
import slothdev from '../assets/slothdev.png';

// Cada escena del perezoso (ver 04-IMAGENES-PEREZOSO.md). Hoy todas usan el SlothDev original.
// Para poner una escena nueva: añade el PNG en src/assets/escenas/ e impórtalo aquí en su clave.
export const scenes: Record<string, ImageMetadata> = {
  hero: slothdev,
  escucho: slothdev,
  diseno: slothdev,
  iaEscribe: slothdev,
  curo: slothdev,
  iaYYo: slothdev,
  sitios: slothdev,
  landing: slothdev,
  tienda: slothdev,
  proyectos: slothdev,
  sobre: slothdev,
  faq: slothdev,
  blog: slothdev,
  contacto: slothdev,
  pie: slothdev,
  perdido: slothdev,
};

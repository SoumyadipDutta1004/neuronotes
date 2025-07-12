import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getTitleFromPath(path: string) {
  const last = path.split('/').filter(Boolean).pop(); // removes empty segments
  return last ? last.charAt(0).toUpperCase() + last.slice(1) : '';
}
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Shared easing for every scroll and hover transition. */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

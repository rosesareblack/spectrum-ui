import { Metadata } from "next";

interface BaseMetadataProps {
  title?: string;
  description?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: {
      url: string;
      width?: number;
      height?: number;
    }[];
  };
  twitter?: {
    card?: string;
    site?: string;
    title?: string;
    description?: string;
    images?: {
      url: string;
      width?: number;
      height?: number;
    }[];
  };
}
export function baseMetadata({
  title,
  description,


}: BaseMetadataProps): Metadata {
  return {
    title: `${title} Spectrum UI - Arihant Jain`,
    description: `Spectrum UI: ${description}`,
    authors: [
      { name: "Arihant Jain" },
      { url: "https://arihantcodes.in/", name: "Arihant" },
    ],
  };
}

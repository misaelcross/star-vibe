import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Star Vibe - Plataforma para Criadores",
  description: "Monetize seu conteúdo com taxa zero de comissão",
  openGraph: {
    type: "website",
    url: "https://github.com/misaelcross/star-vibe.git",
    title: "Star Vibe - Plataforma para Criadores",
    description: "Monetize seu conteúdo com taxa zero de comissão",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Shadcn - Landing template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};
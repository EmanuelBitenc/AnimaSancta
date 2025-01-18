import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import iconPage from "@/app/assets/imgs/iconPage.png";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AnimaSancta - Exame de Consciência e Confissão Católica",
  description:
    "AnimaSancta é uma plataforma dedicada a ajudar fiéis católicos a se prepararem para o sacramento da confissão, oferecendo um guia prático e reflexivo baseado nos Dez Mandamentos.",
  keywords:
    "AnimaSancta, exame de consciência católico, sacramento da confissão, mandamentos, guia de confissão, reflexão espiritual, preparação para confissão, fé católica, vida espiritual, doutrina católica",
  robots: "index, follow",
  openGraph: {
    title: "AnimaSancta - Exame de Consciência",
    description:
      "A ferramenta perfeita para católicos que desejam refletir, organizar seus pensamentos e se preparar para o sacramento da confissão com base na doutrina da Igreja.",
    images: [
      {
        url: "https://i1.wp.com/rainhadosceus.com.br/wp-content/uploads/2020/08/Sagrada-Eucaristia.jpg?fit=750%2C410&ssl=1",
        width: 1200,
        height: 630,
        alt: "AnimaSancta - Sagrada Eucaristia",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />

        <link rel="icon" type="image/png" href={"/iconPage.png"} />
        <link
          href="https://fonts.googleapis.com/css2?family=Tsukimi+Rounded&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`   bg-gradient-to-l from-[#8e6d59] via-[#977d70] to-[#9a7e6f]`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

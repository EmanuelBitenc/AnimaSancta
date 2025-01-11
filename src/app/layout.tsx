import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import iconPage from "@/app/assets/imgs/iconPage.png";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AnimaSancta - Home",
  description:
    "Página católica voltada a ajudar na aproximação com a doutrina, proporcionando um guia para fazer o Exame de Consciência.",
  keywords:
    "exame de consciência, sacramento da confissão, mandamentos, católico, reflexão",
  robots: "index, follow",
  openGraph: {
    title: "AnimaSancta",
    description:
      "Página católica voltada a ajudar na aproximação com a doutrina, proporcionando um guia para fazer o Exame de Consciência.",
    images: [
      {
        url: "https://i1.wp.com/rainhadosceus.com.br/wp-content/uploads/2020/08/Sagrada-Eucaristia.jpg?fit=750%2C410&ssl=1",
        width: 800,
        height: 600,
        alt: "AnimaSancta",
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

        <link rel="icon" type="image/png" href={"./assets/imgs/iconPage.png"} />
        <link
          href="https://fonts.googleapis.com/css2?family=Tsukimi+Rounded&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased h-full `} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

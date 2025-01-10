import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
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

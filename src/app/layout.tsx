import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Juego del Caballo",
  description: "Creado por dev55",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=LXGW+Marker+Gothic&display=swap" rel="stylesheet"></link>

      </head>
      <body
      >
        {children}
      </body>
    </html>
  );
}

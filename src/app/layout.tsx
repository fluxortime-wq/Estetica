import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clínica de Estética em Salvador | Realçamos sua Beleza Natural",
  description: "Tratamentos estéticos exclusivos na Ilha Amarela, Salvador - BA. Harmonização facial, botox, preenchimento e muito mais com segurança e sofisticação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Placeholder for GTM / Meta Pixel */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            // (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            // })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
      </head>
      <body
        className={`${outfit.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}



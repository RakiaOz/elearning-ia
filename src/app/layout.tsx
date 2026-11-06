import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "1000.0 IA – Formation e-learning",
  description: "Apprenez l'intelligence artificielle à votre rythme.",
};

// Le layout entoure toutes les pages : on y met ce qui est commun (en-tête, pied de page).
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <footer className="py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} 1000.0 IA
        </footer>
      </body>
    </html>
  );
}

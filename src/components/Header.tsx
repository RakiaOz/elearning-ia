import Link from "next/link";

// Un composant = un morceau d'interface réutilisable.
// Celui-ci est affiché en haut de toutes les pages (voir layout.tsx).
export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          1000.0 IA
        </Link>
        <div className="flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/cours" className="hover:text-indigo-600">Les cours</Link>
          <Link href="/connexion" className="hover:text-indigo-600">Connexion</Link>
        </div>
      </nav>
    </header>
  );
}

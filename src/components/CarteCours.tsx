import Link from "next/link";
import type { Cours } from "@/data/cours";

// Les "props" sont les paramètres d'un composant : ici, le cours à afficher.
export default function CarteCours({ cours }: { cours: Cours }) {
  return (
    <Link
      href={`/cours/${cours.slug}`}
      className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <p className="text-xs font-semibold uppercase text-indigo-600">
        {cours.niveau} · {cours.dureeMinutes} min
      </p>
      <h3 className="mt-2 text-lg font-semibold text-gray-900">{cours.titre}</h3>
      <p className="mt-2 text-sm text-gray-600">{cours.resume}</p>
    </Link>
  );
}

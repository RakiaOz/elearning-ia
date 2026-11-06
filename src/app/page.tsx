import Link from "next/link";
import CarteCours from "@/components/CarteCours";
import { cours } from "@/data/cours";

// Fichier src/app/page.tsx  =>  URL "/"  (la page d'accueil)
export default function Accueil() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Apprenez l&apos;IA, pas à pas</h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          La formation 1000.0 IA vous accompagne des bases jusqu&apos;aux usages
          concrets en entreprise.
        </p>
        <Link
          href="/cours"
          className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
        >
          Voir les cours
        </Link>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Pour commencer</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cours.slice(0, 3).map((c) => (
            <CarteCours key={c.slug} cours={c} />
          ))}
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { cours, trouverCours } from "@/data/cours";

// Le dossier [slug] est une "route dynamique" :
// /cours/introduction-ia  =>  params.slug vaut "introduction-ia"
export function generateStaticParams() {
  return cours.map((c) => ({ slug: c.slug }));
}

export default async function PageCours({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = trouverCours(slug);
  if (!c) notFound(); // affiche une page 404 si le cours n'existe pas

  return (
    <article className="space-y-6">
      <Link href="/cours" className="text-sm text-indigo-600 hover:underline">
        ← Tous les cours
      </Link>
      <header>
        <p className="text-sm font-semibold uppercase text-indigo-600">
          {c.niveau} · {c.dureeMinutes} min
        </p>
        <h1 className="mt-1 text-3xl font-bold">{c.titre}</h1>
        <p className="mt-2 text-gray-600">{c.resume}</p>
      </header>
      <ol className="space-y-4">
        {c.lecons.map((lecon, i) => (
          <li key={lecon.titre} className="rounded-xl border border-gray-200 bg-white p-5">
            <h2 className="font-semibold">
              Leçon {i + 1} : {lecon.titre}
            </h2>
            <p className="mt-2 text-gray-700">{lecon.contenu}</p>
          </li>
        ))}
      </ol>
    </article>
  );
}

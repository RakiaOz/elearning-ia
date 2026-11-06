import CarteCours from "@/components/CarteCours";
import { cours } from "@/data/cours";

// Fichier src/app/cours/page.tsx  =>  URL "/cours"
export default function ListeCours() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Tous les cours</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cours.map((c) => (
          <CarteCours key={c.slug} cours={c} />
        ))}
      </div>
    </div>
  );
}

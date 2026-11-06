// Étape 1 : les cours sont écrits "en dur" dans ce fichier.
// À l'étape 2, ces données viendront d'une base PostgreSQL.

export type Lecon = {
  titre: string;
  contenu: string;
};

export type Cours = {
  slug: string; // identifiant lisible utilisé dans l'URL : /cours/<slug>
  titre: string;
  resume: string;
  niveau: "Débutant" | "Intermédiaire" | "Avancé";
  dureeMinutes: number;
  lecons: Lecon[];
};

export const cours: Cours[] = [
  {
    slug: "introduction-ia",
    titre: "Introduction à l'intelligence artificielle",
    resume: "Comprendre ce qu'est l'IA, d'où elle vient et ce qu'elle sait faire aujourd'hui.",
    niveau: "Débutant",
    dureeMinutes: 45,
    lecons: [
      { titre: "Qu'est-ce que l'IA ?", contenu: "L'IA regroupe les techniques qui permettent à une machine d'accomplir des tâches qui demandent habituellement de l'intelligence humaine." },
      { titre: "Une brève histoire", contenu: "Des premiers programmes des années 1950 aux grands modèles de langage d'aujourd'hui." },
      { titre: "IA, machine learning, deep learning", contenu: "Le deep learning est une branche du machine learning, qui est lui-même une branche de l'IA." },
    ],
  },
  {
    slug: "prompt-engineering",
    titre: "Bien écrire ses prompts",
    resume: "Les bonnes pratiques pour obtenir des réponses utiles d'un assistant IA.",
    niveau: "Débutant",
    dureeMinutes: 30,
    lecons: [
      { titre: "Donner du contexte", contenu: "Plus l'assistant connaît la situation, plus sa réponse est pertinente." },
      { titre: "Préciser le format attendu", contenu: "Liste, tableau, e-mail : dites ce que vous voulez recevoir." },
    ],
  },
  {
    slug: "ia-en-entreprise",
    titre: "L'IA en entreprise",
    resume: "Cas d'usage concrets, limites et points de vigilance (données, RGPD, biais).",
    niveau: "Intermédiaire",
    dureeMinutes: 60,
    lecons: [
      { titre: "Cas d'usage", contenu: "Support client, rédaction, analyse de documents, aide à la décision." },
      { titre: "Points de vigilance", contenu: "Confidentialité des données, vérification des réponses, biais des modèles." },
    ],
  },
];

export function trouverCours(slug: string): Cours | undefined {
  return cours.find((c) => c.slug === slug);
}

# 1000.0 IA – site e-learning

Projet d'apprentissage : construire un site web complet, de bout en bout.

## Lancer le site sur ton ordinateur

Prérequis : [Node.js](https://nodejs.org) version 20 ou plus.

```bash
npm install      # télécharge les dépendances (dossier node_modules)
npm run dev      # lance le site en mode développement
```

Ouvre ensuite http://localhost:3000. Chaque fois que tu enregistres un fichier, la page se met à jour toute seule.

## Comment le projet est organisé

```
src/
  app/                    <- chaque dossier = une URL (c'est le "App Router" de Next.js)
    layout.tsx            <- cadre commun à toutes les pages (en-tête, pied de page)
    page.tsx              <- page d'accueil  "/"
    cours/page.tsx        <- liste des cours "/cours"
    cours/[slug]/page.tsx <- page d'un cours "/cours/introduction-ia" (route dynamique)
    connexion/page.tsx    <- page provisoire "/connexion"
  components/             <- morceaux d'interface réutilisables (Header, CarteCours)
  data/cours.ts           <- les cours, écrits en dur pour l'instant
```

Le style utilise **Tailwind CSS** : les classes comme `text-xl font-bold` dans le code sont directement des styles.

## Plan d'apprentissage

| Étape | Ce que tu construis | Ce que tu apprends |
|---|---|---|
| **1. Pages statiques** ✅ | Accueil, liste des cours, page d'un cours | HTML/JSX, composants React, routes, Tailwind |
| **2. Base de données** | Les cours sont stockés dans PostgreSQL | SQL, modèle de données, ORM Prisma |
| **3. Comptes utilisateurs** | Inscription, connexion, espace personnel | Authentification, sessions, sécurité des mots de passe |
| **4. Progression** | Marquer une leçon comme terminée, voir son avancement | Formulaires, actions serveur, données liées à un utilisateur |
| **5. Mise en ligne** | Le site accessible sur Internet | Git/GitHub, Vercel, variables d'environnement |
| **6. Bonus IA** | Un assistant qui répond aux questions sur un cours | Appeler une API d'IA depuis le serveur |

## Exercices pour l'étape 1

1. Ajoute un 4e cours dans `src/data/cours.ts` et regarde-le apparaître partout.
2. Change la couleur principale (`indigo`) en une autre couleur Tailwind.
3. Crée une page "À propos" à l'URL `/a-propos` et ajoute le lien dans `Header.tsx`.

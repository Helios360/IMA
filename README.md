# IMA — Site vitrine

Site vitrine de l'**Institut des Métiers de l'Accompagnement** (IMA) : organisme de
formation certifié Qualiopi aux métiers de la petite enfance, des services à la personne
et du grand âge (Compiègne · Senlis · Chantilly).

Site **statique multi-pages** (aucune base de données), entièrement prérendu au build.

## Pages

| Route            | Contenu                                                             |
| ---------------- | ------------------------------------------------------------------- |
| `/`              | Accueil — présentation, domaines, aperçu des formations, modèle     |
| `/institut/`     | L'institut : mission, domaines, références officielles              |
| `/formations/`   | Les 4 fiches détaillées + liens vers les fiches RNCP officielles    |
| `/notre-modele/` | Le modèle « formé, accompagné, employé »                            |
| `/qualite/`      | Qualité & financement + liens CPF, France Travail, Qualiopi…        |
| `/recrutement/`  | Recrutement rentrée 2026 (CAP AEPE)                                  |
| `/candidature/`  | Formulaire de contact + coordonnées + accès                         |

La navigation de l'en-tête et le pied de page sont partagés via
[`+layout.svelte`](src/routes/+layout.svelte). Les liens principaux sont définis une
seule fois dans [`src/lib/nav.ts`](src/lib/nav.ts).

## Stack

- **[SvelteKit](https://svelte.dev/docs/kit)** + **Svelte 5** (runes)
- **TypeScript**
- **[Vite](https://vite.dev)** (bundler / dev server)
- **[Bun](https://bun.sh)** (gestionnaire de paquets)
- **CSS** natif : variables (design tokens) globales + styles scopés par composant
- **[`@sveltejs/adapter-static`](https://svelte.dev/docs/kit/adapter-static)** : sortie 100 % statique

## Démarrage

Prérequis : [Bun](https://bun.sh) installé.

```bash
bun install       # installe les dépendances
bun run dev       # serveur de dev → http://localhost:5173
```

## Scripts

| Commande           | Description                                        |
| ------------------ | -------------------------------------------------- |
| `bun run dev`      | Serveur de développement (HMR)                     |
| `bun run build`    | Build statique dans `build/`                       |
| `bun run preview`  | Prévisualise le build de production                |
| `bun run check`    | Vérification TypeScript + Svelte (`svelte-check`)  |

## Structure

```
.
├─ static/                     Assets servis tels quels
│  ├─ favicon.png
│  ├─ logo-mark.png            Logo (symbole seul) — utilisé dans la nav
│  └─ logo-full.png            Logo complet — hero + footer
├─ src/
│  ├─ app.html                 Gabarit HTML + polices Google Fonts
│  ├─ app.css                  Design tokens (variables CSS) + reset + classes partagées
│  ├─ lib/
│  │  ├─ nav.ts                Liens de navigation partagés (en-tête + pied de page)
│  │  ├─ data/
│  │  │  ├─ site.json          ★ Contenu du site (voir « Modifier le contenu »)
│  │  │  └─ site.ts            Ré-export typé de site.json
│  │  ├─ actions/
│  │  │  └─ inview.ts          Action IntersectionObserver (animations de révélation)
│  │  └─ components/           Sections + briques réutilisables
│  │     ├─ Nav.svelte · Footer.svelte      Chrome partagé (dans le layout)
│  │     ├─ Seo.svelte                       Métadonnées <head> par page
│  │     ├─ Hero.svelte · Mission.svelte · Thread.svelte
│  │     ├─ Formations.svelte                Onglets des 4 fiches (+ lien RNCP)
│  │     ├─ FormationsTeaser.svelte          Cartes formations (accueil)
│  │     ├─ Model.svelte · Quality.svelte · Recruit.svelte · Apply.svelte
│  │     ├─ References.svelte                Grille de liens externes (réutilisable)
│  │     └─ CtaBand.svelte                   Bande d'appel à l'action (réutilisable)
│  └─ routes/
│     ├─ +layout.ts            prerender = true, trailingSlash = 'always'
│     ├─ +layout.svelte        CSS global + Nav + Footer partagés
│     ├─ +page.svelte          Accueil
│     ├─ institut/+page.svelte
│     ├─ formations/+page.svelte
│     ├─ notre-modele/+page.svelte
│     ├─ qualite/+page.svelte
│     ├─ recrutement/+page.svelte
│     └─ candidature/+page.svelte
├─ design.html                 Maquette d'origine (référence, hors application)
├─ svelte.config.js
├─ vite.config.ts
└─ tsconfig.json
```

## Modifier le contenu

Tout le contenu variable est centralisé dans **[`src/lib/data/site.json`](src/lib/data/site.json)** :
coordonnées, statistiques, les 4 fiches formations (avec numéros et URL RNCP),
financements, informations de recrutement, mentions légales et **liens externes**
(`links` : France Compétences, Qualiopi, CPF, France Travail, Région, AGEFIPH…).
Modifier ce fichier suffit à mettre à jour le site — aucun composant à toucher.

Les blocs de références externes des pages sont rendus par le composant réutilisable
[`References.svelte`](src/lib/components/References.svelte), alimenté depuis ces données.

### À compléter avant mise en ligne

Les valeurs entre crochets sont des marqueurs à remplacer (surlignés en doré sur le site) :

- `org.legal.siret`, `org.legal.nda`, `org.legal.qualiopiCertNumber`, `org.legal.qualiopiCertifier`
- Les `[X]`, `[contact]`, `[année]`… dans les fiches formations (`formations[].fields[].html`)
- Les indicateurs de résultats (taux de réussite / satisfaction / insertion), aujourd'hui
  affichés en `XX %` dans [`Formations.svelte`](src/lib/components/Formations.svelte)

### Design tokens

Couleurs et polices sont définies en variables CSS dans
[`src/app.css`](src/app.css) (bloc `:root`). Les ajuster met à jour tout le site.

## Formulaire de candidature

Le site étant statique, le formulaire de [`Apply.svelte`](src/lib/components/Apply.svelte)
n'a pas de backend : la soumission affiche un message de confirmation côté client.
Un commentaire dans le composant indique où brancher un envoi réel (e-mail, API ou
service de formulaire type Formspree) le moment venu.

## Docker

Image multi-stage : **Bun** compile le site statique, puis **nginx** le sert.
Seul le résultat du build se retrouve dans l'image finale (légère).

```bash
# Build + run via docker compose (→ http://localhost:8080)
docker compose up --build

# …ou en commandes Docker directes
docker build -t ima-site .
docker run --rm -p 8080:80 ima-site
```

Fichiers concernés : [`Dockerfile`](Dockerfile), [`nginx.conf`](nginx.conf),
[`.dockerignore`](.dockerignore), [`docker-compose.yml`](docker-compose.yml).
La config nginx sert les URLs en dossiers (`trailingSlash 'always'`) et met en cache
longue durée les assets hashés de `/_app/immutable/`.

## Déploiement

`bun run build` génère un dossier `build/` prêt à être servi par n'importe quel
hébergement statique (Netlify, Vercel, Cloudflare Pages, GitHub Pages, serveur nginx…).

> Si le site n'est pas déployé à la racine d'un domaine (ex. GitHub Pages sur un
> sous-chemin), renseigner `kit.paths.base` dans [`svelte.config.js`](svelte.config.js).
> Les liens vers les images utilisent déjà `$app/paths` (`base`) et suivront ce réglage.

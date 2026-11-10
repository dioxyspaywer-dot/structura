# STRUCTURA STUDIO V3

Application mobile de conception 3D et de schémas électroniques, construite avec HTML/CSS/JavaScript, Three.js et Capacitor.

## Fonctionnalités de cette version

- Atelier 3D avec caméra orbitale, éclairage, ombres, grille et sélection d'objets.
- Bibliothèque de pièces procédurales : plaques perforées, boîtiers, tubes creux, poutres, équerres, engrenages, vis, moteurs, résistances, condensateurs, LED, diodes et batteries.
- Ajout par clic et glisser-déposer depuis la bibliothèque vers la scène.
- Modification des positions, échelles et rotations ; duplication, suppression, annulation, mesure de distance entre deux objets et coupe dimensionnelle simple (conservation d'une moitié suivant un axe).
- Atelier électronique 2D avec symboles de composants, déplacement et fils de connexion dont la couleur est choisie par l'utilisateur.
- Sauvegarde automatique locale à chaque modification, à la sortie de l'application et au retour en arrière.
- Import/export du projet JSON et assistant Gemini qui reçoit le contexte de la scène et du schéma.
- Nouvelle identité visuelle et ressources d'icône Android.

## Lancer dans un navigateur

```bash
npm install
npm run prepare
```

Servir ensuite le dossier `www` avec un serveur HTTP local. Le chargement direct en `file://` n'est pas recommandé car les modules JavaScript ES sont soumis aux règles de sécurité du navigateur.

## Construire l'APK Android

Le workflow GitHub Actions `.github/workflows/android.yml` installe les dépendances, prépare les modules Three.js, génère les ressources Android, crée le projet natif Capacitor et construit `app-debug.apk`.

Pour une compilation locale :

```bash
npm install
npm run prepare
npx capacitor-assets generate --android
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

## Assistant Gemini

Dans l'application, ouvrir **Gemini**, fournir une clé API obtenue depuis Google AI Studio et poser une question. La clé est conservée localement dans le stockage de l'application. Ne partage pas cette clé et évite d'utiliser une clé de production dans un APK distribué publiquement : pour une publication commerciale, il faut passer par un serveur sécurisé qui protège la clé.

## Limites techniques à connaître

- Les pièces 3D sont des modèles paramétriques/procéduraux intégrés à l'application : elles ont une apparence volumétrique et des détails visuels, mais ne sont pas des modèles industriels certifiés ni des références exactes de fabricants.
- La coupe actuelle est une coupe dimensionnelle simplifiée qui conserve une moitié de l'objet. Ce n'est pas encore une opération booléenne de CAO permettant de découper n'importe quelle géométrie complexe.
- L'atelier électronique permet de dessiner et relier des composants. Il ne constitue pas encore un simulateur SPICE : aucune tension, intensité ou sécurité électrique n'est calculée automatiquement.
- Gemini fournit des conseils textuels à partir du projet transmis ; il ne modifie pas directement la géométrie et ne valide pas la sécurité d'une fabrication.
- Les connexions sont colorées selon le choix de l'utilisateur. La convention rouge/positif, noir/masse, bleu ou vert/signal est indicative et doit être vérifiée selon le circuit réel.

## Version

STRUCTURA STUDIO V3 — version de travail livrée le 10 novembre 2026.

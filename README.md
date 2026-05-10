# GitHub Actions Demo

Mini projet Node.js utilisé pour démontrer un pipeline CI avec GitHub Actions.

## Lancer les tests en local

npm install
npm test

## Pipeline CI

## Pipeline CI/CD

| Étape   | Description                        |
|---------|------------------------------------|
| ✅ Test  | Lance les tests Jest               |
| 🔨 Build | Génère les artefacts dans `/dist`  |
| 🚀 Deploy| Déploiement simulé en production   |

À chaque `push` ou `pull_request` sur `main`, GitHub Actions :
1. Clone le repo
2. Installe Node.js 20
3. Installe les dépendances
4. Lance les tests Jest
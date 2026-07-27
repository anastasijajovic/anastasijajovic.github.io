# Portfolio — Anastasija Jović

React + Vite portfolio, prilagođen GitHub Pages-u.

## Pokretanje

```bash
npm install
npm run dev
```

## Objavljivanje na GitHub Pages

1. Kreiraj repo pod imenom `anastasijajovic.github.io` ili promeni `base` u `vite.config.js` na ime svog repozitorijuma.
2. Postavi sadržaj na `main` granu.
3. U GitHub repozitorijumu otvori **Settings → Pages → Source: GitHub Actions**.
4. Workflow iz `.github/workflows/deploy.yml` će automatski objaviti sajt.

## Fotografija

Trenutno se koristi GitHub avatar kako bi projekat odmah radio online. Zameni vrednost `avatar` u `src/data/portfolio.js` putanjom do svoje fotografije iz `src/assets/` kada je dodaš u repo.

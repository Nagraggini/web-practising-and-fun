![Workflow neve](https://github.com/Nagraggini/web-projects/actions/workflows/playwright.yml/badge.svg)
![Top Language](https://img.shields.io/github/languages/top/Nagraggini/web-projects)
![License](https://img.shields.io/badge/license-MIT-green)

## Web Practising & Fun

This repository is a collection of small web development projects, experiments, and practice work.

I use it to improve my skills in HTML, CSS, and JavaScript while building fun and simple applications.

## Live Demo

👉 https://nagraggini.github.io/web-projects/

## IT Blog

If you're interested in how to get started with web development, check out my blog.

Currently available only in Hungarian:
👉 https://nagraggini.github.io/my-awesome-book/

---

## 🇭🇺 Magyar verzió - Hungarian version

## Web gyakorlás és fun projektek

Ez a repository kisebb webes projektekből és gyakorló feladatokból áll.

Célja, hogy fejlesszem a HTML, CSS és JavaScript tudásomat, miközben egyszerű és szórakoztató dolgokat készítek.

## Élő verzió

👉 https://nagraggini.github.io/web-practising-and-fun/

## IT Blog

Ha érdekel, hogyan kezdj el webfejlesztést tanulni, nézd meg a blogomat:

👉 https://nagraggini.github.io/my-awesome-book/

# Előkészületek

Gyors gombok:
A terminálból másolni ctrl+shift+c és beilleszteni a ctrl+shift+v .

Terminálban navigálj el (cd-vel) oda ahova szeretnéd a projekt mappáját, vagy egyből nyisd meg a projekt mappáját a vs code-ban.

Verzió kezeléshez:
Terminálban: git init

## Előkészületek Vite-hoz

 A dinamikus tartalom és a gyors frissítés miatt jobb, ha a js-ben van a html lényegi része.

Telepítés:
Terminálba írd be:
node -v //Ha v20 vagy v22-t látsz, akkor a következő részt hagyd ki.
npm -v

Régi node esetén:
sudo apt update && sudo apt install curl
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc //Terminál frissítése.
nvm install --lts

Windows verzió:
winget install CoreyButler.NVMforWindows
Indítsd újra a terminált.
nvm install lts
nvm use lts

npm telepítése linuxra:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
Utána:
nvm install --lts

Windows verzió:
nvm install lts    # Telepíti a legfrissebb stabil verziót
nvm use lts        # Aktiválja azt

npm create vite@latest .
y -> Ignore files and continue
Framework: vanilla aztán javascript -> Install with npm: Yes
Kiírja a local host-ot. pl.: http://localhost:5173/

Localhost elindítása: npm run dev

Localhost leállítása: Terminálban ctrl+c-t nyomj.

## Mappa szerkezet lértehozása

```bash
my-web-app/
├── dist/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   ├── fonts/
│   │   └── vendor/
│   ├── css/
│   │   ├── base/
│   │   ├── components/
│   │   ├── layouts/
│   │   └── main.css
│   ├── js/
│   │   ├── components/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── config/
│   │   └── main.js
│   └── index.html
├── .github/
├── tests/
├── .gitignore
├──  index.html
├── package.json
└── README.md
```

A fenti mappa szerkezetet, így tudod profin létre hozni:
Terminal -> New Terminal

mkdir -p src/assets/{images,icons,fonts,vendor} src/css/{base,components,layouts} src/js/{components,services,utils,config} .github tests && touch src/css/main.css src/js/main.js README.md .gitignore && rm src/counter.js src/main.js src/style.css && rm src/assets/javascript.svg src/assets/vite.svg&& find src -type d -empty -not -path '*/.*' -exec touch {}/.gitkeep \;

index.html fájlba ezt írd be:
```html
<!doctype html>
<html lang="hu">
    <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="/src/css/main.css" />

        <title>Weboldalam</title>
    </head>
    <body>
        <div id="app"></div>

        <script type="module" src="/src/js/main.js"></script>
    </body>
</html>

```

## Feltöltés GitHub-ra

GitHub Desktop -> File -> Add local repo
-> Keresd meg a projekt mappáját. -> Add repo.

Add hozzá az első commit-od bal oldalt. 
Után publikáljuk a repot: jobb oldal Publish repo -> Publish repo

## Linting automatizása

A linter azt vizsgálja, hogy a kód szép, szabványos és hibamentes-e.

package.json fájlba módosítása:
  Ez volt a régi:

```json
   "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"  
  },
```

```json
 "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  },
```
Telepítése:
Futtatás terminálban: npm run lint

# GitHub Actions

<!--TODO -->
1. Minőségellenőrzés (CI - Continuous Integration || Continuous Integration) -> pl.: Playwright
2. Automatikus Közzététel (CD - Continuous Deployment || Deployment) -> pl.: GitHub Pages, Vercel
3. Karbantartás és Biztonság (Automation)-> 
    Dependabot: Automatikusan figyeli a package.json-t, és ha valamelyik npm csomagnak (pl. Vite) kijön egy biztonsági frissítése, nyit neked egy Pull Requestet vele.

    Lighthouse CI: Minden commit után lefut egy audit, és megmondja, mennyire lett gyorsabb vagy lassabb az oldalad (SEO, Performance, Accessibility).

## Ha nem lehet publikus a forráskód

Privát kód esetén ez kell: Netlify, vagy Vercel, vagy Firebase Hosting kell.

### Vercel beállítása

https://vercel.com/-ra regisztrálj.

Jobb oldalt Add New ...-> Projects -> Választ ki a privát repo-t a listából Import gombbal.

Application Preset: Vite //Ha nem jól mutatná. -> Deploy -> Várj kicsit. -> Continue to Dashboard

A Domains részen láthatod a weboldalad linkjét. Jelen esetben: https://webfejlesztes-modulzaro-260117-f-an.vercel.app/

### vite.config.js vercel esetén.

Terminálba ezt másold be:

echo "import { defineConfig } from 'vite'

export default defineConfig({
  // A relatív útvonal a vercelhez.
    base: "./",
})" > vite.config.js

Ezután commitolj és mehet a push and pull a GitHub Desktop alkalmazásban.

### Github Actions-ben Playwright beállítása

Terminálba ezt írd be: npm init playwright@latest -> Typescript -> tests -> y -> y -> y 

Miután végzett írd felül ezt a fájlt:
.github/workflows/playwright.yml

```yaml
name: Playwright Tests
on:
    deployment_status: # Akkor fut le, amikor a Vercel végzett a buildeléssel.
jobs:
    test:
        # Csak akkor fusson, ha a Vercel sikeresen létrehozta a Preview URL-t.
        if: github.event.deployment_status.state == 'success'
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4

            - uses: actions/setup-node@v4
              with:
                  node-version: 20
                  cache: "npm"

            - name: Install dependencies
              run: npm ci

            - name: Install Playwright Browsers
              run: npx playwright install --with-deps

            - name: Run Playwright tests
              run: npx playwright test
              env:
                  # A Vercel által generált dinamikus URL használata
                  BASE_URL: ${{ github.event.deployment_status.target_url }}
                  # Ha vannak titkos környezeti változóid (pl. teszt felhasználó)
                  #MY_SECRET_API_KEY: ${{ secrets.MY_SECRET_API_KEY }}

            - uses: actions/upload-artifact@v4
              if: always()
              with:
                  name: playwright-report
                  path: playwright-report/
                  retention-days: 30
```

A playwright.config.ts fájlban:

Ezt módosítsd:
```ts
 use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
```
Erre:

```ts
/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    /*A localhost száma lehet más, csekkold le, írd be a terminálba: npm run dev*/
    baseURL: process.env.BASE_URL || 'http://localhost:5173',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
```


Utána csekkold le magad:
Terminálba írd be: npm run dev
npx playwright test

#### Playwright badge beállítása

Böngészőben nyid meg a repod -> Actions -> bal oldalt Playwright Tests -> Jobb felül három pöttyre katt -> Create status badge -> Majd copy-ra és illeszd be a README.md fájlod elejére. 

## Ha publikus lehet a forráskód

Nyisd meg a böngészőben a github-os repodat. -> Settings -> Lentebb görgess a legvégére. -> Change visibility -> Change to public

Aztán felül bal oldalt Pages.

Itt a "Build and deployment" résznél a forrás (Source) maradjon Deploy from a branch, a Branch-nél pedig válaszd ki a main ágat és kattints a Save gombra.

Ekkor a GitHub elindít egy folyamatot (ezt látod az Actions fülön), és 1-2 percen belül kapsz egy linket, ami így néz ki: https://felhasznalonev.github.io/repo-neve/.

### GitHub Pages beállítása (Vite + GitHub Actions)

#### Első módszer

Nyisd meg a böngészőben a github-os repodat. -> Settings -> Actions -> General -> Read and write permissions -t pipáld be.

A GitHub Actions szempontjából a Vite projekt csak egy sima Node.js projekt, ezért meg kell kérni, hogy futtassa le az npm run build-et.

Nyisd meg a böngészőben a github-os repodat. -> Actions -> set up a workflow yourself 
nevezd át felül deploy.yml-re. Látod mellette a master/main nevet az a branch neve.

#### Második módszer

Terminálba: mkdir .github/workflows&&touch .github/workflows/deploy.yml

##### Első, vagy második módszer után ez jön

Ezt másold bele: 
```yml
name: Deploy to GitHub Pages

on:
    push:
        branches: [main] # A fenti branch névvel egyeznie kell!

permissions: # Engedélyek: olvasás, írás meg a token írás, ha van.
    contents: read
    pages: write
    id-token: write

jobs:
    build-and-deploy:
        runs-on: ubuntu-latest
        steps:
            - name: Checkout
              uses: actions/checkout@v4 # Marketplace-ről: Letölti a kódot.

            - name: Set up Node
              uses: actions/setup-node@v4 # Marketplace-ről: Beállítja a Node.js-t.
              with:
                  node-version: 22 # Verziót csekkold le. LTS-t használj.
                  cache: "npm"

            - name: Install dependencies
              run: npm install

            - name: Build
              run: npm run build # Ez hozza létre a 'dist' mappát.

            - name: Setup Pages
              uses: actions/configure-pages@v4 # Beállítja a környezetet.

            - name: Upload artifact
              uses: actions/upload-pages-artifact@v3 # Feltölti az újonnan létrehozott 'dist' mappát.
              with:
                  path: "./dist"
            - name: Deploy to GitHub Pages
              id: deployment
              uses: actions/deploy-pages@v4 # Publikálja az oldalt.

```
Jobb szélen a Documentation alatt láthatod a fentiek magyarázatát. A tabulátorokra és szóközökre érzékeny a yml fájlt.

Első módszer esetén: Kattints a Commit changes-re. -> Commit changes

Másodiknál, csak commitolj egyet.

### vite.config.js GitHub Pages esetén (publikus a forráskód)

Terminálba egybe ezt másold be:

echo "import { defineConfig } from 'vite'

export default defineConfig({
  // A 'repo-neve' helyére írd be a GitHub repód pontos nevét per jelek közé!
  base: '/webprojects/',
})" > vite.config.js

Ezután commitolj és mehet a push and pull a GitHub Desktop alkalmazásban.

**Későbbi teszteknél ezt használd:**
Élesítés: Terminálba: git push -> A GitHub YAML fájlja átveszi a stafétát, és 1-2 perc múlva kint van az oldalon.

# Playwright beállítása

Terminálba: npm init playwright@latest

Linux-on valszeg elhasal a telepítés, és külön kell a függőségeket telepíteni ezzel: 
sudo rm /etc/apt/sources.list.d/docker.list  //Ezt akkor futtasd, ha van hibás docker tárolód.
sudo apt update
sudo apt-get install libavif16
sudo npx playwright install-deps

TypeScript -> tests -> GitHub Actions yes -> Install Playwright browsers? yes
-> Install dependencies? yes

Egy tests mappád legyen, akár kicsi akár nagy betűs! 
Ezután a playwright.config.js-ben csekkold le ezt: testDir: './tests',

**GitHub Actions**

Mivel a GitHub Actions-re yes-t írtál, ezért a rendszer automatikusan létrehozza neked a workflow fájlt.

.github/workflows/playwright.yml

Ez az útmutató, hogy mi alapján futtassa a GitHub a teszteket. 

**playwright.config.ts**

A fájlban ezt módosítds:

```ts
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
```

Erre:

```ts
use: {
        baseURL: "http://localhost:4173/web-projects/",
        actionTimeout: 10000,
        navigationTimeout: 15000,
        trace: "on-first-retry",
    },
```

Valamint a local teszthez:

Ezt írd át:
```ts

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
```

Erre:
```ts
webServer: {
        command: "npm run build && npm run preview",
        url: "http://localhost:4173/web-projects/",
        reuseExistingServer: !process.env.CI,
        stdout: 'ignore',
        stderr: 'pipe',
    },
```

A kapcsos zárójelek utáni vesszőre figyelj.

**package.json**-ben is be kell állítani.

Ezt módosítsd:
```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  },
```
Erre:

```json
   "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview",
        "lint": "eslint .",
        "test": "npx playwright test"
    },
```
A kapcsos zárójelek utáni vesszőre figyelj.



Tesztelt le, hogy mindent jól beállítottál-e.
Terminálban: npx playwright test

# Playwright használata

[https://github.com/Nagraggini/playwright-playground](Részletes útmutatót a playwright használatáról itt találsz.)


**Teljes teszthez**

Terminálban: 
Ezzel csak a chromium típusú böngészőben futtatod a tesztet.
npx playwright test --project=chromium

Miután elindult minden, a leállításhoz a terminálban nyomd meg a ctrl+C-t.
npx playwright test

Többi hasznos terminál parancs a teszteléshez:
npx playwright test --headed
npx playwright test --ui
npx playwright test --debug

# Források

https://www.youtube.com/watch?v=i_KXcwr7PYc
https://www.freecodecamp.org/learn/javascript-v9/lecture-working-with-the-dom-click-events-and-web-apis/what-is-an-api-and-what-are-web-apis
https://www.youtube.com/watch?v=HmaQwuKUYTc
https://www.freecodecamp.org/learn/javascript-v9/lecture-working-with-the-dom-click-events-and-web-apis/how-do-you-create-new-nodes-using-innerhtml-and-createelement
[10 CSS PRO Tips and Tricks you NEED to know](https://www.youtube.com/watch?v=44FTAS-qT8Q&list=WL&index=11)
[How to create a Responsive Navigation Bar (for beginners)](https://www.youtube.com/watch?v=U8smiWQ8Seg)

# Lefedettség ellenőrzése

Terminálba ezt írd be: npm run dev 

A megjelent linkre katt.

Nyomj egy F12-őt (Fejlesztői eszközök) pl: Chrome-ban.

Nyomj egy Ctrl + Shift + P kombinációt (ez a parancskereső).

Írd be, hogy: Coverage, majd válaszd a Show Coverage lehetőséget.

Katt a Reload page gombra.

A böngésző újratölti az oldalt, és elemzi a fájlokat.

Látni fogsz egy listát a fájljaidról. A Unused Bytes oszlop mutatja meg, mennyi kód nem lett felhasználva, egy piros/kék csík pedig vizuálisan is jelzi az arányt. Kattints a style.css ás fájlodra és meg fog jelenni bal oldalt. Zöld csík lesz amellett, amit használtál, szürke meg amit nem. 

# Local teszthez

Fejlesztés:                 
    Terminálba ezt írd be: npm run dev -> Katt a terminálban lévő linkre. -> Kódolsz, látsz minden változást élőben.       

    Leállításhoz a terminálba kattintsd beel és ctrl+c      

Playwright teszteléshez:
   Terminálba ezt írd be: npm run preview -> Katt a terminálban lévő linkre, más lesz az ip cím, mint az előző, nem véletlenül. Ilyenkor a dist mappát teszteled (ezt látja a Playwright).


Ellenőrzés (opcionális):            
    npm run lint -> Megnézed, "szép-e" a kódod és nincs-e benne hiba.       

    npm run build -> Megnézed, minden rendben van-e a végleges fájlokkal. Legenerálod a dist mappát és a benne lévő index.html fájlt csekkold.      
    
Commitoláshoz:      
    Kijelölés: git add .            
    Mentés: git commit -m "Upload README.md"            
    Feltöltés: git push     

Csekkolás:      
    git status 

import { defineConfig } from "vite";
import { resolve, basename } from "path";

//Mappa nevekre figyelj.
const VALID_APPS = [
    "for-a-new-job",
    "guess-my-number",
    "job-interview-q-and-a",
    "questlog",
    "rock-band",
];

// Megoldás: Object.create(null) használata, így az objektumnak nincsenek
// sérülékeny prototípus metódusai (pl. __proto__), amiket támadni lehetne.
const input = Object.assign(Object.create(null), {
    main: resolve(__dirname, "index.html"), // A főoldal
    about: resolve(__dirname, "pages/about-me.html"), // Másik aloldal.
});

VALID_APPS.forEach((app) => {
    // Biztonsági ellenőrzés: csak akkor adjuk hozzá, ha nem egy tiltott kulcsszó
    if (app !== "__proto__" && app !== "constructor") {
        const safeApp = basename(app);
        input[safeApp] = resolve(__dirname, "apps", safeApp, "index.html");
    }
});

export default defineConfig({
    base: "/web-projects/", // Fontos: Ha a repo neve web-projects, ez maradjon így

    build: {
        outDir: "dist",
        rollupOptions: {
            input: input, // Itt adjuk át az összes HTML-t
        },
    },
});

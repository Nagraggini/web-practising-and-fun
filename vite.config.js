import { defineConfig } from "vite";
import { resolve, basename } from "path";

// Mappa nevekre figyelj.
const VALID_APPS = [
    "for-a-new-job",
    "guess-my-number",
    "job-interview-q-and-a",
    "questlog",
    "rock-band",
];

// Olyan objektumot hozunk létre, aminek nincs prototípusa (biztonságosabb)
const input = Object.create(null);

// Alapértelmezett oldalak hozzáadása
input.main = resolve(__dirname, "index.html"); // A főoldal
input.about = resolve(__dirname, "pages/about-me.html"); // Másik aloldal.

VALID_APPS.forEach((app) => {
    // 1. Megtisztítjuk az útvonalat a basename-szel (Path Traversal elleni védelem)
    const safeName = basename(app);

    // 2. Ellenőrizzük, hogy a kulcs nem üres és nem veszélyes (Injection elleni védelem)
    if (safeName && safeName !== "__proto__" && safeName !== "constructor") {
        input[safeName] = resolve(__dirname, "apps", safeName, "index.html");
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

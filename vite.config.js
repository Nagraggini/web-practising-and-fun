import { defineConfig } from "vite";
import { resolve } from "path";

//Mappa nevekre figyelj.
const VALID_APPS = [
    "for-a-new-job",
    "guess-my-number",
    "job-interview-q-and-a",
    "questlog",
    "rock-band",
];

// Legeneráljuk az összes belépési pontot a Rollup számára
const input = {
    main: resolve(__dirname, "index.html"), // A főoldal
    about: resolve(__dirname, "pages/about-me.html"), // Másik aloldal.
};

VALID_APPS.forEach((app) => {
    input[app] = resolve(__dirname, "apps", app, "index.html");
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

import { defineConfig } from "vite";
import { resolve } from "path";
import { readdirSync } from "fs";

// Automatikusan megkeressük az összes mappát az apps alatt
const getAppInputs = () => {
    const appsDir = resolve(__dirname, "apps");
    const appFolders = readdirSync(appsDir, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

    const inputs = {
        main: resolve(__dirname, "index.html"), // A főoldal
    };

    appFolders.forEach((app) => {
        inputs[app] = resolve(__dirname, `apps/${app}/index.html`);
    });

    return inputs;
};

export default defineConfig({
    base: "/web-projects/", // A GitHub Pages elérése
    build: {
        rollupOptions: {
            input: getAppInputs(), // Itt adjuk át az összes talált HTML-t
        },
    },
});

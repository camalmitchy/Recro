import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
    preset: "vercel",
    serveStatic: true,
    output: {
        dir: "dist/server",
        serverDir: "dist/server",
        publicDir: "dist/client",
    },
});

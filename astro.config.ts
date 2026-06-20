import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import { loadEnv } from "vite";
import spectre, { type GiscusMapping } from "./package/src";
import { spectreDark } from "./src/ec-theme";

const {} = loadEnv(process.env.NODE_ENV!, process.cwd(), "");

// https://astro.build/config
const config = defineConfig({
	site: "https://zahradka.ninja",
	output: "static",
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: "Trey's Garden",
			openGraph: {
				home: {
					title: "Trey's Garden",
					description: "A site full of Trey's hobbies and thoughts.",
				},
				notes: {
					title: "Notes",
					description: "Articles, Guides, Ideas, and Learnings.",
				},
				projects: {
					title: "Projects",
				},
			},
		}),
	],
});

export default config;

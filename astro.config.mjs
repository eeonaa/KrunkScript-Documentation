// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { readFileSync } from "node:fs";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'KS Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/eeonaa/KrunkScript-Documentation' }],
			sidebar: [
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 	],
				// },
				{
					label: 'Variables',
					autogenerate: { directory: 'variables' },
				},
				{
					label: 'Statements',
					autogenerate: { directory: 'statements' },
				},
				{
					label: 'Global Functions',
					autogenerate: { directory: 'global' },
				},
			],
			expressiveCode: {
				shiki: {
					langs: [
						JSON.parse(readFileSync("./grammar/krnk.tmLanguage.json", "utf-8"))
					]
				}
			}
		}),
	],
});

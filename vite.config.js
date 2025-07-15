// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		exclude: ["@chakra-ui/theme-tools"],
		include: ["lodash.mergewith"],
	},
});
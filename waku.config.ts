import { defineConfig } from 'waku/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@mdx-js/rollup'
import path from 'path'
import rehypeAddCodeBlock from '@renoun/mdx/rehype/add-code-block'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'


export default defineConfig({
  vite: {
    resolve: {
    alias: {
      "mdx-components": path.resolve(import.meta.dirname, "./src/mdx-components.tsx"),
    },
  },
    plugins: [
      mdx({
        providerImportSource: 'mdx-components',
        rehypePlugins: [rehypeAddCodeBlock],
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }), 
      tailwindcss()],
  },

});

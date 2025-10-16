import type { PageProps } from "waku/router";
import { BlogPostDirectory } from "../../../collections";

export default async function BlogPost({slug}: PageProps<"renoun/[...slug]">) {

  const entry = await BlogPostDirectory.getFile(slug, "mdx")

  const frontmatter = await entry.getExportValue("frontmatter")

  const Content = await entry.getExportValue("default")

  return (
    <article>
      <h1>Blog Post: {frontmatter.title}</h1>
      <Content />
    </article>
  );
}

export const getConfig = async () => {

  const posts = await BlogPostDirectory.getEntries();
  const staticPaths = posts.map(post => post.getPathnameSegments({includeBasePathname: false}));

  return {
    render: 'static',
    staticPaths
  } as const;
};

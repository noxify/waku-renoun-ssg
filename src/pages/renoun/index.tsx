import { BlogPostDirectory } from "../../collections";

export default async function BlogIndex() {
  const posts = await BlogPostDirectory.getEntries();
  const staticPaths = posts.map(post => post.getPathname());

  console.dir({ posts, staticPaths }, { depth: null });
  return (
    <div>
      <h3>Renoun blog overview</h3>
     
    </div>
  );
}
export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};

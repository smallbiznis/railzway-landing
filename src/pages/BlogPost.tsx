import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { posts } from "../content/posts";
import ReactMarkdown from "react-markdown";

interface BlogPostProps {
  slug: string;
}

function BlogPost({ slug }: BlogPostProps) {
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    // Very simple 404 for MVP
    return (
      <div className="flex h-screen items-center justify-center bg-bg-primary text-text-primary">
        <h1 className="text-2xl">Article not found</h1>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-primary/5 via-bg-primary to-bg-primary" />
      </div>

      <Navbar />

      <article className="pt-32 pb-20 px-6">
        <div className="mx-auto w-full max-w-2xl"> {/* Narrower for better reading experience */}
          <header className="mb-10 text-center">
            <div className="flex items-center justify-center gap-3 text-sm font-medium text-text-muted mb-6 tracking-wide uppercase">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl mb-6 leading-[1.1]">
              {post.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="rounded-full border border-border-subtle bg-bg-surface/50 px-3 py-1 text-xs font-medium text-text-secondary">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* "Serious" Engineering Blog Typography */}
          <div className="prose prose-invert prose-lg max-w-none 
                prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-text-primary 
                prose-p:text-text-secondary prose-p:leading-8 
                prose-strong:text-text-primary prose-strong:font-semibold
                prose-code:text-accent-primary prose-code:font-mono prose-code:text-sm prose-code:bg-bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
                prose-pre:bg-bg-surface-strong prose-pre:border prose-pre:border-border-subtle prose-pre:shadow-sm
                prose-li:text-text-secondary
                prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline
                selection:bg-accent-primary/20 selection:text-text-primary">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-16 pt-8 border-t border-border-subtle flex justify-between">
            <a href="/blog" className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors flex items-center gap-2">
              <span>←</span> Back to Engineering Blog
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default BlogPost;

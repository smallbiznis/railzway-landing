import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { posts } from "../content/posts";
import { motion } from "motion/react";
import { getSectionVariants } from "../lib/motion";


function BlogIndex() {
  const { container, item } = getSectionVariants(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-primary text-text-primary">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-primary/5 via-bg-primary to-bg-primary" />
      </div>

      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto w-full max-w-4xl">
          <motion.div
            className="space-y-4 mb-16"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h1 className="text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
              Engineering Blog
            </h1>
            <p className="text-xl text-text-secondary">
              Thoughts on billing infrastructure, deterministic systems, and open source.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {posts.map((post) => (
              <motion.a
                key={post.slug}
                href={`/blog/${post.slug}`} // In App.tsx we need to handle this path
                className="block group"
                variants={item}
              >
                <article className="rounded-2xl border border-border-subtle bg-bg-surface/30 p-8 transition duration-300 hover:border-accent-primary/50 hover:bg-bg-surface/50">
                  <div className="flex items-center gap-3 text-sm text-text-muted mb-4">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-text-primary mb-3 group-hover:text-accent-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center text-sm font-medium text-accent-primary">
                    Read article <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </article>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogIndex;

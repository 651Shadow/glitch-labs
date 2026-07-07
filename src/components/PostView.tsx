import React from 'react';
import { marked } from 'marked';
import { getPost } from '../data/posts';

export function PostView({ slug }: { slug: string }) {
  const post = getPost(slug);
  if (!post) return <section><div className="wrap"><p>Post not found.</p></div></section>;
  const html = marked.parse(post.body, { breaks: true }) as string;
  return (
    <section>
      <div className="wrap post">
        <a className="muted" href="#/blog">← All writing</a>
        <h1>{post.title}</h1>
        <div className="meta" style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 20 }}>
          {post.date} · {post.tags.join(', ')}
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p className="note" style={{ marginTop: 30 }}>
          Glitch Labs builds the tools mentioned here. <a href="#/products">Browse products →</a>
        </p>
      </div>
    </section>
  );
}

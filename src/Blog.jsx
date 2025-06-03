import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Blog.css';

const posts = [
  {
    title: 'How I Built My Portfolio with React & Vite',
    date: '2025-05-01',
    summary: 'A step-by-step guide to building a modern, animated portfolio using React, Vite, and CSS.',
    link: '#',
    icon: '📝',
    tags: ['React', 'Vite', 'Portfolio'],
    featured: true,
    readingTime: '6 min',
  },
  {
    title: 'Tips for Responsive Web Design',
    date: '2025-04-15',
    summary: 'Best practices and tools for making your web apps look great on any device.',
    link: '#',
    icon: '📱',
    tags: ['CSS', 'Responsive'],
    featured: false,
    readingTime: '4 min',
  },
];

const allTags = ['All', ...new Set(posts.flatMap(post => post.tags))];

const Blog = ({ darkMode }) => {
  const [selectedTag, setSelectedTag] = useState('All');
  const filteredPosts = selectedTag === 'All' ? posts : posts.filter(post => post.tags.includes(selectedTag));

  return (
    <section className={`blog-section ${darkMode ? 'dark' : 'light'}`} id="blog">
      <h2 className="blog-title">Blog</h2>

      <nav className="tag-filter" aria-label="Filter blog posts by tag">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`tag-button ${selectedTag === tag ? 'active' : ''} ${darkMode ? 'dark' : 'light'}`}
            aria-pressed={selectedTag === tag}
          >
            {tag}
          </button>
        ))}
      </nav>

      <div className="blog-list">
        {filteredPosts.length === 0 ? (
          <p className="no-posts">
            No posts found for <strong>{selectedTag}</strong>.
          </p>
        ) : (
          filteredPosts.map((post, index) => (
            <motion.article
              key={index}
              className={`blog-card ${post.featured ? 'featured' : ''}`}
              whileHover={{
                scale: 1.04,
                boxShadow: '0 8px 32px rgba(56, 189, 248, 0.15)',
                background: darkMode ? '#23272f' : '#f3f4f6',
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            >
              <header className="blog-card-header">
                <span className="blog-icon" aria-hidden="true">{post.icon}</span>
                <h3 className="blog-title-text">{post.title}</h3>
                {post.featured && <span className="featured-badge">Featured</span>}
              </header>

              <div className="blog-meta">
                {new Date(post.date).toLocaleDateString()} • {post.readingTime}
              </div>

              <div className="blog-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="tag-chip">{tag}</span>
                ))}
              </div>

              <p className="blog-summary">{post.summary}</p>
              <a
                className="blog-link"
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </motion.article>
          ))
        )}
      </div>
    </section>
  );
};

export default Blog;

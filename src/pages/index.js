import React from 'react';
import Hero from '../components/hero';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my Blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post}></PostPreview>
        ))}
      </Layout>
    </>
  );
};

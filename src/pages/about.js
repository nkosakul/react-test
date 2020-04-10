import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Hero from "../components/hero";

export default () => (
  <>
    <Hero />
    <Layout>
      <h1>About me</h1>
      <p>My personal page.</p>
      <Link to="/">back to homepage</Link>
    </Layout>
  </>
);

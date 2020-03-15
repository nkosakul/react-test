import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Home</h1>
    <p>This is the startpage</p>
    <Link to="/about">to about page</Link>
  </Layout>
);

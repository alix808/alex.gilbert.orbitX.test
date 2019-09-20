import React from 'react';
import PostState from '../src/context/post/PostState';
import Layout from './comps/layout/Layout';

function App() {
  return (
    <PostState>
      <Layout />
    </PostState>
  );
}

export default App;

import React, { useContext, useEffect } from 'react';
import PostContext from '../../context/post/postContext';
import PostItem from '../post-item/PostItem';
import Title from '../title/Title';
import styled from 'styled-components';

const BlogPosts = () => {
  const postContext = useContext(PostContext);

  const { getPosts, postData } = postContext;

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Title title={'All posts'}></Title>
      {postData.map(({ id, title, body }) => (
        <PostItem key={id} title={title} body={body} id={id} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-left: 4em;
  padding-right: 2em;
  @media (max-width: 600px) {
    padding: 0em;
  }
`;


export default BlogPosts;

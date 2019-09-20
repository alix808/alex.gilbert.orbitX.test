import React from 'react';
import CenterText from '../center-text/CenterText';
import Search from '../search/Search';
import styled from 'styled-components';

export default function Header() {
  return (
    <BackGround>
      <Padding>
        <CenterText text={'Posts Page'} variant={'h4'} />
        <Search />
      </Padding>
    </BackGround>
  );
}

const Padding = styled.div`
  padding: 6rem;
`;

const BackGround = styled.div`
  background-color: #f8f8f8;
  margin: 0;
  padding: 0;
`;

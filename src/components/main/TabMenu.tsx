import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import { tabDatas } from './data';
import TabButtonItem from './TabButtonItem';

const TabMenu = () => {
  return (
    <Container>
      {tabDatas.map((tab) => (
        <TabButtonItem
          key={tab.id}
          image={tab.image}
          title={tab.title}
          altText={tab.altText}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: space-evenly;

  width: 100%;
  height: 55px;

  background-color: #ffffff;

  backdrop-filter: blur(20px);
  box-shadow: 0px -0.5px 0px #e0e0e0;

  border-radius: 20px 20px 0px 0px;
  border-top: 1px solid ${palette.LightGray};
`;

export default TabMenu;

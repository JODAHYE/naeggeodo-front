import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { RootState } from '../../modules';
type StyledProps = {
  name: 'title' | 'info';
};
const Header = () => {
  const { chatRoomInfo } = useSelector(
    (state: RootState) => state.chattingRoomState,
  );

  return (
    <Wrap>
      <ContentWrap>
        <Image
          src='/assets/images/prevbtn.svg'
          alt='prev button'
          width={14}
          height={24}
        />
        <StyledImage src='/buger.png' width={44} height={44} />
        <Div>
          <Info name='title'>{chatRoomInfo.title}</Info>
          <Info name='info'>인원2명/{chatRoomInfo.maxCount}명</Info>
        </Div>
      </ContentWrap>
    </Wrap>
  );
};

export default Header;
const Wrap = styled.div`
  background: #191919;
  height: 10%;
  width: 100%;
`;
const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  gap: 10px;
`;
const StyledImage = styled(Image)`
  display: inline-block;
  border-radius: 10px;
  background: #fff;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Info = styled.p<StyledProps>`
  color: #fff;
  line-height: 20px;
  ${(props) =>
    props.name === 'title' &&
    css`
      font-size: 15px;
    `}
  ${(props) =>
    props.name === 'info' &&
    css`
      font-size: 12px;
    `}
`;

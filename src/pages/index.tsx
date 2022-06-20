import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { END } from 'redux-saga';
import styled from 'styled-components';
import { useSelectLoginStates } from '../hooks/select/useSelectLoginStates';
import { wrapper } from '../modules';
import palette from '../styles/palette';
import { saveCookies } from '../utils/saveCookies';

const RendingPage = () => {
  const router = useRouter();
  const { buildingCode } = useSelectLoginStates();
  const [count, setCount] = useState(0);

  const moveToChatRooms = useCallback(() => {
    if (buildingCode) {
      router.push(`/chat-rooms?buildingCode=${buildingCode}`);
    } else router.push('/chat-rooms');
  }, [router, buildingCode]);

  const plusCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <Container>
      <TopContainer>
        <div>
          <Image src="/assets/images/ngIcon.svg" width={300} height={300} />

          <Title>
            우리동네
            <br />
            배달비 반값 플랫폼
            <br />
            <Strong>내꺼도</Strong> 🛵
          </Title>

          <Description>
            지금 채팅방을 생성해서
            <br />
            같이먹을 사람을 모집해보세요
          </Description>

          <StartContainer>
            <MoveMainPageButton onClick={moveToChatRooms}>
              지금 둘러보기
            </MoveMainPageButton>
          </StartContainer>
        </div>

        <StyledLike>{count}</StyledLike>
      </TopContainer>

      <LikeButtonContainer>
        <p>앱 버전이 개발중 입니다 빠른 출시를 위해 하트를 눌러주세요 :)</p>
        <button onClick={plusCount}>
          <Image src="/assets/images/heart.svg" width={55} height={55}></Image>
        </button>
      </LikeButtonContainer>
    </Container>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);

    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {},
    };
  },
);

const Container = styled.div`
  padding: 0 30px 20px;
  background-color: #fff;
  height: 100vh;
`;

const Title = styled.h1`
  font-family: 'SpoqaBold';
  font-size: 1.625rem;
  color: ${palette.black};
  letter-spacing: 0.35px;
  line-height: 1.3;
`;

const Strong = styled.strong`
  color: ${palette.mainOrange};
`;

const Description = styled.p`
  line-height: 1.2;
  color: ${palette.DarkGray};
  margin-top: 30px;
`;

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
`;

const MoveMainPageButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 200px;
  height: 40px;

  color: #fff;
  background-color: ${palette.mainOrange};
  border-radius: 10px;
`;

const TopContainer = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 605px) {
    flex-direction: column;
  }
`;

const LikeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 10px;
  margin-top: 60px;
  border-radius: 20px;

  background-color: ${palette.LightGray};
  color: #e2758c;

  @media (max-width: 605px) {
    margin-top: 20px;
  }

  & > button {
    all: unset;
    cursor: pointer;
    transition: 0.6s;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

const StyledLike = styled.div`
  display: flex;
  align-items: flex-end;
  font-family: 'SpoqaBold';
  font-size: 3.75rem;

  color: #e2758c;
`;

export default RendingPage;

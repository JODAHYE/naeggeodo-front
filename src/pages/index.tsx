import styled from 'styled-components';
import TabMenu from '../components/main/TabMenu';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <TabMenu />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default Home;

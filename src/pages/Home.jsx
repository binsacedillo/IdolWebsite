import HeaderNavigation from "../components/HeaderNavigation";
import UnifiedFooter from "../components/UnifiedFooter";
import styled from "styled-components";
import backgroundImage from '../images/headerimage.png';

const PageContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: top center;
  background-repeat: repeat-y;
  background-attachment: scroll;
`;

export const Home = () => {

  return (
    <>
      <PageContainer>
        <HeaderNavigation />
        <UnifiedFooter />
      </PageContainer>
    </>
  );
};
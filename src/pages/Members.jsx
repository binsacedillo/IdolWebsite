import Nav from "../components/Nav";
import MyComponent from "../components/CenteredText";
import UnifiedFooter from "../components/UnifiedFooter";
import ModalImageGallery from "../components/ImageGallery";
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

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

export const Members = () => {

  return (
    <>
      <PageContainer>
        <ContentWrapper>
          <Nav />
          <MyComponent />
          <ModalImageGallery />
          <UnifiedFooter />
        </ContentWrapper>
      </PageContainer>
    </>
  );
};
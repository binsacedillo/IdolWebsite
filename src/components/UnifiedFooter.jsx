import styled from 'styled-components';
import image3 from '../images/llsunshine.png';
import additionalLogo from '../images/bushiroad.png';

const UnifiedFooter = () => {
  const FooterContainer = styled.footer`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
    backdrop-filter: blur(5px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    min-height: 120px;

    @media screen and (max-width: 500px) {
      flex-wrap: wrap;
      gap: 1rem;
      padding: 1.5rem 0.5rem;
      min-height: 100px;
    }

    @media screen and (min-width: 501px) and (max-width: 1024px) {
      padding: 2rem 1rem;
      min-height: 110px;
    }

    @media screen and (min-width: 1025px) {
      padding: 2rem 2rem;
      min-height: 120px;
    }

    @media screen and (min-width: 1441px) {
      padding: 2rem 3rem;
      min-height: 140px;
    }
  `;

  const BottomCenteredText = styled.div`
    position: relative;
    flex: 1;
    color: white;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 700;
    white-space: normal;
    line-height: 1.5;

    @media screen and (max-width: 500px) {
      width: 100%;
      order: 3;
      font-size: 0.65rem;
    }

    @media screen and (min-width: 501px) and (max-width: 1024px) {
      font-size: 0.75rem;
    }

    @media screen and (min-width: 1025px) {
      font-size: 0.8rem;
    }

    @media screen and (min-width: 1441px) {
      font-size: 0.9rem;
    }
  `;

  const LeftLogo = styled.img`
    position: relative;
    max-width: 100px;
    max-height: 100px;
    height: auto;

    @media screen and (max-width: 500px) {
      max-width: 60px;
      max-height: 60px;
      order: 1;
    }

    @media screen and (min-width: 501px) and (max-width: 1024px) {
      max-width: 80px;
      max-height: 80px;
    }

    @media screen and (min-width: 1025px) {
      max-width: 100px;
      max-height: 100px;
    }

    @media screen and (min-width: 1441px) {
      max-width: 120px;
      max-height: 120px;
    }
  `;

  const RightBottomImage = styled.img`
    position: relative;
    max-width: 100px;
    max-height: 100px;
    height: auto;

    @media screen and (max-width: 500px) {
      max-width: 60px;
      max-height: 60px;
      order: 2;
    }

    @media screen and (min-width: 501px) and (max-width: 1024px) {
      max-width: 80px;
      max-height: 80px;
    }

    @media screen and (min-width: 1025px) {
      max-width: 100px;
      max-height: 100px;
    }

    @media screen and (min-width: 1441px) {
      max-width: 120px;
      max-height: 120px;
    }
  `;

  return (
    <FooterContainer>
      <LeftLogo src={additionalLogo} alt="Additional Logo" />
      <BottomCenteredText>
        &#xA9; AQUORS, ALL RIGHTS RESERVED LOVE LIVE FRANCHISE 2023
      </BottomCenteredText>
      <RightBottomImage src={image3} alt="Right bottom image" />
    </FooterContainer>
  );
};

export default UnifiedFooter;

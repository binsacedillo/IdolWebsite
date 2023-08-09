import styled from 'styled-components';
import image3 from '../images/llsunshine.png';
import additionalLogo from '../images/bushiroad.png';

const Footer = () => {
   const BottomCenteredText = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    text-align: center;
    font-size: 0.5rem;
    font-weight: 700;
    white-space: nowrap; /* Ensure the text remains in one line */
    
    @media screen and (max-width: 500px) {
      top: 1020px;
      font-size: 0.4rem;
    }

    @media screen and (min-width: 501px) and (max-width: 1024px) {
      font-size: 0.5rem;
      top: 900px;
    }

    @media screen and (min-width: 1025px) {
      top: 670px;
      left: 45%;
      font-size: 0.6rem;
      max-width: 160px;
    }

    @media screen and (min-width: 1441px) {
      top: 660px;
      left: 40%;
      font-size: 1rem;
    }
  `;

  const LeftLogo = styled.img`
    position: absolute;
    bottom: 20px;
    left: 10px;
    max-width: 100px;
    max-height: 100px;

    @media screen and (max-width: 500px) {
       max-width: 80px;
      max-height: 80px;
      top: 1010px;
    }

    @media screen and (min-width: 501px) and (max-width: 1024px) {
       max-width: 140px;
      max-height: 100px;
           top: 883px;
      right: 2%;
    }

    @media screen and (min-width: 1025px) {
      max-width: 160px;
      max-height: 100px;
       top:  640px;
      left: 2%;
    }

    @media screen and (min-width: 1441px) {
      max-width: 160px;
      max-height: 100px;
      top:  640px;
      left: 2%;
    }
  `;

  const RightBottomImage = styled.img`
    position: absolute;
    bottom: 20px;
    right: 10px;
    max-width: 140px;
    max-height: 100px;

    @media screen and (max-width: 500px) {
      max-width: 80px;
      max-height: 80px;
      top: 1010px;
    }

    @media screen and (min-width: 501px) and (max-width: 1024px) {
     top: 883px;
      right: 2%;
      max-width: 140px;
      max-height: 100px;
    }

    @media screen and (min-width: 1025px) {
      max-width: 160px;
      max-height: 100px;
       top: 640px;
      right: 2%;
    }

    @media screen and (min-width: 1441px) {
      max-width: 160px;
      max-height: 100px;
    }
  `;

  return (
    <>
      <BottomCenteredText>&#xA9; AQUORS, ALL RIGHTS RESERVED LOVE LIVE FRANCHISE 2023</BottomCenteredText>
      <LeftLogo src={additionalLogo} alt="Additional Logo" />
      <RightBottomImage src={image3} alt="Right bottom image" />
    </>
  );
};

export default Footer;

import styled from 'styled-components';
import image3 from '../images/llsunshine.png';
import additionalLogo from '../images/bushiroad.png';

const FooterMusic = () => {

  const BottomCenteredText = styled.div`
    position: absolute;
    top: 295%; /* Adjust this value to center the text as per your preference */
    left: 50%;
    transform: translateX(-50%);
    color: white;
    text-align: center;
    font-size: 8px;
    font-weight: 700;
    white-space: nowrap; 

    /* Small screens */
    @media screen and (max-width: 500px) {
  /* CSS styles for mobile devices */
  top: 315%;
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
   top: 325%;
}

@media screen and (min-width: 1025px) {
  top: 215%;
}

  @media screen and (min-width: 1441px) {
   top: 215%;
  }
  `;

  const LeftLogo = styled.img`
    position: absolute;
    top: 293%;
    left: 10px;
    max-width: 120px;
    max-height: 120px;

   @media screen and (max-width: 500px) {
  /* CSS styles for mobile devices */
    top: 314.5%;
    left: 5px;
    max-width: 60px;
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
  top: 323%;
}

@media screen and (min-width: 1025px) {
    top: 213%;
}

  @media screen and (min-width: 1441px) {
    top: 210%;
  }
  `;

  const RightBottomImage = styled.img`
    position: absolute;
    top: 293%;
    right: 10px;
    max-width: 120px;
    max-height: 120px;

    /* Small screens */
   @media screen and (max-width: 500px) {
  /* CSS styles for mobile devices */
  top: 314.5%;
    right: 5px;
    max-width: 60px;
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
   top: 323%;
}

@media screen and (min-width: 1025px) {
   top: 213%;
}

  @media screen and (min-width: 1441px) {
     top: 210%;
  }
  `;

  return (
    <>
      <BottomCenteredText>&#xA9; AQUORS, ALL RIGHTS RESERVED.
       LOVE LIVE FRANCHISE 2023</BottomCenteredText>
      <LeftLogo src={additionalLogo} alt="Additional Logo" />
      <RightBottomImage src={image3} alt="Right bottom image" />
    </>
  );
};

export default FooterMusic;

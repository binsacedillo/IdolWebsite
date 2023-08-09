import styled from 'styled-components';
import HeroVideo from '../video/herovideo.mp4';
const HeroSection = styled.section`
  position: absolute;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 70%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

 @media screen and (max-width: 500px) {
  /* CSS styles for mobile devices */
  top: 40%;
  left: 50%;
  width: 90%;
  height: 40%;
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
  top: 45%;
  left: 50%;
  width: 90%;
  height: 50%;
}

@media screen and (min-width: 1025px) {
  /* CSS styles for larger screens */
  top: 55%;
  left: 50%;
  width: 90%;
  height: 70%;
}


@media screen and (orientation: landscape) {
 top: 100%;
  left: 50%;
  width: 90%;
  height: 100%;
  /* Styles for landscape orientation */
}

  @media screen and (min-width: 1441px) {
    /* CSS styles for even larger screens */
    font-size: 1rem;
    top: 55%;
    left: 50%;
    width: 90%;
    height: 70%;
  }
`;

const SecondaryText = styled.div`
  position: absolute;
  color: white;
  top: 95%;
  left: 35%;
  text-align: center;
  letter-spacing: 2px;
  font-size: 0.5rem;
  font-family: 'Rubik', sans-serif;
  font-style: italic;
  font-weight: 200;
  z-index: 2;

 @media screen and (max-width: 500px) {
  /* CSS styles for mobile devices */
  font-size: 0.3rem;
  top: 62%;
  left: 10%;
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
  font-size: 0.5rem;
  top: 70%;
  left: 25%;
}

@media screen and (min-width: 1025px) {
  /* CSS styles for larger screens */
  top: 90%;
  left: 30%;
}

@media screen and (orientation: landscape) {
   top: 90%;
  left: 30%;
}

  @media screen and (min-width: 1441px) {
    /* CSS styles for even larger screens */
    font-size: 1rem;
    top: 92%;
    left: 26%;
  }
`;

// New styled component for the new text
const NewText = styled.div`
  text-align: left;
  position: absolute;
   color: rgba(255, 255, 255, 0.6); /* Adjust the opacity value (0.6 in this example) to decrease the text opacity */
  top: 88%;
  left: 28%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  padding: 5px;
  font-family: 'Rubik', sans-serif;
  font-style: italic;
  font-weight: 600;
  border-radius: 20px;  
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  @media screen and (max-width: 500px) {
    /* CSS styles for mobile devices */
    font-size: 0.7rem;
    top: 57.3%;
    left: 23%;
  }

@media screen and (min-width: 501px) and (max-width: 1024px) {
    font-size: 1rem;
    top: 66.8%;
    left: 21.2%;
}

@media screen and (min-width: 1025px) {
  top: 86.4%;
  left: 14%;
}

@media screen and (min-width: 1441px) {
    /* CSS styles for even larger screens */
    font-size: 1rem;
    top: 86.4%;
    left: 11.6%;
  }
`;

const CenteredText = styled.div`
  position: absolute;
  color: white;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 3rem;
  font-family: 'Rubik', sans-serif;
  font-style: italic;
  font-weight: 600;
  z-index: 2;

@media screen and (max-width: 500px) {
  font-size: 2rem;
  width: 100%;
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
  font-size: 2rem;
  width: 100%;
}

@media screen and (min-width: 1025px) {
}

@media screen and (orientation: landscape) {
  top: 40%;
}

  @media screen and (min-width: 1441px) {
     top: 14%;
  }
`;

const HeroMedia = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 20px; /* Add your desired border radius value */
  overflow: hidden;
`;

const VideoPlayer = styled.video`
  /* Apply width and height to ensure the video fits within the rounded container */
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Hero = () => {
  return (
    <>
      {/* Existing text components */}
      <CenteredText>
        <p>LATEST RELEASES</p>
      </CenteredText>
      <SecondaryText>
        <p>THIS VIDEO IS PROPERTY OF THE LOVE LIVE FRANCHISE. ALL RIGHTS RESERVED.</p>
      </SecondaryText>

      {/* New text component */}
      <NewText>
        <p>
          {/* Wrap each letter in a span element and apply different styles */}
          <span style={{ color: 'rgba(0, 255, 255, 0.3) ) ' }}>K</span>
          <span style={{ color: 'rgba(0, 128, 0, 0.3)' }}>A</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>-</span>
          <span style={{ color: 'rgba(255, 255, 0, 0.3)' }}>G</span>
          <span style={{ color: 'rgba(255, 165, 0, 0.3) ' }}>A</span>
          <span style={{ color: 'rgba(0, 255, 255, 0.3) ) ' }}>Y</span>
          <span style={{ color: 'rgba(0, 255, 255, 0.3) ) ' }}>A</span>
          <span style={{ color: 'rgba(255, 0, 255, 0.3) ' }}>K</span>
          <span style={{ color: 'rgba(144, 238, 144, 0.3)' }}>I</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>-</span>
          <span style={{ color: 'rgba(255, 105, 180, 0.3)' }}>R</span>
          <span style={{ color: 'rgba(0, 255, 255, 0.3) ' }}>A</span>
          <span style={{ color: 'rgba(0, 255, 0, 0.3)' }}>-</span>
          <span style={{ color: 'rgba(0, 255, 0, 0.3)' }}>R</span>
          <span style={{ color: 'rgba(0, 255, 255, 0.3) ) ' }}>I</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>-</span>
          <span style={{ color: 'rgba(0, 255, 255, 0.3) ) ' }}>R</span>
          <span style={{ color: 'rgba(0, 255, 255, 0.3) ) ' }}>A</span>
        </p>
        <p>Released: August 24, 2022</p>
      </NewText>

      <HeroSection>
        <HeroMedia>
          <VideoPlayer
            src={HeroVideo}
            autoPlay
            loop
            muted
            controlsList="nodownload"
          />
        </HeroMedia>
      </HeroSection>
    </>
  );
};

export default Hero;
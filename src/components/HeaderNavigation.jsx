import { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/headerimage.png';
import image2 from '../images/aquors.png';
import image3 from '../images/llsunshine.png';
import additionalLogo from '../images/bushiroad.png';

const HeaderContainer = styled.header`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Prevent the background image from scrolling on small screens */

  @media screen and (max-width: 500px) {
   height: ${props => props.expanded ? 'auto' : '100vh'};
    transition: height 0.3s ease-in-out;
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
}

@media screen and (min-width: 1025px) {
  
}


@media screen and (orientation: landscape) {
  
}

  @media screen and (min-width: 1441px) {
  }
`;

const BottomCenteredText = styled.div`
  position: absolute;
  bottom: 20px; /* Adjust this value to center the text as per your preference */
  color: white;
  font-size: 0.5rem;
  font-weight: 700;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;
    margin-top: 10px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 15px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;

   @media screen and (max-width: 500px) {
  /* CSS styles for mobile devices */
  font-size: 0.6rem;
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
}

@media screen and (min-width: 1025px) {
 &:hover {
      color: blue;
      transform: scale(1.1);
    }
}

  @media screen and (min-width: 1441px) {
    &:hover {
      color: blue;
      transform: scale(1.1);
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 3rem;
  color: white;
  font-weight: 700;
  margin-top: 10rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 5rem;
    font-size: 3rem;
  }

  img {
    max-width: 250px;
    max-height: 150px;
    margin: 0;

    @media (min-width: 1024px) {
      max-width: 300px;
      max-height: 450px;
    }
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const LeftLogo = styled.img`
  position: absolute;
  bottom: 20px;
  left: 10px;
  max-width: 100px;
  max-height: 100px;

  @media screen and (max-width: 500px) {
  /* CSS styles for mobile devices */
   max-width: 50px;
  max-height: 100px;
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
}

@media screen and (min-width: 1025px) {
}

  @media screen and (min-width: 1441px) {
  }
`;

const RightBottomImage = styled.img`
  position: absolute;
  bottom: 20px;
  right: 10px;
  max-width: 100px;
  max-height: 100px;

  @media screen and (max-width: 500px) {
   max-width: 50px;
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
}

@media screen and (min-width: 1025px) {
}

  @media screen and (min-width: 1441px) {
  }
`;

const AdditionalTexts = styled.div`
  display: flex;
  color: white;
  text-align: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (min-width: 1024px) {
    margin-left: 200px;
    margin-right: 200px;
  }
`;

const ToggleButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.05);
  }
`;

const HeaderNavigation = () => {
  const [showAdditionalTexts, setShowAdditionalTexts] = useState(false);

  const handleToggleTexts = () => {
    setShowAdditionalTexts((prevValue) => !prevValue);
  };

  return (
    <HeaderContainer expanded={showAdditionalTexts}>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About Aquors</NavLink>
        <NavLink href="/members">Members</NavLink>
        <NavLink href="/music">Music</NavLink>
      </NavLinks>
      <TextContainer>
        <span>Welcome to</span>
        <img src={image2} alt="Image 2" />
        <span>Website</span>
      </TextContainer>
      <BottomCenteredText>&#xA9; AQUORS, ALL RIGHTS RESERVED LOVE LIVE FRANCHISE 2023</BottomCenteredText>
      <LeftLogo src={additionalLogo} alt="Additional Logo" />
      <RightBottomImage src={image3} alt="Right bottom image" />
      <AdditionalTexts style={{ display: showAdditionalTexts ? 'flex' : 'none' }}>
        <span>Aquors is a nine-member Japanese school idol group from Uranohoshi Girls High School in Numazu, Shizuoka Prefecture. The group was formed in 2015 by Chika Takami, Riko Sakurauchi, and You Watanabe. The other members are Hanamaru Kunikida, Kanan Matsuura, Dia Kurosawa, Ruby Kurosawa, Mari Ohara, and Yoshiko Tsushima.</span>
        <span>&ldquo;アクアは、静岡県沼津市の浦の星女子高等学校から来る9人組の日本のスクールアイドルグループです。このグループは2015年に高海千歌、桜内梨子、渡辺曜によって結成されました。他のメンバーは国木田花丸、松浦果南、黒澤ダイヤ、黒澤ルビィ、小原鞠莉、津島善子です。&rdquo;</span>
      </AdditionalTexts>
      <ToggleButton onClick={handleToggleTexts}>
        {showAdditionalTexts ? 'Hide Info' : 'Show Info'}
      </ToggleButton>
    </HeaderContainer>
  );
};

export default HeaderNavigation;

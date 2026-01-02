import { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImage from '../images/headerimage.png';
import headerImage from '../images/aquorsgroup.jpg';
import logo from '../images/aquors.png';

const NavLinks = () => {
    const [showTranslation, setShowTranslation] = useState(false);
  
    const TranslationText = styled.p`
    font-size: 1rem;
    color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    display: ${showTranslation ? 'block' : 'none'}; /* Toggle visibility based on showTranslation state */
    /* Add any other styles for the translation text here */
  `;
   const handleButtonClick = () => {
    setShowTranslation(!showTranslation); // Toggle the state when the button is clicked
  };

  const NavLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
    padding: 2rem 1rem;

     /* For screens with a maximum width of 500px */
    @media screen and (max-width: 500px) {
    min-height: auto;
      padding: 1.5rem 0.5rem;
      /* Your styles for small screens (up to 500px) here */
    }

    /* For screens with a minimum width of 501px and a maximum width of 1024px */
    @media screen and (min-width: 501px) and (max-width: 1024px) {
       min-height: 100vh;
      padding: 2rem 1rem;
      /* Your styles for medium screens (501px to 1024px) here */
    }

    /* For screens with a minimum width of 1025px */
    @media screen and (min-width: 1025px) {
       min-height: 100vh;
      padding: 2rem 2rem;
      /* Your styles for large screens (1025px and above) here */
    }

    /* For screens with a minimum width of 1441px */
    @media screen and (min-width: 1441px) {
       height: 100vh;
      /* Your styles for extra large screens (1441px and above) here */
    }
  `;

  const NavLinksInnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    padding-top: 20px; /* Add your desired padding value here */

    @media (max-width: 768px) {
      justify-content: space-around;
      gap: 10px;
    }
  `;

  const CustomNavLink = styled(RouterNavLink)`
    text-decoration: none;
    color: #333;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 15px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;

    @media screen and (max-width: 500px) {
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

  // New styles for the image container
  const ImageContainer = styled.div`
    position: absolute;
    top: 150px; /* Set your desired top position */
    left: 50px; /* Set your desired left position */

    /* For screens with a maximum width of 500px */
    @media screen and (max-width: 500px) {
      left: 25px;
      /* Your styles for small screens (up to 500px) here */
    }

    /* For screens with a minimum width of 501px and a maximum width of 1024px */
    @media screen and (min-width: 501px) and (max-width: 1024px) {
      left: 80px;
      top: 100px;
      /* Your styles for medium screens (501px to 1024px) here */
    }

    /* For screens with a minimum width of 1025px */
    @media screen and (min-width: 1025px) {
      top: 150px;
      left: 80px;
      /* Your styles for large screens (1025px and above) here */
    }

    /* For screens with a minimum width of 1441px */
    @media screen and (min-width: 1441px) {
      left: 30px;
      /* Your styles for extra large screens (1441px and above) here */
    }

  `;

  // Add the image source URL here
  const Image = styled.img`
    width: 600px; /* Set your desired width */
    height: 400px; /* Set your desired height */
    object-fit: cover;
    border-radius: 10px;
  
@media screen and (max-width: 500px) {
    /* CSS styles for mobile devices */
    width: 350px; /* Set your desired width */
    height: 200px;
  }

@media screen and (min-width: 501px) and (max-width: 1024px) {
  width: 450px; /* Set your desired width */
    height: 300px;
}

@media screen and (min-width: 1025px) {
  /* CSS styles for larger screens */
  width: 590px; /* Set your desired width */
    height: 400px;
}

@media screen and (min-width: 1441px) {
    /* CSS styles for even larger screens */
    width: 720px; /* Set your desired width */
    height: 400px;
  }
  `;

    const Logo = styled.img`
    width: 150px; /* Set your desired width */
    height: 50px; /* Set your desired height */
    object-fit: cover;
    margin-left: 10px;
    position: relative;
    top: 15px;
  `;

  // New styled component for movable texts
  const TextContainer = styled.div`
    position: absolute;
    top: 25%; /* Set your desired top position */
    right: 5%;
    left: 45%; /* Set your desired right position */
    font-weight: 600;
    
    /* For screens with a maximum width of 500px */
@media screen and (max-width: 500px) {
  top: 50%;
   right: 5%;
    left: 5%;
  /* Your styles for small screens (up to 500px) here */
}

/* For screens with a minimum width of 501px and a maximum width of 1024px */
@media screen and (min-width: 501px) and (max-width: 1024px) {
  /* Your styles for medium screens (501px to 1024px) here */
  top: 50%;
   right: 10%;
    left: 10%;
}

/* For screens with a minimum width of 1025px */
@media screen and (min-width: 1025px) {
  left: 50%;
  /* Your styles for large screens (1025px and above) here */
}

/* For screens with a minimum width of 1441px */
@media screen and (min-width: 1441px) {
  left: 50%;
  /* Your styles for extra large screens (1441px and above) here */
}

  `;

  const MovableText = styled.p`
    font-size: 1.2rem;
    color: #fff;
    padding: 10px;
    margin-bottom: 10px;

    @media screen and (max-width: 500px) {
    /* CSS styles for mobile devices */
  }

@media screen and (min-width: 501px) and (max-width: 1024px) {
}

@media screen and (min-width: 1025px) {
  /* CSS styles for larger screens */
}

@media screen and (min-width: 1441px) {
    /* CSS styles for even larger screens */
  }
    /* Add any other styles for the movable text here */
  `;

  const MovableTextt = styled.p`
    font-size: 2rem;
    color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    font-weight: 700;
  `;

  const TranslationButton = styled.button`
    font-size: 1rem;
    position: relative;
    left: 1%;
    color: #fff;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 5px;
    padding: 8px 16px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
      border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }

    &:active {
      background-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
    }
  `;

  return (
    <NavLinksContainer>
      <NavLinksInnerContainer>
        <CustomNavLink to="/" >
          Home
        </CustomNavLink>
        <CustomNavLink to="/About">
          About Aquors
        </CustomNavLink>
        <CustomNavLink to="/Members">
          Members
        </CustomNavLink>
        <CustomNavLink to="/Music">
          Music
        </CustomNavLink>
      </NavLinksInnerContainer>
      {/* Image container */}
      <ImageContainer>
        <Image src={headerImage} alt="Your Alt Text" />
      </ImageContainer>
      {/* Text container */}
      <TextContainer>
        <MovableTextt>About
            <Logo src={logo} alt="Your Alt Text" />
        </MovableTextt>
        <MovableText>Aquorsは、マルチメディアプロジェクト「Love Live！Sunshine!!」から始まった9人組の日本のアイドルグループです。このグループは、浦の星女学院高等学校の架空のスクールアイドルを演じています。オリジナルのグループは3人組で、新しいグループは9人組でした。 </MovableText>
        {/* Button to toggle the translation */}
         <TranslationButton onClick={handleButtonClick}>Show Translation</TranslationButton>
        {/* Translation text */}
        <TranslationText>
          {/* Add the translation here */}
       Aquors is a nine-member Japanese idol group that originated from the multimedia project Love Live! Sunshine!!. The group portrays the fictional school idols of Uranohoshi Girls High School. The original group consisted of three members, while the new group consisted of nine members.
        </TranslationText>
      </TextContainer>
    </NavLinksContainer>
  );
};

export default NavLinks;

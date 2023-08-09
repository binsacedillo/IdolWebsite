import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import backgroundImage from '../images/headerimage.png'; // Replace this with the path to your background image

const NavMusic = () => {
  const NavLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200vh;
    background-image: url(${backgroundImage}); /* Set the background image here */
    background-size: cover; /* Adjust the background size */
    background-position: center;

@media screen and (max-width: 500px) {
  height: 279vh;
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
  height: 295vh;
}

@media screen and (min-width: 1025px) {
 height: 240vh;
}


  @media screen and (min-width: 1441px) {
    height: 220vh;
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
    color: black;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 15px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;

@media screen and (max-width: 500px) {
  font-size: 0.7rem;
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
}

@media screen and (min-width: 1025px) {
}

  @media screen and (min-width: 1441px) {
    &:hover {
        color: rgb( 19, 255, 255 );
        transform: scale(1.1);
      }
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
    </NavLinksContainer>
  );
};

export default NavMusic;
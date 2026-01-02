import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

const Nav = () => {
  const NavLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 150px;
    padding: 20px;
    width: 100%;
    
    @media screen and (max-width: 500px) {
      min-height: 120px;
      padding: 15px;
    }

    @media screen and (min-width: 501px) and (max-width: 1024px) {
      min-height: 140px;
      padding: 20px;
    }

    @media screen and (min-width: 1025px) {
      min-height: 150px;
      padding: 20px;
    }

    @media screen and (min-width: 1441px) {
      min-height: 160px;
      padding: 25px;
    }
  `;

  const NavLinksInnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    padding-top: 20px; /* Add your desired padding value here */


    @media screen and (max-width: 500px) {
  
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
}

@media screen and (min-width: 1025px) {
}

  @media screen and (min-width: 1441px) {
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

  @media screen and (min-width: 1441px) {
    &:hover {
        color: blue;
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

export default Nav;
import styled from 'styled-components';
import backgroundImage from '../images/headerimage.png';

const Nav = () => {
  const NavLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 410vh;
    
   @media screen and (max-width: 500px) {
  /* CSS styles for mobile devices */
  height: 530vh;
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
  height: 450vh;
}

@media screen and (min-width: 1025px) {
  height: 410vh;
}

  @media screen and (min-width: 1441px) {
    height: 430vh;
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
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About Aquors</NavLink>
        <NavLink href="/members">Members</NavLink>
        <NavLink href="/music">Music</NavLink>
      </NavLinksInnerContainer>
    </NavLinksContainer>
  );
};

export default Nav;
import Nav from "../components/Nav";
import MyComponent from "../components/CenteredText";
import MembersFooter from "../components/FooterMembers";
import ModalImageGallery from "../components/ImageGallery";

export const Members = () => {

  return (
    <>
      <main>
        <Nav />
        <ModalImageGallery />
        <MyComponent />
        <MembersFooter />
      </main>
    </>
  );
};
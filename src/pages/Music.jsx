import NavMusic from "../components/NavMusic";
import Hero from "../components/Hero";
import MusicSection from "../components/MusicCategories";
import '../styles/Music.css';
import FooterMusic from "../components/FooterMusic";

export const Music = () => {

  return (
    <>
      <main>
        <NavMusic />
        <Hero />
        <MusicSection />
        <FooterMusic />
      </main>
    </>
  );
};
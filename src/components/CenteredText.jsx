import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import anju from '../images/inamianju.png';
import aida from '../images/aidarikako.png';
import you from '../images/shukasaito.png';
import aikyan from '../images/aikakobayashi.png';
import kanako from '../images/kanakotakatsuki.png';
import ai from '../images/aifurihata.png';
import arisa from '../images/arisakomiya.png';
import suwa from '../images/suwananaka.png';
import aina from '../images/ainasuzuki.png';

import logopng from '../images/aquors.png';

const Members = () => { 

const CenteredContainer = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  z-index: 5;
  backdrop-filter: blur(5px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media screen and (max-width: 500px) {
    padding: 1.5rem 0.5rem;
  }

  @media screen and (min-width: 501px) and (max-width: 1024px) {
    padding: 2rem 1rem;
  }

  @media screen and (min-width: 1025px) {
    padding: 3rem 2rem;
  }

  @media screen and (min-width: 1441px) {
    padding: 3rem 2rem;
  }
`;


const IconLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  margin-right: 10px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const MemberLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const CenteredText = styled.div`
  text-align: center;
  font-family: 'Rubik', sans-serif;
  font-size: 3rem;
  font-style: italic;
  font-weight: 600;
  color: white;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;

  @media screen and (max-width: 500px) {
  /* CSS styles for mobile devices */
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
}

@media screen and (min-width: 1025px) {
  
}

  @media screen and (min-width: 1441px) {
  }
`;


const RowBox = styled.div`
  color: white;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  width: 100%;
  max-width: 900px;
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  box-sizing: border-box;

  @media screen and (max-width: 500px) {
    width: 100%;
    max-width: 100%;
    padding: 15px 10px;
    margin-left: 0;
    margin-right: 0;
  }

  @media screen and (min-width: 501px) and (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    padding: 20px 15px;
  }

  @media screen and (min-width: 1025px) {
    width: 100%;
    max-width: 900px;
    padding: 20px;
  }

  @media screen and (min-width: 1441px) {
    width: 100%;
    max-width: 1000px;
    padding: 20px;
  }
`;

const MembersIcon = styled.img`
  width: 120px; // Adjust the size as needed
  height: 80px;
  position: relative;
  top: 20px;
  margin-right: 10px; // Add spacing between the icon and text
`;


const Image = styled.img`
  width: 100px;
  height: 150px;
  border-radius: 5%;
  margin-right: 20px;

 @media screen and (max-width: 500px) {
  /* CSS styles for mobile devices */
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
}

@media screen and (min-width: 1025px) {
  
}

  @media screen and (min-width: 1441px) {
  }
`;

const Information = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
`;

const SocialMediaIcons = styled.div`
  /* ... Add styles for icon spacing or size if needed ... */
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const MemberGroupContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin-bottom: 40px;
  box-sizing: border-box;

  @media screen and (max-width: 500px) {
    width: 100%;
    max-width: 100%;
    margin-bottom: 30px;
    padding: 0 10px;
  }

  @media screen and (min-width: 501px) and (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    padding: 0 15px;
  }

  @media screen and (min-width: 1025px) {
    width: 100%;
    max-width: 900px;
  }

  @media screen and (min-width: 1441px) {
    width: 100%;
    max-width: 1000px;
  }
`;

const MemberGroupTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;

const membersGroups = [
  {
    title: '1st Years',
    japaneseTitle: '一年生',
    members: [
      {
        name: 'Aika Kobayashi',
        japaneseName: '小林 愛香',
        description: "A fashionable and talented dancer who loves K-Pop and aspires to be a multi-singer. Voice of Yoshiko Tsushima.",
        image: aikyan,
        instagram: 'aika.kobayashi',
        twitter: 'aikyan_',
      },
       {
        name: 'Kanako Takatsuki',
        japaneseName: '高槻 かなこ',
        description: "She is a passionate and dedicated individual with diverse interests in gaming, anime, music, cosplay, and Japanese culture, while also having specific preferences in food. Voice of Hanamaru Kunikida.",
        image: kanako,
        instagram: 'kanako.tktk',
        twitter: 'Kanako_tktk',
      },
       {
        name: 'Ai Furihata',
        japaneseName: '降幡 愛',
        description: "She is a sensitive and artistic individual with a penchant for collecting T-shirts, listening to music, drawing, and a particular fondness for pandas. Voice of Ruby Kurosawa.",
        image: ai,
        instagram: 'furihatagram',
        twitter: 'furihata_ai',
      },
      // Add more members to the group as needed
    ],
  },
  {
    title: '2nd Years',
    japaneseTitle: '二年生',
    members: [
      {
        name: 'Inami Anju',
        japaneseName: '伊波 杏樹',
        description: "She is a carefree and talented individual with a wide range of hobbies, including singing, playing musical instruments, karate, and swimming, and has a particular love for meat and the anime Love Live!. Voice of Chika Takami.",
        image: anju,
        instagram: 'anju_inami',
        twitter: 'anju_inami',
      },
      {
        name: 'Rikako Aida',
        japaneseName: '逢田 梨香子',
        description: "Rikako is a curious and imaginative only child who enjoys indoor activities but is afraid of insects and injections. Voice of Riko Sakurauchi.",
        image: aida,
        instagram: 'rikako.aida',
        twitter: 'rikako_aida',
      },
      {
        name: 'Shuka Saito',
        japaneseName: '斉藤 朱夏',
        description: "A versatile and active person who loves music, sports, and cooking. Voice of You Watanabe.",
        image: you,
        instagram: 'shuka.saito',
        twitter: 'shuka_saito',
      },
      // Add more members to the group as needed
    ],
  },
  {
    title: '3rd Years',
    japaneseTitle: '三年生',
    members: [
      {
        name: 'Arisa Komiya',
        japaneseName: '小宮 有紗',
        description: "She is an artistic and enthusiastic individual with a deep passion for Japanese culture, manga, dance, films, superheroes, and K-Pop, showing a particular affinity for shinsengumi manga, Gintama, and Okita Sougo, while also enjoying a diverse range of foods and desserts, with strawberries being a favorite.Voice of Dia Kurosawa.",
        image: arisa,
        instagram: 'arisakomiya_official',
        twitter: 'box_komiyaarisa',
      },
      {
        name: 'Suwa Nanaka',
        japaneseName: '諏訪 ななか',
        description: "She is an independent, affectionate, playful, talented individual with diverse interests and fandoms. Voice of Kanan Matsuura.",
        image: suwa,
        instagram: 'n.suwawagram',  
        twitter: 'suwananaka',
      },
      {
        name: 'Aina Suzuki',
        japaneseName: '鈴木 愛奈',
        description: "Suzuki is a passionate and multi-talented individual with interests in music, sports, cooking, and gaming, though she may lack confidence in certain areas such as sports and ad-libbing. Voice of Mari Ohara.",
        image: aina,
        instagram: 'ainasuzuki_info',  
        twitter: 'aina_suzuki723',
      },
      // Add more members to the group as needed
    ],
  },
  // Add more groups with member data here if needed
];

 return (
    <CenteredContainer>
      <CenteredText>
        <MembersIcon src={logopng} alt="Members Icon" />

      Members
      </CenteredText>
      {membersGroups.map((group, groupIndex) => (
        <MemberGroupContainer key={groupIndex}>
          <MemberGroupTitle>{group.japaneseTitle} - {group.title}</MemberGroupTitle>
          {group.members.map((member, memberIndex) => (
            <RowBox key={memberIndex}>
              <Image src={member.image} alt={member.name} />
              <Information>
                <MemberLink>
                  <h2>{member.name}</h2>
                </MemberLink>
                <h4>{member.japaneseName}</h4>
                <p>{member.description}</p>
                <SocialMediaIcons>
                  {/* Instagram Icon */}
                  <IconLink href={`https://instagram.com/${member.instagram}`} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: '5px' }} />
                  </IconLink>

                  {/* Twitter Icon */}
                  <IconLink href={`https://twitter.com/${member.twitter}`} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: '5px' }} />
                  </IconLink>
                </SocialMediaIcons>
              </Information>
            </RowBox>
          ))}
        </MemberGroupContainer>
      ))}
    </CenteredContainer>
  );
};

export default Members;

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faSpotify } from '@fortawesome/free-brands-svg-icons'; 
import pic1 from '../images/albumcovers/song1.jpg';
import pic2 from '../images/albumcovers/song2.jpg';
import pic3 from '../images/albumcovers/song3.jpg';

const CenteredContainer = styled.div`
  position: absolute;
  color: white;
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  /* Glass effect background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.2); /* Change the color and opacity as needed */
    backdrop-filter: blur(10px); /* Adjust the blur amount as needed */
    z-index: -1;
  }

  @media screen and (max-width: 500px) {
    top: 220%;
    height: 180%;
    padding-bottom: 140px;
  }

@media screen and (min-width: 501px) and (max-width: 1024px) {
  top: 220%;
    height: 180%;
    padding-bottom: 320px;
}

@media screen and (min-width: 1025px) {
   top: 160%;
    height: 120%;
}

@media screen and (orientation: landscape) {
   top: 400%;
    height: 420%;
}

  @media screen and (min-width: 1441px) {
    top: 160%;
    height: 120%;
  }
`;

const MusicGridItem = styled.div`
  position: relative; /* Add position relative to the grid item */
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 500px) {
  grid-template-columns: 1fr;
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
  grid-template-columns: 1fr;
}

@media screen and (min-width: 1025px) {
}

  @media screen and (min-width: 1441px) {
  }
`;

const SongPicture = styled.img`
   max-width: 100%;
  max-height: 200px; /* You can adjust this value as needed */
  height: auto;
`;

const SongDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PlayButton = styled.a`
  background-color: #6B6C6C;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  display: flex; /* Add display flex to position the icon and text */
  align-items: center; /* Align items vertically */

  &:hover {
    background-color: #3C3C3C;
  }
`;

const PlaylistHeader = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: lightblue;
  margin-bottom: 20px;

  @media screen and (min-width: 501px) and (max-width: 1024px) {
    margin-top: 2rem;
  }
`;

const MusicGrid = () => {
   const songs = [
  {
    id: 1,
    song: '幻日ミステリウム',
    artist: 'Single by Aqours',
    album: 'Single',
    releaseDate: 'July 26, 2023',
    duration: '3:29',
    pictureUrl: pic1,
    playLink: 'https://open.spotify.com/track/6fg6hnVNpSgjacbtADgYoa?go=1&sp_cid=6880365f62cb7b93133c567eb4abbf0d&nd=1',
  },
  {
    id: 2,
    song: 'キミノタメボクノタメ',
    artist: 'Single by Aqours',
    album: 'Single',
    releaseDate: 'August 2, 2023',
    duration: '4:12',
    pictureUrl: pic2,
    playLink: 'https://open.spotify.com/track/1E3o8752X5uGQAHfXLq7pk?go=1&sp_cid=6880365f62cb7b93133c567eb4abbf0d&nd=1',
  },
  {
    id: 3,
    song: 'SORA, FUJI, SUNSHINE!',
    artist: 'Single by Aqours',
    album: 'Single',
    releaseDate: 'June 30, 2023',
    duration: '5:10',
    pictureUrl: pic3,
    playLink: 'https://open.spotify.com/track/2CdTxUbYzLHhFkmazcHrxr?go=1&sp_cid=6880365f62cb7b93133c567eb4abbf0d&nd=1',
  },
];

  return (
     <CenteredContainer>
      <div>
        <PlaylistHeader>AQOURS SONGS</PlaylistHeader>
        {songs.map((song) => (
          <MusicGridItem key={song.id}>
            <SongPicture src={song.pictureUrl} alt={song.song} />
            <SongDetails>
              <h3>{song.song}</h3>
              <p>Artist: {song.artist}</p>
              <p>Album: {song.album}</p>
              <p>Release Date: {song.releaseDate}</p>
              <p>Duration: {song.duration}</p>
              <PlayButton href={song.playLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSpotify} size="lg" style={{ marginRight: '10px', color: '#4AFF57' }} /> 
                Listen to Spotify
              </PlayButton>
            </SongDetails>
          </MusicGridItem>
        ))}
      </div>
    </CenteredContainer>
  );
};

export default MusicGrid;
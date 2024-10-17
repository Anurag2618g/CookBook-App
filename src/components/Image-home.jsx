// import { Typography } from '@mui/material';
import { Image } from 'react-bootstrap';

function HomeImg() {
  return (
    <div>
      <div className="image-home">
        <Image src={`${import.meta.env.BASE_URL}/Images/Home.png`} alt="Home" fluid />
      </div>
      <div className='wave-img' style={{ marginTop: '-80px' }}>
        <Image src={`${import.meta.env.BASE_URL}/wave.svg`} alt="icon" fluid />
      </div>
    </div>
  );
}

export default HomeImg;

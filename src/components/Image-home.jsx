import { Image } from 'react-bootstrap';

function HomeImg() {
  return (
    <div className="image-home">
      <Image src={`${import.meta.env.BASE_URL}/Images/Home.png`} alt="Home" fluid />
    </div>
  );
}

export default HomeImg;

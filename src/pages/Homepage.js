import Footer from '../components/Footer'
import '../styles/Homepage.css'
import Lottie from 'react-lottie'
import animationData from '../assets/hearts.json'

const Homepage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  return (
    <>
      <div className="home-container">
        
        <h1 className="CodeCupid">CodeCupid</h1>
        <h2 className="tagline">connecting_hearts_through code</h2>
        <Lottie className="hearts" options={defaultOptions} height={500} width={"100%"} />
      </div>

      <Footer />
    </>
  );
}

export default Homepage
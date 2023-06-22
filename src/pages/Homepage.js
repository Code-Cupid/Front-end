import Footer from '../components/Footer'
import '../Styling/Homepage.css'

const Homepage = () => {
  return (
    <>
      <div className="home-container">
        <h1 className='CodeCupid'>[code+cupid]</h1>
        <h2 className='tagline'>(connecting+hearts+through code)</h2>
      </div>

      <Footer />
    </>
  );
}

export default Homepage
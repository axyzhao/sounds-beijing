import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import one from './Images/1.jpg';
import two from './Images/2.jpg';
import three from './Images/3.jpg';
import four from './Images/4.jpg';
import five from './Images/5.jpg';
import six from './Images/6.jpg';
import seven from './Images/7.jpg';
import eight from './Images/8.jpg';

function App(props)
{
  return (
      <Carousel showArrows={true}>
          <div>
              <img src={one} />
              <p className="legend">Legend 1</p>
          </div>
          <div>
              <img src={two} />
              <p className="legend">Legend 2</p>
          </div>
          <div>
              <img src={three} />
              <p className="legend">Legend 3</p>
          </div>
      </Carousel>
  );
}
export default App;

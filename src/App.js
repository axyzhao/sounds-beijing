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
import Card from './components/Card';
import Arrow from './components/Arrow';
import LeftArrow from './components/LeftArrow';
import RightArrow from './components/RightArrow';

function App(props)
{

  return (
      <Carousel
          showThumbs={false}
          showLegend={false}

          renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (<LeftArrow onClickHandler={onClickHandler} label={label}/>
    )}
          renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (<RightArrow onClickHandler={onClickHandler} label={label}/>
  )}
          useKeyboardArrows={true}

      >
          <Card
          image={one}
          caption="oiwne"
          />
          <Card
          image={two}
          caption="oiwne"

          />
          <Card
          image={three}
          caption="oiwne"

          />
          <Card
          image={four}
          caption="oiwne"

          />
      </Carousel>
  );
}
export default App;

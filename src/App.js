import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "video-react/dist/video-react.css"; // import css

import { Carousel } from 'react-responsive-carousel';
import one from './Images/1.jpg';
import two from './Images/2.jpg';
import three from './Images/3.jpg';
import concert from './Images/school_concert.mp4';
import drums from './Images/drums.mp4';

import Card from './components/Card';
import Card_Video from './components/Card_Video';
import Title_Card from './components/Title_Card';
import LeftArrow from './components/Arrows/LeftArrow';
import RightArrow from './components/Arrows/RightArrow';

function App(props)
{

  return (
      <Carousel
          showThumbs={false}
          showLegend={false}
          transitionTime={0}

          renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (<LeftArrow onClickHandler={onClickHandler} label={label}/>
    )}
          renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (<RightArrow onClickHandler={onClickHandler} label={label}/>
  )}
          useKeyboardArrows={true}

      >
          <Title_Card
          title="Sounds of Beijing WIP (Do not distribute)"
          />
          <Card_Video
          video={drums}
          caption="Sounds of Beijing > Arjun going off on drums"
          />
      </Carousel>
  );
}
export default App;

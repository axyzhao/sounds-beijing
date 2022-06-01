import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "video-react/dist/video-react.css"; // import css

import { Carousel } from 'react-responsive-carousel';
import Import from './Import';

import copy from './copy.json';

import drums from './Images/drums.mp4';
import Video_Card_One from './components/Cards/Video_Card_One';
import Video_Card_Two from './components/Cards/Video_Card_Two';

import Title_Card from './components/Cards/Title_Card';
import Sound_Card from './components/Cards/Sound_Card';
import LeftArrow from './components/Arrows/LeftArrow';
import RightArrow from './components/Arrows/RightArrow';
import Progress from './components/Progress';

function App(props)
{

  const results = Import();
  const images = results[0];
  const sounds = results[1];
  const captions = copy["sound_captions"];
  const slides = copy['slides'];

  return (
    <div>
      <Carousel
          showThumbs={false}
          showLegend={false}
          showIndicators={false}
          transitionTime={0}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (<LeftArrow onClickHandler={onClickHandler} label={label}/>)}
          renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (<RightArrow onClickHandler={onClickHandler} label={label}/>)}

          statusFormatter={(current, total) =>
        (<Progress total={total} current={current}/>)}
          useKeyboardArrows={true}

      >
          <Title_Card
            copy={slides[0]}
            index={0}
          />
          <Video_Card_One
            video={drums}
            copy={slides[1]}
            index={1}
          />
          <Video_Card_Two
            video1={drums}
            video2={drums}
            copy={slides[1]}
            index={2}
          />

          <Sound_Card
            images={images}
            sounds={sounds}
            captions={captions}
            copy={slides[2]}
            index={3}
          />

        </Carousel>
      </div>
  );
}
export default App;

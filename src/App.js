import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "video-react/dist/video-react.css"; // import css

import { Carousel } from 'react-responsive-carousel';
import Import from './Import';

import copy from './copy.json';

import drums from './Images/drums.mp4';
import Video_Card from './components/Cards/Video_Card';
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
          title="WIP (Do not distribute)"
          />
          <Video_Card
          video={drums}
          caption="Drumming"
          copy={slides[0]}
          />

          <Sound_Card
          images={images}
          sounds={sounds}
          captions={captions}
          copy={slides[1]}
          />

        </Carousel>
      </div>
  );
}
export default App;

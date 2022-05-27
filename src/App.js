import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "video-react/dist/video-react.css"; // import css

import { Carousel } from 'react-responsive-carousel';
import one from './Images/1.jpg';
import two from './Images/2.jpg';
import three from './Images/3.jpg';
import concert from './Images/school_concert.mp4';
import drums from './Images/drums.mp4';

import jail from './Audio/jail.mp4';
import jail_pic from './Audio/jail.png';

import waterfall from './Audio/waterfall.wav';
import waterfall_pic from './Audio/waterfall.png';

import boba from './Audio/boba.wav';
import boba_pic from './Audio/boba.png';

import manzou from './Audio/manzou.wav';
import manzou_pic from './Audio/boba.png';

import thesis from './Audio/thesis.mp4';
import thesis_pic from './Audio/thesis.png';

import singer from './Audio/singer.wav';
import singer_pic from './Audio/singer.png';

import bike from './Audio/bike.mp4';
import bike_pic from './Audio/bike.png';

import temp from './Audio/temperature.m4a';
import temp_pic from './Audio/temperature.png';

import hello from './Audio/hello.m4a';
import hello_pic from './Audio/hello.png';

import Video_Card from './components/Cards/Video_Card';
import Title_Card from './components/Cards/Title_Card';
import Sound_Card from './components/Cards/Sound_Card';
import LeftArrow from './components/Arrows/LeftArrow';
import RightArrow from './components/Arrows/RightArrow';

function App(props)
{

  const images = [jail_pic, waterfall_pic, boba_pic,
    manzou_pic, thesis_pic, singer_pic, bike_pic, hello_pic, temp_pic];
  const sounds = [jail, waterfall, boba,
      manzou, thesis, singer, bike, hello, temp];
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
          <Video_Card
          video={drums}
          caption="SOUNDS OF BEIJING > Arjun going off on drums"
          copy="Tsinghua is full of sounds and sights. Click on an image to hear its sound. Click again to pause."
          />

          <Sound_Card
          images={images}
          sounds={sounds}
          caption="Sounds of Beijing > Select your sound on Tsinghua"
          copy="Tsinghua is full of sounds and sights. Click on an image to hear its sound. Click again to pause."
          />
      </Carousel>
  );
}
export default App;

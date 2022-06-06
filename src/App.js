import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "video-react/dist/video-react.css"; // import css
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Import from './Import';

import copy_full from './copy.json';

import drums from './Images/drums.mp4';
import singing from './Images/old_singing.mp4';
import mystery from './Images/mystery.png';

import Video_Card_One from './components/Cards/Video_Card_One';
import Video_Card_Two from './components/Cards/Video_Card_Two';
import Video_Card_Three from './components/Cards/Video_Card_Three';
import Video_Card_Four from './components/Cards/Video_Card_Four';
import Video_Card_Five from './components/Cards/Video_Card_Five';
import Video_Card_Six from './components/Cards/Video_Card_Six';
import Video_Card_Seven from './components/Cards/Video_Card_Seven';
import Video_Card_Eight from './components/Cards/Video_Card_Eight';
import Video_Card_Nine from './components/Cards/Video_Card_Nine';
import Video_Card_Ten from './components/Cards/Video_Card_Ten';

import Title_Card from './components/Cards/Title_Card';
import Sound_Card from './components/Cards/Sound_Card';
import Choice_Card from './components/Cards/Choice_Card';

import TableContents from './components/TableContents';

import LeftArrow from './components/Arrows/LeftArrow';
import RightArrow from './components/Arrows/RightArrow';
import Progress from './components/Progress';

function App(props)
{

  const [copy, setCopy] = useState(copy_full["english"]);

  const results = Import();
  const images = results[0];
  const sounds = results[1];
  const videos = results[2];
  const captions = copy["sound_captions"];
  const slides = copy['slides'];
  const toc_captions = slides.map((a) => a["caption"]);
  const indices = [1, 4, 6, 8];
  const clickers = [];
  const getData = function getData(val) {
    clickers.push(val);
  }
  const toc = (<TableContents
              clickers={clickers}
              captions={toc_captions}
              indices={indices}
            />);
  return (
    <div>
      <Carousel
          showThumbs={false}
          showLegend={false}
          showIndicators={true}
          transitionTime={0}
          autoFocus={true}
          renderIndicator={(clickHandler, isSelected, index, label) =>
            {getData(clickHandler)}}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (<LeftArrow onClickHandler={onClickHandler} label={label}/>)}
          renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (<RightArrow onClickHandler={onClickHandler} label={label}/>)}

          statusFormatter={(current, total) =>
        (<Progress total={total} current={current}/>)}
          useKeyboardArrows={true}

      >
          <Title_Card
            title_copy={copy["title"]}
            copyChinese={copy_full["chinese"]}
            copyEnglish={copy_full["english"]}
            setCopy={setCopy}
          />
          <Video_Card_Three
            video1={videos[0][0]}
            video2={videos[0][1]}
            copy={slides[0]}
            toc={toc}
          />
          <Video_Card_Six
            sound={videos[1][1]}
            image={videos[1][0]}
            video={videos[1][2]}
            copy={slides[1]}
            toc={toc}
          />
          <Video_Card_Eight
            video1={videos[21][0]}
            video2={videos[21][1]}
            video3={videos[21][2]}
            copy={slides[21]}
            toc={toc}
          />
          <Video_Card_Three
            video1={videos[2][0]}
            video2={videos[2][1]}
            copy={slides[2]}
            toc={toc}
          />

          <Video_Card_Seven
            video={videos[3][0]}
            sound1={videos[3][1]}
            sound2={videos[3][2]}
            image1={videos[3][3]}
            image2={mystery}
            label1="HelloBike"
            label2="Truck backing up"
            copy={slides[3]}
            toc={toc}
          />

          <Video_Card_Two
            video1={videos[4][0]}
            video2={videos[4][1]}
            copy={slides[4]}
            toc={toc}
          />

          <Video_Card_Two
            video1={videos[5][0]}
            video2={videos[5][1]}
            copy={slides[5]}
            toc={toc}
          />

          <Video_Card_Eight
            video1={videos[6][0]}
            video2={videos[6][1]}
            video3={videos[6][2]}
            copy={slides[6]}
            toc={toc}
          />

          <Video_Card_Nine
            video1={videos[7][0]}
            video2={videos[7][1]}
            video3={videos[7][2]}
            copy={slides[7]}
            toc={toc}
          />

          <Video_Card_Two
            video1={videos[8][0]}
            video2={videos[8][1]}
            copy={slides[8]}
            toc={toc}
          />

          <Video_Card_Nine
            video1={videos[9][0]}
            video2={videos[9][1]}
            video3={videos[9][2]}
            copy={slides[9]}
            toc={toc}
          />

          <Video_Card_Two
            video1={videos[10][0]}
            video2={videos[10][1]}
            copy={slides[10]}
            toc={toc}
          />
          <Video_Card_Two
            video1={videos[11][0]}
            video2={videos[11][1]}
            copy={slides[11]}
            toc={toc}
          />
          <Video_Card_Four
            video1={videos[12][0]}
            video2={videos[12][1]}
            copy={slides[12]}
            toc={toc}
          />
          <Video_Card_Five
            video1={videos[13][0]}
            video2={videos[13][1]}
            video3={videos[13][2]}
            copy={slides[13]}
            toc={toc}
          />
          <Video_Card_Three
            video1={videos[14][0]}
            video2={videos[14][1]}
            copy={slides[14]}
            toc={toc}
          />
          <Video_Card_Two
            video1={videos[15][0]}
            video2={videos[15][1]}
            copy={slides[15]}
            toc={toc}
          />
          <Video_Card_Five
            video1={videos[16][0]}
            video2={videos[16][1]}
            video3={videos[16][2]}
            copy={slides[16]}
            toc={toc}
          />
          <Video_Card_Three
            video1={videos[17][0]}
            video2={videos[17][1]}
            copy={slides[17]}
            toc={toc}
          />
          <Video_Card_Four
            video1={videos[18][0]}
            video2={videos[18][1]}
            copy={slides[18]}
            toc={toc}
          />

          <Video_Card_Ten
            video1={videos[19][2]}
            video2={videos[19][3]}
            sound={videos[19][1]}
            image={videos[19][0]}
            copy={slides[19]}
            toc={toc}
            />
          <Video_Card_Two
            video1={videos[20][0]}
            video2={videos[20][1]}
            copy={slides[20]}
            toc={toc}
          />

          <Sound_Card
            images={images}
            sounds={sounds}
            captions={captions}
            labels={copy["sound_labels"]}
            copy={slides[2]}
            index={3}
            toc={toc}
          />

          <Choice_Card
            hiddenImage={videos[22][1]}
            mystery={mystery}
            sound={videos[22][0]}
            captions={copy["multiple_choice"]}
            copy={slides[22]}
            index={4}
            toc={toc}
          />

        </Carousel>
      </div>
  );
}
export default App;

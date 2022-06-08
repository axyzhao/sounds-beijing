import { useState } from 'react';
import Import from './Import';

import copy_full from './copy.json';

import bar from './Images/bar_11_1.mp4';
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
import Choice_Card2 from './components/Cards/Choice_Card2';

import End_Card from './components/Cards/End_Card';

import TableContents from './components/TableContents';


function constructChildren(clickers) {
  const [copy, setCopy] = useState(copy_full["english"]);
  const [lang, setLang] = useState("english");

  const results = Import();
  const images = results[0];
  const sounds = results[1];
  const videos = results[2];
  const captions = copy["sound_captions"];
  const slides = copy['slides'];
  const toc_captions = slides.map((a) => a["caption"]);
  const indices = [0, 1,  4,  6,  8, 10, 11, 12, 14, 18, 19, 21, 22, 23, 25];

    const toc = (<TableContents
                clickers={clickers}
                captions={toc_captions}
                indices={indices}
              />);

    const children = [<Title_Card
      title_copy={slides[0]}
      copyChinese={copy_full["chinese"]}
      copyEnglish={copy_full["english"]}
      setCopy={setCopy}
      setLang={setLang}
    />,
    <Video_Card_Three
      video1={videos[0][0]}
      video2={videos[0][1]}
      copy={slides[1]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Six
      sound={videos[1][1]}
      image={videos[1][0]}
      video={videos[1][2]}
      copy={slides[2]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Eight
      video1={videos[21][0]}
      video2={videos[21][1]}
      video3={videos[21][2]}
      copy={slides[3]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Three
      video1={videos[2][0]}
      video2={videos[2][1]}
      copy={slides[4]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Seven
      video={videos[3][0]}
      sound1={videos[3][1]}
      sound2={videos[3][2]}
      image1={videos[3][3]}
      image2={videos[3][4]}
      label1="HelloBike unlocking"
      label2="Kuaidi tricycle backing up"
      copy={slides[5]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Two
      video1={videos[4][0]}
      video2={videos[4][1]}
      copy={slides[6]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Two
      video1={videos[5][0]}
      video2={videos[5][1]}
      copy={slides[7]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Eight
      video1={videos[6][0]}
      video2={videos[6][1]}
      video3={videos[6][2]}
      copy={slides[8]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Nine
      video1={videos[7][0]}
      video2={videos[7][1]}
      video3={videos[7][2]}
      copy={slides[9]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Two
      video1={videos[8][0]}
      video2={videos[8][1]}
      copy={slides[10]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Nine
      video1={videos[9][0]}
      video2={videos[9][1]}
      video3={videos[9][2]}
      copy={slides[11]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Two
      video1={videos[10][0]}
      video2={videos[10][1]}
      copy={slides[12]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Two
      video1={videos[11][0]}
      video2={videos[11][1]}
      copy={slides[13]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Four
      video1={videos[12][0]}
      video2={videos[12][1]}
      copy={slides[14]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Five
      video1={videos[13][0]}
      video2={videos[13][1]}
      video3={videos[13][2]}
      copy={slides[15]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Three
      video1={videos[14][0]}
      video2={videos[14][1]}
      copy={slides[16]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Two
      video1={videos[15][0]}
      video2={videos[15][1]}
      copy={slides[17]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Five
      video1={videos[16][0]}
      video2={videos[16][1]}
      video3={videos[16][2]}
      copy={slides[18]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Three
      video1={videos[17][0]}
      video2={videos[17][1]}
      copy={slides[19]}
      toc={toc}
      lang={lang}
    />,
    <Video_Card_Four
      video1={videos[18][0]}
      video2={videos[18][1]}
      copy={slides[20]}
      toc={toc}
      lang={lang}
    />,

    <Video_Card_Ten
      video1={videos[19][2]}
      video2={videos[19][3]}
      sound={videos[19][1]}
      image={videos[19][0]}
      copy={slides[21]}
      toc={toc}
      lang={lang}
      />,
    <Video_Card_Two
      video1={videos[20][0]}
      video2={videos[20][1]}
      copy={slides[22]}
      toc={toc}
      lang={lang}
    />,

    <Sound_Card
      images={images.slice(0, 6)}
      sounds={sounds.slice(0, 6)}
      captions={captions.slice(0, 6)}
      labels={copy["sound_labels"].slice(0, 6)}
      copy={slides[23]}
      toc={toc}
      lang={lang}
    />,

    <Sound_Card
      images={images.slice(6, 12)}
      sounds={sounds.slice(6, 12)}
      captions={captions.slice(6, 12)}
      labels={copy["sound_labels"].slice(6, 12)}
      copy={slides[24]}
      toc={toc}
      lang={lang}
    />,

    <Choice_Card
      mystery={mystery}
      sound={videos[22][0]}
      copy={slides[25]}
      toc={toc}
      lang={lang}
      button_key="first"
    />,
    <Choice_Card2
      mystery={mystery}
      sound={videos[23][0]}
      copy={slides[26]}
      toc={toc}
      lang={lang}
      button_key="second"
    />,
    <End_Card
      copy={slides[27]}
    />
  ]

    return children;
};

export default constructChildren;

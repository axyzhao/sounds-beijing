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

function Import(props) {
  const images = [jail_pic, waterfall_pic, boba_pic,
    manzou_pic, thesis_pic, singer_pic, bike_pic, hello_pic, temp_pic];
  const sounds = [jail, waterfall, boba,
      manzou, thesis, singer, bike, hello, temp];
  return [images, sounds];
}

export default Import;

import SoundButton from './SoundButton.js';
import Label from './Text/Label';
import Title from './Text/Title';
import Textbox from './Text/Textbox';
import {useState} from 'react';

const Sound_Card = (props) => {

  const { images, sounds, captions, copy, index } = props;
  const imgStyles: CSSProperties = {
    height: "160px",
    width: "160px",
    margin: "0 auto",
  }

  const [text, setText] = useState(copy['text']);

  const caption = copy['caption'];
  const title = copy['title'];
  const author = copy['author'];

  return (
    <div className="card-container">
      <Label className={caption} caption={caption} />
      <Title title={title} author={author} />
      <Textbox copy={text} />
      <div className="card" style={{"textAlign": "center"}}>
        <div className="table">
          <div
            className="row"
          >
            <div
              className="column"
            >
              <SoundButton
                sound={sounds[0]}
                image={images[0]}
                imgStyles={imgStyles}
                caption={captions[0]}
                setText={setText}
              />
            </div>
            <div
              className="column"
            >
              <SoundButton
                sound={sounds[1]}
                image={images[1]}
                imgStyles={imgStyles}
                caption={captions[1]}
                setText={setText}
              />
            </div>
            <div
              className="column"
            >
              <SoundButton
                sound={sounds[2]}
                image={images[2]}
                imgStyles={imgStyles}
                caption={captions[2]}
                setText={setText}
              />
            </div>
          </div>

          <div
            className="row"
          >
            <div
              className="column"
            >
              <SoundButton
                sound={sounds[3]}
                image={images[3]}
                imgStyles={imgStyles}
                caption={captions[3]}
                setText={setText}
              />
            </div>
            <div
              className="column"
            >
              <SoundButton
                sound={sounds[4]}
                image={images[4]}
                imgStyles={imgStyles}
                caption={captions[4]}
                setText={setText}
              />
            </div>
            <div
              className="column"
            >
              <SoundButton
                sound={sounds[5]}
                image={images[5]}
                imgStyles={imgStyles}
                caption={captions[5]}
                setText={setText}
              />
            </div>
          </div>

          <div
            className="row"
          >
            <div
              className="column"
            >
              <SoundButton
                sound={sounds[6]}
                image={images[6]}
                imgStyles={imgStyles}
                caption={captions[6]}
                setText={setText}
              />
            </div>
            <div
              className="column"
            >
              <SoundButton
                sound={sounds[7]}
                image={images[7]}
                imgStyles={imgStyles}
                caption={captions[7]}
                setText={setText}
              />
            </div>
            <div
              className="column"
            >
              <SoundButton
                sound={sounds[8]}
                image={images[8]}
                imgStyles={imgStyles}
                caption={captions[8]}
                setText={setText}
              />
            </div>
          </div>
          </div>
      </div>
      {/* <p className="legend">{caption}</p> */}
    </div>
  );
};

export default Sound_Card;

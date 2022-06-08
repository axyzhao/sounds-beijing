import SoundButton from './SoundButton.js';
import Label from './Text/Label';
import Title from './Text/Title';
import Textbox from './Text/Textbox';
import { useState } from 'react';

const Sound_Card = (props) => {

  const { images, lang, sounds, captions, labels, copy, index, toc, key } = props;
  const imgStyles: CSSProperties = {
    height: "200px",
    width: "200px",
    margin: "0 auto",
  }

  const [text, setText] = useState(copy['text']);

  const caption = copy['caption'];
  const title = copy['title'];
  const author = copy['author'];

  return (
    <div className="card-container">
      <Label className={caption} caption={caption} toc={toc} />
      <Title title={title} author={author} />
      <Textbox lang={lang} copy={text} type="long" />
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
                label={labels[0]}
                imgStyles={imgStyles}
                caption={captions[0]}
                setText={setText}
                key={key}
                lang={lang}
              />
            </div>
            <div
              className="column"
            >
              <SoundButton
                sound={sounds[1]}
                image={images[1]}
                label={labels[1]}
                lang={lang}
                imgStyles={imgStyles}
                caption={captions[1]}
                setText={setText}
                key={key}

              />
            </div>
            <div
              className="column"
            >
              <SoundButton
                sound={sounds[2]}
                image={images[2]}
                label={labels[2]}
                lang={lang}
                imgStyles={imgStyles}
                caption={captions[2]}
                setText={setText}
                key={key}

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
                label={labels[3]}
                lang={lang}
                imgStyles={imgStyles}
                caption={captions[3]}
                setText={setText}
                key={key}

              />
            </div>
            <div
              className="column"
            >
              <SoundButton
                sound={sounds[4]}
                image={images[4]}
                label={labels[4]}
                key={key}
                lang={lang}
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
                label={labels[5]}
                key={key}
                lang={lang}
                imgStyles={imgStyles}
                caption={captions[5]}
                setText={setText}
              />
            </div>
          </div>

          </div>
      </div>
    </div>
  );
};

export default Sound_Card;

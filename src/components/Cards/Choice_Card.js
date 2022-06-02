import ChoiceButton from './ChoiceButton.js';
import Label from './Text/Label';
import Title from './Text/Title';
import Textbox from './Text/Textbox';
import {useState} from 'react';
import useSound from 'use-sound';

const Choice_Card = (props) => {

  const { images, sounds, captions, copy, index } = props;
  const imgStyles: CSSProperties = {
    height: "120px",
    width: "200px",
    margin: "0 auto",
  }

  const mysteryStyles: CSSProperties = {
      width: "200px",
      margin: "auto",
    }

  const [play, { stop }] = useSound(sounds[0], {interrupt: true,});

  const [text, setText] = useState(copy['text']);

  const caption = copy['caption'];
  const title = copy['title'];
  const author = copy['author'];

  return (
    <div className="card-container">
      <Label className={caption} caption={caption} />
      <Title title={title} author={author} />
      <img style={mysteryStyles} src={images[0]} />
      <div className="card" style={{"textAlign": "center"}}>
        <div className="table">
          <div
            className="row"
          >
            <div
              className="column"
            >
              <ChoiceButton
                caption={captions[0]}
                right={false}
                setText={setText}
              />
            </div>
            <div
              className="column"
            >
              <ChoiceButton
                caption={captions[1]}
                right={false}
                setText={setText}
              />
            </div>
            <div
              className="column"
            >
            <ChoiceButton
              caption={captions[2]}
              right={false}
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
            <ChoiceButton
              caption={captions[3]}
              right={false}
              setText={setText}
            />
            </div>
            <div
              className="column"
            >
            <ChoiceButton
              caption={captions[4]}
              right={false}
              setText={setText}
            />
            </div>
            <div
              className="column"
            >
            <ChoiceButton
              caption={captions[5]}
              right={false}
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

export default Choice_Card;

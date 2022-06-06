import {useState} from 'react';
import useSound from 'use-sound';

import ChoiceButton from './ChoiceButton';
import Label from './Text/Label';
import Title from './Text/Title';
import Textbox from './Text/Textbox';
import SoundButton_Choice from './SoundButton_Choice';

const Choice_Card = (props) => {

  const { sound, mystery, hiddenImage, captions, copy, index, toc } = props;

  const [play, { stop }] = useSound(sound, {interrupt: true,});
  const [text, setText] = useState(copy['text']);
  const [image, setImage] = useState(mystery);

  const caption = copy['caption'];
  const title = copy['title'];
  const author = copy['author'];

  return (
    <div className="card-container">
      <Label className={caption} caption={caption} toc={toc} />
      <Title title={title} author={author} />
      <SoundButton_Choice sound={sound} image={image} />

      <Textbox copy={text} type="long" />

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
                right={true}
                setText={setText}
                setImage={setImage}
                image={hiddenImage}
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

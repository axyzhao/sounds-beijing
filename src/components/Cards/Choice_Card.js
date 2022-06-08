import {useState} from 'react';
import useSound from 'use-sound';

import ChoiceButton from './ChoiceButton';
import Label from './Text/Label';
import Title from './Text/Title';
import Textbox from './Text/Textbox';
import SoundButton_Choice from './SoundButton_Choice';

const Choice_Card = (props) => {
  const { sound, mystery, hiddenImage, copy,
    index, toc, lang, button_key } = props;

  const [play, { stop }] = useSound(sound, {interrupt: true,});
  const [text, setText] = useState(copy['text']);
  const [show, setShow] = useState(false);

  const caption = copy['caption'];
  const title = copy['title'];
  const author = copy['author'];
  const captions = copy['multiple_choice'];
  const vidStyle: CSSProperties = {
      width: "200px",
      height: "200px",
      margin: "auto",
      marginTop: "24px",
      marginBottom: "24px"
  };

  var comp;
  if (show) {
    comp = (<video style={vidStyle} autoPlay="autoplay">
                    <source src={sound} type="video/mp4" />
                  </video>);
  } else {
    comp = <SoundButton_Choice sound={sound} image={mystery} />;
  }

  return (
    <div className="card-container">
      <Label className={caption} caption={caption} toc={toc} />
      <Title title={title} author={author} />
      {comp}

      <Textbox lang={lang} copy={text} type="long" />

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
                setShow={setShow}
                image={hiddenImage}
                button_key={button_key}
              />
            </div>
            <div
              className="column"
            >
              <ChoiceButton
                caption={captions[1]}
                right={false}
                setText={setText}
                button_key={button_key}
              />
            </div>
            <div
              className="column"
            >
            <ChoiceButton
              caption={captions[2]}
              right={false}
              setText={setText}
              button_key={button_key}
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
              button_key={button_key}
            />
            </div>
            <div
              className="column"
            >
            <ChoiceButton
              caption={captions[4]}
              right={false}
              setText={setText}
              button_key={button_key}
            />
            </div>
            <div
              className="column"
            >
            <ChoiceButton
              caption={captions[5]}
              right={false}
              setText={setText}
              button_key={button_key}
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

import { Player } from 'video-react';
import Label from './Text/Label';
import Textbox from './Text/Textbox';
import Title from './Text/Title';
import classNames from "classnames";
import SoundButton from './SoundButton';

const Video_Card_Six = (props) => {
  const { sound, lang, image, video, copy, index, label, toc, mobile } = props;
  const setText = (a) => {return null};

  const caption = copy["caption"];
  const imgStyles: CSSProperties = {
    height: "98%",
    width: "100%",
    margin: "0 auto",
  }

  if (mobile) {
    return (
      <div className="card-container">
      <Label caption={caption} toc={toc} />
        <div className="card">
              <Title title={copy["title"]} author={copy["author"]} />
              <Textbox lang={lang} copy={copy["text"]} type="tall"/>
              <SoundButton
                sound={sound}
                image={image}
                imgStyles={imgStyles}
                caption={caption}
                setText={setText}
                label={label}
                buttonClass="image"
              />
            <Player
              src={video}
              autoplay={true}
            />
          </div>
      </div>
    );
  }

  return (
    <div className="card-container">
    <Label caption={caption} toc={toc} />
      <div className="card">
          <div className="cell" style={{width: "60%"}}>
          <div className="video-container" style={{width: "80%"}}>
                <SoundButton
                  sound={sound}
                  image={image}
                  imgStyles={imgStyles}
                  caption={caption}
                  setText={setText}
                  label={label}
                  buttonClass="image"
                />
            </div>
          </div>
          <div className="cell" style={{width: "100%"}}>
          <div className="video-container" style={{width: "100%"}}>
          <Title title={copy["title"]} author={copy["author"]} />
          <Textbox lang={lang} copy={copy["text"]} type="tall"/>
              <Player
                src={video}
                autoplay={true}
              />
          </div>
          </div>
        </div>
    </div>
  );
};

export default Video_Card_Six;

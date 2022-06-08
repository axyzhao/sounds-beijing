import { Player } from 'video-react';
import Label from './Text/Label';
import Textbox from './Text/Textbox';
import Title from './Text/Title';
import classNames from "classnames";
import SoundButton from './SoundButton';

const Video_Card_Ten = (props) => {
  const { video1, lang, video2, sound, image, copy, index, label, toc } = props;

  const caption = copy["caption"];
  const setText = (a) => {return null};
  const imgStyles: CSSProperties = {

  }

  return (
    <div className="card-container">
    <Label caption={caption} toc={toc} />

      <div className="card">

      <div className="cell" style={{width: "30%"}}>
        <div className="video-container" style={{width: "100%"}}>
                    <Player
                      src={video1}
                      autoplay={true}
                    />
                </div>

              </div>
              <div className="cell" style={{width: "60%"}}>
              <div className="video-container" style={{width: "80%", height: "76%"}}>
                <g>
                <Title title={copy["title"]} author={copy["author"]} />
                <Textbox lang={lang} copy={copy["text"]} type="middle"/>
                </g>
                <div style={{height: "50%"}}>
                  <SoundButton
                    sound={sound}
                    image={image}
                    imgStyles={imgStyles}
                    caption={caption}
                    setText={setText}
                    label={label}
                    buttonClass="image-big"
                  />
                </div>

            </div>
          </div>
          <div className="cell" style={{width: "30%"}}>
            <div className="video-container" style={{width: "100%"}}>
              <Player
                src={video2}
                autoplay={true}
              />
          </div>
          </div>
        </div>
    </div>
  );
};

export default Video_Card_Ten;

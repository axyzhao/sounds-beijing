import { Player } from 'video-react';
import Label from './Text/Label';
import Textbox from './Text/Textbox';
import Title from './Text/Title';
import classNames from "classnames";
import SoundButton from './SoundButton';

const Video_Card_Seven = (props) => {
  const { sound1, lang, sound2, image1, image2,
          label1, label2, video, copy, toc, mobile
        } = props;
  const setText = (a) => {return null};

  const caption = copy["caption"];
  //const imgStyles: CSSProperties = {border: "2px solid"}
  const imgStyles: CSSProperties = {};

  if (mobile) {
    return (
      <div className="card-container">
      <Label caption={caption} toc={toc} />
        <div className="card">
            <Title title={copy["title"]} author={copy["author"]} />
            <Textbox lang={lang} copy={copy["text"]} type="tall"/>
            <Player
              src={video}
              autoplay={true}
            />
            <SoundButton
              sound={sound1}
              image={image1}
              imgStyles={imgStyles}
              caption={caption}
              setText={setText}
              label=""
              buttonClass="image-small"
            />
            <SoundButton
              sound={sound2}
              image={image2}
              label=""
              imgStyles={imgStyles}
              caption={caption}
              setText={setText}
              buttonClass="image-small"
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
                <Player
                  src={video}
                  autoplay={true}
                />
            </div>
          </div>
          <div className="cell" style={{width: "100%"}}>
          <div className="video-container" style={{width: "100%"}}>
          <g>
            <g>
              <Title title={copy["title"]} author={copy["author"]} />
              <Textbox lang={lang} copy={copy["text"]} type="tall-with-margin"/>
            </g>
            <div style={{marginTop: "32px", display: "flex", "flexDirection": "row"}}>
                <SoundButton
                  sound={sound1}
                  image={image1}
                  imgStyles={imgStyles}
                  caption={caption}
                  setText={setText}
                  label={label1}
                  buttonClass="image-small"
                />
                <div style={{paddingBottom: "40px"}}>
                <SoundButton
                  sound={sound2}
                  image={image2}
                  label={label2}
                  imgStyles={imgStyles}
                  caption={caption}
                  setText={setText}
                  buttonClass="image-small"
                />
                </div>
                </div>
                </g>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Video_Card_Seven;

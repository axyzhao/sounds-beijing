import { Player } from 'video-react';
import Label from './Text/Label';
import Textbox from './Text/Textbox';
import Title from './Text/Title';
import classNames from "classnames";

const Video_Card_Three = (props) => {
  const { video1,lang, video2, copy, index, toc, mobile } = props;
  const caption = copy["caption"];

  if (mobile) {
    return (
      <div className="card-container">
      <Label caption={caption} toc={toc} />
        <div className="card">
              <Title title={copy["title"]} author={copy["author"]} />
              <Player
                src={video1}
                autoplay={true}
              />
              <Textbox lang={lang} copy={copy["text"]} type="tall"/>
              <Player
                src={video2}
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
                  <Player
                    src={video1}
                    autoplay={true}
                  />
              </div>
            </div>
          <div className="cell" style={{width: "100%"}}>
          <div className="video-container" style={{width: "100%"}}>
            <Title title={copy["title"]} author={copy["author"]} />
            <Textbox lang={lang} copy={copy["text"]} type="tall"/>
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

export default Video_Card_Three;

import { Player } from 'video-react';
import Label from './Text/Label';
import Textbox from './Text/Textbox';
import Title from './Text/Title';
import classNames from "classnames";

const Video_Card_Three = (props) => {
  const { video1, video2, copy, index } = props;

  const copy1 = copy["one"];
  const copy2 = copy["two"];
  const caption = copy["caption"];

  return (
    <div className="card-container">
      <Label caption={caption} />
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
              <Player
                src={video2}
                autoplay={true}
              />
              <Title title={copy1["title"]} author={copy1["author"]} />
              <Textbox id={`${index}`} copy={copy1["text"]} type="tall"/>
              <Title title={copy1["title"]} author={copy1["author"]} />
          </div>
          </div>
        </div>
    </div>
  );
};

export default Video_Card_Three;

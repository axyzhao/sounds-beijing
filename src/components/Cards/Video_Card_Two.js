import { Player } from 'video-react';
import Label from './Text/Label';
import Textbox from './Text/Textbox';
import Title from './Text/Title';
import classNames from "classnames";

const Video_Card_Two = (props) => {
  const { video1, video2, copy, index } = props;

  const copy1 = copy["one"];
  const copy2 = copy["two"];
  const caption = copy["caption"];

  return (
    <div className="card-container">
      <Label caption={caption} />
      <div className="card">
      <div className="cell" style={{width: "40%"}}>
        <div className="video-container" style={{width: "90%"}}>
                    <Player
                      src={video1}
                      autoplay={true}
                    />
                </div>

              </div>
              <div className="cell" style={{width: "40%"}}>
              <div
                className="explainer"
              >
                <Title title={copy1["title"]} author={copy1["author"]} />

                <Textbox id={`${index}`} copy={copy1["text"]} type="tall"/>
                <Title title={copy2["title"]} author={copy2["author"]} />

                <Textbox id={`${index}`} copy={copy2["text"]} type="tall"/>
              </div>
          </div>
          <div className="cell" style={{width: "40%"}}>
            <div className="video-container" style={{width: "90%"}}>
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

export default Video_Card_Two;

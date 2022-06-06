import { Player } from 'video-react';
import Label from './Text/Label';
import Textbox from './Text/Textbox';
import Title from './Text/Title';
import classNames from "classnames";

const Video_Card_Five = (props) => {
  const { video1, video2, video3, copy, index, toc } = props;

  const caption = copy["caption"];

  return (
    <div className="card-container">
    <Label caption={caption} toc={toc} />
      <Title title={copy["title"]} author={copy["author"]} />
      <Textbox id={`${index}`} copy={copy["text"]} type="long"/>

      <div className="card">

      <div className="cell" style={{width: "40%"}}>
        <div className="video-container" style={{width: "75%"}}>
                    <Player
                      src={video1}
                      autoplay={true}
                    />
                </div>

              </div>
              <div className="cell" style={{width: "40%"}}>
              <div className="video-container" style={{width: "75%"}}>
                <Player
                  src={video2}
                  autoplay={true}
                />
            </div>
          </div>
          <div className="cell" style={{width: "40%"}}>
            <div className="video-container" style={{width: "75%"}}>
              <Player
                src={video3}
                autoplay={true}
              />
          </div>
          </div>
        </div>
    </div>
  );
};

export default Video_Card_Five;

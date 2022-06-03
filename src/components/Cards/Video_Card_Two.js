import { Player } from 'video-react';
import AnnotatedBox from './Text/AnnotatedBox';
import Label from './Text/Label';

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
              <div className="video-container" style={{width: "100%"}}>
                <AnnotatedBox xPos={10}
                              arrowWidth={5}
                              yPos={50}
                              arrowHeight={7}
                              copy={copy1}
                              left={true}
                              />
                <AnnotatedBox xPos={90}
                              arrowWidth={5}
                              yPos={50}
                              arrowHeight={7}
                              copy={copy2}
                              />
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

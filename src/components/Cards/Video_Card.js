import { Player } from 'video-react';
import Label from './Label.js';
import Textbox from './Textbox.js';

const Video_Card = (props) => {

  const { video, caption, copy } = props;
  const captionStyles: CSSProperties = {
      position: "relative",
      width: "100%",
      top: "0px",
      left: "500px",
    }
    const videoStyles: CSSProperties = {
        textAlign: "center",
      }

  return (
    <div className="card-container">
    <Label caption={caption} />
    <Textbox copy={copy} />

      <div className="card">
      <div
        className="video-container"
      >
          <Player
            muted
            fluid={false}
            src={video}
            height="78%"
            width="59%"
            autoplay={true}
          />
      </div>
      <div
        className="video-container"
        style={videoStyles}
      >
          <Player
            fluid={false}
            src={video}
            height="78%"
            width="59%"
            autoplay={true}
          />
      </div>

      </div>
      {/*      <p
            className="legend"
            style={captionStyles}
            >
            {caption}
            </p>*/}


    </div>
  );
};

export default Video_Card;

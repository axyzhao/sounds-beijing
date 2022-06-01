import { Player } from 'video-react';
import Label from './Text/Label';
import Textbox from './Text/Textbox';
import Title from './Text/Title';

const Video_Card = (props) => {

  const { video, copy, index } = props;
  const captionStyles: CSSProperties = {
      position: "relative",
      width: "100%",
      top: "0px",
      left: "500px",
    }
    const videoStyles: CSSProperties = {
        textAlign: "center",
      }

  const caption = copy['caption'];
  const title = copy['title'];
  const author = copy['author'];
  const text = copy['text'];

  return (
    <div className="card-container">
      <Label caption={caption} />
      <Title title={title} author={author} />
      <Textbox id={`${index}`} copy={text} />

      <div className="card">
      <div
        className="video-container"
      >
          <Player
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
    </div>
  );
};

export default Video_Card;

import { Player } from 'video-react';
import Label from './Text/Label';
import Textbox from './Text/Textbox';
import Title from './Text/Title';
import classNames from "classnames";

const Video_Card_Two = (props) => {
  const { video1, video2, copy, index } = props;

  const caption = copy['caption'];
  const title = copy['title'];
  const author = copy['author'];
  const text = copy['text'];

  return (
    <div className="card-container">
      <Label caption={caption} />
      <div className="card">
          <div className="cell">
          <div className={classNames({"video-container": true, two: true})}>
                    <Player
                      src={video1}
                      autoplay={true}
                    />
                </div>

              </div>
            <div className="cell">
              <div
                className="explainer"
              >
                <Title title={title} author={author} />

                <Textbox id={`${index}`} copy={text} type="tall"/>
              </div>
          </div>
          <div className="cell">
          <div className={classNames({"video-container": true, two: true})}>
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

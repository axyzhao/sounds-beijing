import { Player } from 'video-react';
import Label from './Text/Label';
import Textbox from './Text/Textbox';
import Title from './Text/Title';
import classNames from "classnames";

const Video_Card_One = (props) => {
  const { video, copy, index, toc } = props;

  const caption = copy['caption'];
  const title = copy['title'];
  const author = copy['author'];
  const text = copy['text'];

  return (
    <div className="card-container">
      <Label caption={caption} toc={toc} />
      <div className="card">
          <div className="cell">
                <div className="video-container" style={{width: "60%"}}>
                    <Player
                      src={video}
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
        </div>
    </div>
  );
};

export default Video_Card_One;

import { Player } from 'video-react';
import Label from './Text/Label';
import Textbox from './Text/Textbox';
import Title from './Text/Title';

const Video_Card_One = (props) => {
  const { video, copy, index } = props;

  const caption = copy['caption'];
  const title = copy['title'];
  const author = copy['author'];
  const text = copy['text'];

  return (
    <div className="card-container">
      <Label caption={caption} />
      <div className="card">
          <div className="cell">
                <div className="video-container">
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

import { Player } from 'video-react';
import Label from './Text/Label';
import Textbox from './Text/Textbox';
import Title from './Text/Title';
import classNames from "classnames";

const Video_Card_Nine = (props) => {
  const { video1, lang, video2, video3, copy, index, toc, mobile} = props;

  const caption = copy["caption"];
  if (mobile) {
    return (
      <div className="card-container">
      <Label caption={caption} toc={toc} />

        <div className="card">
            <Title title={copy["title"]} author={copy["author"]} />
            <Textbox lang={lang} copy={copy["text"]} type="middle"/>
            <Player
              src={video1}
              autoplay={true}
            />
            <Player
              src={video2}
              autoplay={true}
            />
            <div style={{paddingBottom: "40px"}}>
              <Player
                src={video3}
                autoplay={true}
              />
            </div>
            </div>
        </div>
    );
  }
  return (
    <div className="card-container">
    <Label caption={caption} toc={toc} />

      <div className="card">

      <div className="cell" style={{width: "30%"}}>
        <div className="video-container" style={{width: "100%"}}>
                    <Player
                      src={video1}
                      autoplay={true}
                    />
                </div>

              </div>
              <div className="cell" style={{width: "60%"}}>
              <div className="video-container" style={{width: "80%", height: "76%"}}>
              <g>
                <Title title={copy["title"]} author={copy["author"]} />
                <Textbox lang={lang} copy={copy["text"]} type="middle"/>
                </g>

                <Player
                  src={video2}
                  autoplay={true}
                />

            </div>
          </div>
          <div className="cell" style={{width: "30%"}}>
            <div className="video-container" style={{width: "100%"}}>
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

export default Video_Card_Nine;

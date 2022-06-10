import { Player } from 'video-react';
import Label from './Text/Label';
import Textbox from './Text/Textbox';
import Title from './Text/Title';
import classNames from "classnames";

const Video_Card_Four = (props) => {
  const { video1, video2, lang, copy, index, toc, mobile } = props;

  const copy1 = copy["one"];
  const copy2 = copy["two"];
  const caption = copy["caption"];

  if (mobile) {
    return (
      <div className="card-container">
      <Label caption={caption} toc={toc} />
        <div className="card">
            <Title title={copy1["title"]} author={copy1["author"]} />
            <Textbox lang={lang} copy={copy1["text"]} type="tall"/>
            <Player
              src={video1}
              autoplay={true}
            />
            
            <Title title={copy2["title"]} author={copy2["author"]} />
            <Textbox lang={lang} copy={copy2["text"]} type="tall"/>
            <Player
              src={video2}
              autoplay={true}
            />
        </div>
    </div>
    );
  }

  return (
    <div className="card-container">
    <Label caption={caption} toc={toc} />
      <div className="card">
          <div className="cell" style={{width: "100%"}}>
            <div className="video-container" style={{width: "95%"}}>
            <div>
              <Title title={copy1["title"]} author={copy1["author"]} />
              <Textbox lang={lang} copy={copy1["text"]} type="tall"/>
            </div>
                  <Player
                    src={video1}
                    autoplay={true}
                  />
              </div>
            </div>
          <div className="cell" style={{width: "100%"}}>
          <div className="video-container" style={{width: "95%"}}>
              <Player
                src={video2}
                autoplay={true}
              />
              <div>
                <Title title={copy2["title"]} author={copy2["author"]} />
                <Textbox lang={lang} copy={copy2["text"]} type="tall"/>
              </div>
          </div>
          </div>
        </div>
    </div>
  );
};

export default Video_Card_Four;

import { Player } from 'video-react';
import AnnotatedBox from './Text/AnnotatedBox';
import Label from './Text/Label';
import Textbox from './Text/Textbox';
import Title from './Text/Title';


import classNames from "classnames";

const Video_Card_Two = (props) => {
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
          <div style={{paddingBottom: "40px"}}>

          <Player
            src={video2}
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
                <AnnotatedBox xPos={70}
                              yPos={40}
                              triHeight={30}
                              copy={copy1}
                              left={true}
                              lang={lang}
                              />
                <AnnotatedBox xPos={30}
                              triHeight={30}
                              yPos={80}
                              copy={copy2}
                              lang={lang}
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

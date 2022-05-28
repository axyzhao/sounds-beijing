import Label from './Label.js';
import SoundButton from './SoundButton.js';
import Textbox from './Textbox.js';

const Sound_Card = (props) => {

  const { images, sounds, caption, copy } = props;
  const imgStyles: CSSProperties = {
    height: "180px",
    width: "180px",
    margin: "0 auto",
    }

  return (
    <div className="card-container">
      <Label caption={caption} />
      <Textbox copy={copy} />
      <div className="card" style={{"textAlign": "center"}}>
        <div className="table">
          <div
            className="row"
          >
            <div
              className="column"
            >
              <SoundButton sound={sounds[0]} image={images[0]} imgStyles={imgStyles} />
            </div>
            <div
              className="column"
            >
            <SoundButton sound={sounds[1]} image={images[1]} imgStyles={imgStyles} />
            </div>
            <div
              className="column"
            >
            <SoundButton sound={sounds[2]} image={images[2]} imgStyles={imgStyles} />
            </div>
          </div>

          <div
            className="row"
          >
            <div
              className="column"
            >
            <SoundButton sound={sounds[3]} image={images[3]} imgStyles={imgStyles} />
            </div>
            <div
              className="column"
            >
            <SoundButton sound={sounds[4]} image={images[4]} imgStyles={imgStyles} />
            </div>
            <div
              className="column"
            >
            <SoundButton sound={sounds[5]} image={images[5]} imgStyles={imgStyles} />
            </div>
          </div>

          <div
            className="row"
          >
            <div
              className="column"
            >
            <SoundButton sound={sounds[6]} image={images[6]} imgStyles={imgStyles} />
            </div>
            <div
              className="column"
            >
            <SoundButton sound={sounds[7]} image={images[7]} imgStyles={imgStyles} />
            </div>
            <div
              className="column"
            >
            <SoundButton sound={sounds[8]} image={images[8]} imgStyles={imgStyles} />
            </div>
          </div>
          </div>
      </div>
      {/* <p className="legend">{caption}</p> */}
    </div>
  );
};

export default Sound_Card;

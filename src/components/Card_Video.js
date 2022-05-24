import { Player } from 'video-react';

const Card_Video = (props) => {

  const { video, caption } = props;
  const imgStyles: CSSProperties = {
    }

  return (
    <div className="card-container">
      <div className="card">
          <Player
            fluid={false}
            src={video}
            height="80%"
            width="34%"
            autoplay={true}
          />
      </div>
      {/* <p className="legend">{caption}</p> */}
    </div>
  );
};

export default Card_Video;

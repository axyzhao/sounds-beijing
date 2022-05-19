const Card = (props) => {

  const { image, caption } = props;
  const imgStyles: CSSProperties = {
      width: "auto",
      height: "100%",
      margin: "0 auto",
      textAlign:"left",
      left: "0",
    }

  return (
    <div className="card-container">
      <div className="card">
        <img style={imgStyles} src={image} className="card-image" />
      </div>
      {/* <p className="legend">{caption}</p> */}
    </div>
  );
};

export default Card;

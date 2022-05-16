const Card = (props) => {

  const { image, caption } = props;
  return (
    <div className="card">
      <img src={image} />
      <p className="legend">{caption}</p>
    </div>
  );
};

export default Card;
